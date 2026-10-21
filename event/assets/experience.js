(()=>{'use strict';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');
 document.querySelectorAll('[data-pointer-card]').forEach(card=>{
  card.querySelectorAll('img').forEach(img=>img.draggable=false);
  card.addEventListener('pointermove',e=>{if(!fine.matches||reduced.matches||e.pointerType!=='mouse')return;const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;card.style.setProperty('--card-x',((x/r.width)-.5)*8+'px');card.style.setProperty('--card-y',((y/r.height)-.5)*6+'px');card.style.setProperty('--note-x',Math.max(80,Math.min(r.width-80,x))+'px');card.style.setProperty('--note-y',Math.max(28,Math.min(r.height-32,y))+'px');});
  card.addEventListener('pointerleave',()=>{card.style.setProperty('--card-x','0px');card.style.setProperty('--card-y','0px');});
 });
 document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{if(reduced.matches)return;document.querySelectorAll('.vendor:not([hidden])').forEach((vendor,i)=>vendor.animate([{opacity:.65,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,delay:Math.min(i*22,88),easing:'ease-out'}));}));
 if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;if(!reduced.matches){const angle=getComputedStyle(entry.target).getPropertyValue('--cut-angle')||'0deg';entry.target.animate([{transform:'rotate('+angle+') translateY(12px)'},{transform:'rotate('+angle+') translateY(0)'}],{duration:330,easing:'cubic-bezier(.4,.14,.3,1)'});}observer.unobserve(entry.target);}},{threshold:.1});document.querySelectorAll('.market-cut').forEach(el=>observer.observe(el));}
})();
