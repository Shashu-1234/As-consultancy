const b=document.querySelector('.menu-btn'),m=document.querySelector('.mobile-nav');
b?.addEventListener('click',()=>m?.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>m?.classList.remove('open')));
const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');o.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(e=>o.observe(e));
const f=document.getElementById('whatsappForm');
if(f)f.addEventListener('submit',e=>{e.preventDefault();const g=id=>document.getElementById(id)?.value?.trim()||'';const t=['Hello AS Career Consultancy,','','I would like to know more about your opportunities.','',`Name: ${g('name')}`,`Phone: ${g('phone')}`,`Interested In: ${g('track')}`,`Current Status: ${g('status')}`,g('message')?`Message: ${g('message')}`:'','','Please share details about eligibility, registration terms and applicable charges.'].filter(Boolean).join('\n');window.open('https://wa.me/918867375152?text='+encodeURIComponent(t),'_blank','noopener')});
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
