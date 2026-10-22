'use strict';
(()=>{
 const button=document.querySelector('.room-look');
 if(!button)return;
 const caption=document.querySelector('#room-caption');
 const image=button.querySelector('.room-image');
 const action=button.querySelector('.room-action');
 button.addEventListener('click',()=>{
  const wide=button.getAttribute('aria-pressed')!=='true';
  button.setAttribute('aria-pressed',String(wide));
  button.classList.toggle('is-wide',wide);
  const label=wide?'窓辺に戻る':'店内を広く見る';
  button.setAttribute('aria-label',label);
  action.textContent=label;
  caption.textContent=wide?'窓辺と奥のカウンター。思い思いに過ごせる18席。':'窓から入る光と、木のテーブル。';
  image.alt=wide?'大きな窓のそばのテーブルから、奥のカウンターまで見渡す店内イメージ':'大きな窓のそばに置かれた木のテーブルと椅子';
 });
})();
