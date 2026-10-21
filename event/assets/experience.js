(()=>{'use strict';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');
 const motionButton=document.querySelector('.motion-toggle'),isReduced=()=>reduced.matches||document.documentElement.classList.contains('motion-reduced');
 const syncMotion=()=>{if(isReduced())document.getAnimations().forEach(a=>a.cancel());if(motionButton){motionButton.hidden=false;motionButton.disabled=reduced.matches;motionButton.setAttribute('aria-pressed',String(isReduced()));motionButton.textContent=reduced.matches?'動きを控えています':isReduced()?'このページの動きを戻す':'このページの動きを控える';}};
 if(motionButton)motionButton.addEventListener('click',()=>{document.documentElement.classList.toggle('motion-reduced');syncMotion();});reduced.addEventListener('change',syncMotion);syncMotion();
 document.querySelectorAll('[data-pointer-card]').forEach(card=>{
  card.querySelectorAll('img').forEach(img=>img.draggable=false);
  card.addEventListener('pointermove',e=>{if(!fine.matches||isReduced()||e.pointerType!=='mouse')return;const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;card.style.setProperty('--card-x',((x/r.width)-.5)*8+'px');card.style.setProperty('--card-y',((y/r.height)-.5)*6+'px');card.style.setProperty('--note-x',Math.max(80,Math.min(r.width-80,x))+'px');card.style.setProperty('--note-y',Math.max(28,Math.min(r.height-32,y))+'px');});
  card.addEventListener('pointerleave',()=>{card.style.setProperty('--card-x','0px');card.style.setProperty('--card-y','0px');});
 });
 document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{if(isReduced())return;document.querySelectorAll('.vendor:not([hidden])').forEach((vendor,i)=>vendor.animate([{opacity:.65,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:150,delay:Math.min(i*18,54),easing:'cubic-bezier(.2,0,.38,.9)'}));}));
 if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;if(!isReduced()){const angle=getComputedStyle(entry.target).getPropertyValue('--cut-angle')||'0deg';entry.target.animate([{transform:'rotate('+angle+') translateY(12px)'},{transform:'rotate('+angle+') translateY(0)'}],{duration:330,easing:'cubic-bezier(.4,.14,.3,1)'});}observer.unobserve(entry.target);}},{threshold:.1});document.querySelectorAll('.market-cut').forEach(el=>observer.observe(el));}
})();
