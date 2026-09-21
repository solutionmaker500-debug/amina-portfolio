const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{const h=document.documentElement;progress.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100+"%"});

const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".skill-card,.project,.timeline-item").forEach((el,i)=>{
  el.style.transitionDelay=(i%4)*60+"ms";
  el.classList.add("reveal");
  observer.observe(el);
});
