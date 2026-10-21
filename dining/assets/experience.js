(()=>{'use strict';
 const reduce=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');
 const motionButton=document.querySelector('.motion-toggle'),isReduced=()=>reduce.matches||document.documentElement.classList.contains('motion-reduced');
 const syncMotion=()=>{if(isReduced())document.getAnimations().forEach(a=>a.cancel());if(motionButton){motionButton.hidden=false;motionButton.disabled=reduce.matches;motionButton.setAttribute('aria-pressed',String(isReduced()));motionButton.textContent=reduce.matches?'動きを控えています':isReduced()?'このページの動きを戻す':'このページの動きを控える';}};
 if(motionButton)motionButton.addEventListener('click',()=>{document.documentElement.classList.toggle('motion-reduced');syncMotion();});reduce.addEventListener('change',syncMotion);syncMotion();
 const stage=document.querySelector('[data-dish-view]'),image=document.querySelector('#dish-photo'),buttons=[...document.querySelectorAll('[data-dish]')];
 if(stage&&image){
  const dishes=[{src:'course',alt:'お造り、焼き魚、煮物、ご飯と椀を並べた秋のおまかせ',caption:'季節を少しずつ。秋のおまかせ。',number:'一'},{src:'fish',alt:'陶の皿に盛られた焼き魚、大根おろしと柑橘',caption:'焼きたての香ばしさを、そのままに。',number:'二'},{src:'sake',alt:'木のカウンターに置かれた陶の徳利と二つの酒器',caption:'食事のあとに続く、もうひとつの余韻。',number:'三'}];
  let selected=0;
  const select=(n,announce=true)=>{if(n===selected)return;selected=n;const dish=dishes[n];image.getAnimations().forEach(a=>a.cancel());image.src='assets/'+dish.src+'.jpg';image.alt=dish.alt;document.querySelector('#dish-caption').textContent=dish.caption;document.querySelector('#dish-number').textContent=dish.number;buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===n)));if(announce)document.querySelector('#dish-status').textContent=dish.caption;if(!isReduced())image.animate([{opacity:.45},{opacity:1}],{duration:420,easing:'ease-out'});};
  buttons.forEach((button,i)=>{button.addEventListener('click',()=>select(i));button.addEventListener('pointerenter',e=>{if(fine.matches&&e.pointerType==='mouse')select(i,false);});});
  image.draggable=false;
 }
})();
