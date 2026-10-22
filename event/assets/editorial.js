(()=>{'use strict';
 const data=document.querySelector('#plaza-data');if(!data)return;
 const stalls=JSON.parse(data.textContent),byId=new Map(stalls.map(s=>[s.id,s])),entries=new Map();
 for(const stall of stalls){
  if(stall.sessions)for(const [id,time,title] of stall.sessions)entries.set(id,{id,stall:stall.id,name:stall.name+'「'+title+'」',time,zone:stall.zone});
  else entries.set(stall.id,{id:stall.id,stall:stall.id,name:stall.name,time:stall.visit,zone:stall.zone});
 }
 const key='yohaku-detour-v1',selected=new Set(),reduce=matchMedia('(prefers-reduced-motion: reduce)');let storageAvailable=true;
 try{const saved=JSON.parse(sessionStorage.getItem(key)||'[]');if(Array.isArray(saved))for(const id of saved)if(entries.has(id))selected.add(id);}catch{storageAvailable=false;}
 const reduced=()=>reduce.matches||document.documentElement.classList.contains('motion-reduced');
 const save=()=>{try{sessionStorage.setItem(key,JSON.stringify([...selected]));}catch{storageAvailable=false;}};
 const memo=document.querySelector('.detour-note'),list=memo?.querySelector('.memo-list'),status=memo?.querySelector('.memo-status');
 const render=(announcement='')=>{
  if(list){
   list.replaceChildren();const ordered=[...selected].map(id=>entries.get(id)).sort((a,b)=>a.time.localeCompare(b.time));
   for(const item of ordered){const li=document.createElement('li'),text=document.createElement('div'),name=document.createElement('strong'),time=document.createElement('span'),remove=document.createElement('button');name.textContent=item.name;time.textContent=item.time+'　'+item.zone;remove.type='button';remove.textContent='外す';remove.dataset.memoRemove=item.id;remove.setAttribute('aria-label',item.name+'をメモから外す');text.append(name,time);li.append(text,remove);list.append(li);}
   memo.querySelector('[data-memo-count]').textContent=selected.size?selected.size+'件の寄り道。':'まだ、白紙。';memo.querySelector('.memo-empty').hidden=selected.size>0;memo.querySelector('.memo-clear').hidden=selected.size===0;
   if(!storageAvailable)memo.querySelector('.memo-privacy').textContent='保存機能を利用できないため、このページ内だけのメモです。個人情報の入力・外部送信はありません。';
   if(announcement)status.textContent=announcement;
  }
  document.querySelectorAll('[data-memo-toggle]').forEach(button=>{const active=selected.has(button.dataset.memoToggle);button.setAttribute('aria-pressed',String(active));button.textContent=(button.dataset.memoLabel||'')+(active?'メモから外す':'寄り道メモに加える');});
 };
 document.addEventListener('click',event=>{
  const button=event.target.closest('[data-memo-toggle]');if(button){const id=button.dataset.memoToggle;if(!entries.has(id))return;const adding=!selected.has(id);if(adding)selected.add(id);else selected.delete(id);save();render(entries.get(id).name+(adding?'をメモに加えました。':'をメモから外しました。'));if(adding&&list&&!reduced()){const item=[...list.children].find(li=>li.querySelector('[data-memo-remove]').dataset.memoRemove===id);item?.animate([{opacity:.4},{opacity:1}],{duration:180,easing:'ease-out'});}return;}
  const remove=event.target.closest('[data-memo-remove]');if(remove){const id=remove.dataset.memoRemove;selected.delete(id);save();render(entries.get(id).name+'をメモから外しました。');const next=list.querySelector('button');if(next)next.focus();else{const heading=memo.querySelector('h2');heading.tabIndex=-1;heading.focus();}}
 });
 memo?.querySelector('.memo-clear').addEventListener('click',()=>{selected.clear();save();render('メモをすべて消しました。');const heading=memo.querySelector('h2');heading.tabIndex=-1;heading.focus();});
 const dialog=document.querySelector('#stall-detail');let opener=null,bodyOverflow='';
 const openStall=(id,trigger)=>{
  const stall=byId.get(id);if(!stall)return;opener=trigger||[...document.querySelectorAll('[data-open-stall]')].find(b=>b.dataset.openStall===id&&b.getClientRects().length);
  const image=dialog.querySelector('#stall-photo');image.src='assets/'+stall.image+'.jpg';image.alt=stall.alt;
  dialog.querySelector('#stall-zone').textContent=stall.category+'　'+stall.zone;dialog.querySelector('#stall-title').textContent=stall.name;dialog.querySelector('#stall-description').textContent=stall.text;dialog.querySelector('#stall-hours').textContent=stall.hours;
  const actions=dialog.querySelector('#stall-memo-actions');actions.replaceChildren();
  const options=stall.sessions?stall.sessions.map(([entryId,time])=>({id:entryId,label:time+'　'})):[{id:stall.id,label:''}];
  for(const item of options){const button=document.createElement('button');button.type='button';button.dataset.memoToggle=item.id;button.dataset.memoLabel=item.label;actions.append(button);}
  const firstTime=stall.sessions?stall.sessions[0][0]:'opening';dialog.querySelector('#stall-time-link').href='timetable.html#'+firstTime;render();
  document.querySelectorAll('[data-open-stall]').forEach(b=>b.setAttribute('aria-expanded',String(b===opener)));
  bodyOverflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();dialog.querySelector('.stall-close').focus();
  if(!reduced())dialog.animate([{opacity:.45,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:230,easing:'ease-out'});
 };
 document.querySelectorAll('[data-open-stall]').forEach(button=>button.addEventListener('click',()=>openStall(button.dataset.openStall,button)));
 dialog.querySelector('.stall-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('keydown',event=>{if(event.key==='Escape')event.stopPropagation();});
 dialog.addEventListener('close',()=>{document.body.style.overflow=bodyOverflow;document.querySelectorAll('[data-open-stall]').forEach(b=>b.setAttribute('aria-expanded','false'));if(opener&&getComputedStyle(opener).display!=='none')opener.focus();const url=new URL(location.href);if(url.searchParams.has('stall')){url.searchParams.delete('stall');history.replaceState(null,'',url);}});
 render();const requested=new URLSearchParams(location.search).get('stall');if(document.querySelector('.night-atlas')&&byId.has(requested))openStall(requested);
})();
