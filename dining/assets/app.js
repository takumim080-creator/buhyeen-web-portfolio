(()=>{'use strict';
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
const closeMenu=()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');};
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
const form=document.querySelector('#reservation-form');if(!form)return;
const course=document.querySelector('#course'),guests=document.querySelector('#guests'),time=document.querySelector('#time'),pairing=document.querySelector('#pairing'),dialog=document.querySelector('#confirmation');
const requested=new URLSearchParams(location.search).get('course');if(['ki','sumi'].includes(requested))course.value=requested;
const money=n=>new Intl.NumberFormat('ja-JP').format(n)+'円';
const total=()=>((course.value==='ki'?9800:13800)+({none:0,sake:3200,tea:1800}[pairing.value]))*Number(guests.value);
const update=()=>document.querySelector('#estimate').textContent=money(total());
form.addEventListener('change',update);form.addEventListener('submit',e=>{e.preventDefault();});update();
document.querySelector('#show-confirmation').addEventListener('click',()=>{
 const details=[['コース',course.selectedOptions[0].textContent],['人数',guests.selectedOptions[0].textContent],['開始時間',time.value],['お飲み物',pairing.selectedOptions[0].textContent],['参考合計',money(total())+'（税込）']];
 const list=document.querySelector('#confirmation-details');list.replaceChildren();
 for(const [label,value] of details){const row=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=value;row.append(dt,dd);list.append(row);}
 dialog.showModal();document.body.classList.add('no-scroll');
});
document.querySelector('#close-confirmation').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{document.body.classList.remove('no-scroll');document.querySelector('#show-confirmation').focus();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
})();
