const menu=document.querySelector('.menu');
const mobile=document.querySelector('.mobile');
menu?.addEventListener('click',()=>mobile?.classList.toggle('open'));
document.querySelectorAll('.mobile a').forEach(a=>a.addEventListener('click',()=>mobile?.classList.remove('open')));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const form=document.getElementById('whatsappForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const g=id=>document.getElementById(id)?.value?.trim()||'';const text=['Hello AS Career Consultancy,','','I would like to enquire about your services/opportunities.','',`Name: ${g('name')}`,`Phone: ${g('phone')}`,`Interested in: ${g('track')}`,`Current status: ${g('status')}`,g('message')?`Message: ${g('message')}`:'','','Please share the current eligibility, process, registration terms and applicable charges.'].filter(Boolean).join('\n');window.open('https://wa.me/918867375152?text='+encodeURIComponent(text),'_blank','noopener')})}
document.getElementById('year') && (document.getElementById('year').textContent=new Date().getFullYear());