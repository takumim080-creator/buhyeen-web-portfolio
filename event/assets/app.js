(()=>{'use strict';
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
const closeMenu=()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');};
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}else{const open=document.querySelector('details[open]');if(open){open.open=false;open.querySelector('summary').focus();}}}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
const filters=[...document.querySelectorAll('[data-filter]')],vendors=[...document.querySelectorAll('[data-category]')];
const names={all:'すべての出店者',food:'食の出店者',craft:'工芸の出店者',experience:'体験の出店者',music:'音楽の出店者'};
const filter=category=>{if(!Object.hasOwn(names,category))category='all';let count=0;for(const vendor of vendors){vendor.hidden=category!=='all'&&vendor.dataset.category!==category;if(!vendor.hidden)count++;}for(const btn of filters)btn.setAttribute('aria-pressed',String(btn.dataset.filter===category));document.querySelector('#filter-status').textContent=names[category]+' '+count+'件を表示';};
if(filters.length){for(const btn of filters)btn.addEventListener('click',()=>{filter(btn.dataset.filter);const url=new URL(location.href);if(btn.dataset.filter==='all')url.searchParams.delete('category');else url.searchParams.set('category',btn.dataset.filter);history.replaceState(null,'',url);});filter(new URLSearchParams(location.search).get('category')||'all');}
})();
