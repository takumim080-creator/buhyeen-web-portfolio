'use strict';
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigation');
function closeNav(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeNav();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeNav();toggle.focus();}});
const dialog=document.querySelector('.demo-dialog');document.querySelectorAll('[data-open-demo]').forEach(b=>b.addEventListener('click',()=>dialog.showModal()));document.querySelectorAll('[data-close-demo]').forEach(b=>b.addEventListener('click',()=>dialog.close()));dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
