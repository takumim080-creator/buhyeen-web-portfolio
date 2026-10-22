'use strict';
(()=>{
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 document.querySelectorAll('.reading-letter').forEach(story=>story.addEventListener('toggle',()=>{
  const label=story.querySelector('.reading-label');if(label)label.textContent=story.open?'便りを閉じる':'続きを読む';
  const body=story.querySelector('.letter-body');if(story.open&&body&&!reduced.matches)body.animate([{opacity:.75,transform:'translateY(4px)'},{opacity:1,transform:'none'}],{duration:220,easing:'ease-out'});
 }));
 if(!reduced.matches&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('photo-shown');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('[data-cafe-photo]').forEach(photo=>{photo.classList.add('photo-prepared');observer.observe(photo);});}
})();
