(()=>{'use strict';
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 document.querySelectorAll('.dish-entry').forEach(detail=>{
  detail.addEventListener('toggle',()=>{
   const label=detail.querySelector('.dish-open-label');if(label)label.textContent=detail.open?'とじる':'ひらく';
   if(detail.open&&!reduce.matches&&!document.documentElement.classList.contains('motion-reduced'))detail.querySelector('.dish-reading').animate([{opacity:.45,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:220,easing:'ease-out'});
  });
  detail.addEventListener('keydown',event=>{if(event.key==='Escape'&&detail.open){detail.open=false;detail.querySelector('summary').focus();event.stopPropagation();}});
 });
})();
