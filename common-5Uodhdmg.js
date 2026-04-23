(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function u(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=u(t);fetch(t.href,r)}})();(function(){function g(e){const i=[{href:"index.html",label:"Home",key:"index"},{href:"amazon.html",label:"Amazon",key:"amazon"},{href:"flipkart.html",label:"Flipkart",key:"flipkart"},{href:"paid-ads.html",label:"Meta & Google",key:"paid-ads"},{href:"orionai.html",label:"OrionAI",key:"orionai"}].map(f=>`<li><a href="${f.href}" class="${f.key===e?"active":""}">${f.label}</a></li>`).join(""),a=document.querySelector("[data-nav]");if(!a)return;a.innerHTML=`
      <a href="index.html" class="nav-logo">Scale<span>Rao</span></a>
      <ul class="nav-links" id="navLinks">
        ${i}
        <li><a href="audit.html" class="nav-cta">Free Audit</a></li>
      </ul>
      <button class="nav-toggle" id="navToggle" aria-label="Menu">☰</button>
    `;const c=a.querySelector("#navToggle"),d=a.querySelector("#navLinks");c&&c.addEventListener("click",()=>d.classList.toggle("open")),window.addEventListener("scroll",()=>{window.scrollY>20?a.classList.add("scrolled"):a.classList.remove("scrolled")})}function n(){const e=document.querySelector("[data-footer]");e&&(e.innerHTML=`
      <div class="footer-inner">
        <div>
          <div class="footer-logo">Scale<span>Rao</span></div>
          <p class="footer-desc">
            AI-powered marketplace growth agency. 10+ years of Amazon &amp; Flipkart expertise,
            powered by proprietary technology — OrionAI.
          </p>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="amazon.html">Amazon Services</a></li>
            <li><a href="flipkart.html">Flipkart Services</a></li>
            <li><a href="paid-ads.html">Meta &amp; Google Ads</a></li>
            <li><a href="orionai.html">OrionAI Technology</a></li>
            <li><a href="audit.html">Free Audit</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:sales@scalerao.com">sales@scalerao.com</a></li>
            <li><a href="audit.html">Book an audit</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms &amp; Conditions</a></li>
            <li style="color: var(--text-dim); font-size: 13px;">New Delhi, India</li>
            <li style="color: var(--text-dim); font-size: 13px;">GST: 07JRYPS3440A1ZD</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© ${new Date().getFullYear()} ScaleRao. All rights reserved.</div>
        <div>Not affiliated with Amazon or Flipkart. Independent agency.</div>
      </div>
    `)}function u(){if(typeof Lenis>"u")return;const e=new Lenis({duration:1.15,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!0});function o(i){e.raf(i),requestAnimationFrame(o)}requestAnimationFrame(o),window.ScrollTrigger&&(e.on("scroll",ScrollTrigger.update),gsap.ticker.add(i=>e.raf(i*1e3)),gsap.ticker.lagSmoothing(0)),window.__lenis=e}function s(){!window.gsap||!window.ScrollTrigger||(gsap.registerPlugin(ScrollTrigger),gsap.utils.toArray(".reveal").forEach(e=>{gsap.to(e,{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none none"}})}),gsap.utils.toArray(".stagger").forEach(e=>{gsap.to(e.children,{opacity:1,y:0,duration:.9,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 82%",toggleActions:"play none none none"}})}))}function t(){!window.gsap||!window.ScrollTrigger||document.querySelectorAll("[data-count]").forEach(e=>{const o=parseFloat(e.dataset.count),i=e.dataset.suffix||"",a=e.dataset.prefix||"",c=parseInt(e.dataset.decimals||"0",10),d={v:0};gsap.to(d,{v:o,duration:2.2,ease:"power2.out",onUpdate:()=>{e.textContent=a+d.v.toFixed(c)+i},scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none none"}})})}function r(){window.ScrollTrigger&&document.querySelectorAll(".rank-bar").forEach(e=>{const o=e.querySelector(".rank-fill");if(!o)return;const i=o.dataset.pct||"0";ScrollTrigger.create({trigger:e,start:"top 85%",onEnter:()=>{o.style.width=i+"%"}})})}function l(){document.querySelectorAll(".platform-card").forEach(e=>{e.addEventListener("mousemove",o=>{const i=e.getBoundingClientRect();e.style.setProperty("--mx",`${o.clientX-i.left}px`),e.style.setProperty("--my",`${o.clientY-i.top}px`)})})}function m(){typeof VanillaTilt>"u"||VanillaTilt.init(document.querySelectorAll("[data-tilt]"),{max:6,speed:600,glare:!0,"max-glare":.12,perspective:1200,scale:1.01})}function h(){if(!window.gsap)return;const e=gsap.timeline({delay:.3}),o=document.querySelectorAll("[data-hero-item]");o.length&&e.from(o,{opacity:0,y:40,duration:1,stagger:.12,ease:"power3.out"})}function p(){const e=document.body.dataset.page||"index";g(e),n(),u(),s(),t(),r(),l(),m(),h()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})();
