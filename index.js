import{a as m,S as p,i as l}from"./assets/vendor-Sa4a0LJu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function d(o){return m.get("https://pixabay.com/api/",{params:{key:"49403808-1d10fbc3a3e3dae24bc03a037",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{console.log(t)})}const c=document.querySelector(".gallery");let y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const t=o.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:i,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${a}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p>Likes ${r}</p>
            <p>Views ${i}</p>
            <p>Comments ${u}</p>
            <p>Downloads ${f}</p>
          </div>
        </li>
      `).join("");c.innerHTML=t,y.refresh()}function h(){c.innerHTML=""}const s={form:document.querySelector(".form"),input:document.querySelector('[name="search-text"]'),loader:document.querySelector(".loader")};s.form.addEventListener("submit",o=>{o.preventDefault();const t=s.input.value.trim();if(!t){l.error({message:"Please enter a search query!"});return}h(),s.loader.style.display="block",d(t).then(a=>{a.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):g(a.hits)}).catch(()=>{l.error({message:"Something went wrong. Try again later!"})}).finally(()=>{s.loader.style.display="none"})});
//# sourceMappingURL=index.js.map
