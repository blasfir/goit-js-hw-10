import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as S}from"./assets/vendor-BZoxUzx5.js";let i=null,u=document.querySelector(".bttn");const l=document.querySelector(".npt"),h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){i=t[0],new Promise((e,o)=>{const r=Date.now(),s=i.getTime();setTimeout(()=>{r<s?e("Selected valid date"):o("Please choose a date in the future")},0)}).then(e=>{u.disabled=!1}).catch(e=>S.show({message:e}))}};m(l,h);function p(t){const s=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),n=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:c,minutes:d,seconds:n}}u.addEventListener("click",t=>{u.disabled=!0,l.disabled=!0;const a=setInterval(()=>{const e=Date.now(),o=i.getTime()-e,r=document.querySelector(".dys"),s=document.querySelector(".hrs"),c=document.querySelector(".mnts"),d=document.querySelector(".scnds");if(o<=0){l.disabled=!1,clearInterval(a);return}const n=p(o);r.textContent=String(n.days).padStart(2,"0"),s.textContent=String(n.hours).padStart(2,"0"),c.textContent=String(n.minutes).padStart(2,"0"),d.textContent=String(n.seconds).padStart(2,"0")})},1e3);
//# sourceMappingURL=1-timer.js.map
