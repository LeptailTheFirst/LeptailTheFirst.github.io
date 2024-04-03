document.addEventListener("DOMContentLoaded",(function(){let t,e;let n=false;const o=n=>{const o=t=>Array.from(t).reduce(((t,e)=>t+e.offsetWidth),0);if(n){const n=o(document.querySelector("#blog-info > a").children);const s=o(document.getElementById("menus").children);t=n+s;e=document.getElementById("nav")}const s=window.innerWidth<=768||t>e.offsetWidth-120;e.classList.toggle("hide-menu",s)};const s=()=>{o(true);e.classList.add("show")};const c={open:()=>{btf.sidebarPaddingR();document.body.style.overflow="hidden";btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s");document.getElementById("sidebar-menus").classList.add("open");n=true},close:()=>{const t=document.body;t.style.overflow="";t.style.paddingRight="";btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s");document.getElementById("sidebar-menus").classList.remove("open");n=false}};const i=()=>{const t=()=>{btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)};const e=document.getElementById("scroll-down");e&&btf.addEventListenerPjax(e,"click",t)};const a=()=>{const t=GLOBAL_CONFIG.highlight;if(!t)return;const{highlightCopy:e,highlightLang:n,highlightHeightLimit:o,plugin:s}=t;const c=GLOBAL_CONFIG_SITE.isHighlightShrink;const i=e||n||c!==undefined;const a=s==="highlight.js"?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!((i||o)&&a.length))return;const l=s==="prismjs";const d=c===true?"closed":"";const r=c!==undefined?'<i class="fas fa-angle-down expand"></i>':"";const u=e?'<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>':"";const f=(t,e)=>{if(GLOBAL_CONFIG.Snackbar!==undefined){btf.snackbarShow(e)}else{const n=t.previousElementSibling;n.textContent=e;n.style.opacity=1;setTimeout((()=>{n.style.opacity=0}),800)}};const m=t=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy")){document.execCommand("copy");f(t,GLOBAL_CONFIG.copy.success)}else{f(t,GLOBAL_CONFIG.copy.noSupport)}};const g=t=>{const e=t.parentNode;e.classList.add("copy-true");const n=window.getSelection();const o=document.createRange();const s=l?"pre code":"table .code pre";o.selectNodeContents(e.querySelectorAll(`${s}`)[0]);n.removeAllRanges();n.addRange(o);m(t.lastChild);n.removeAllRanges();e.classList.remove("copy-true")};const h=t=>{t.classList.toggle("closed")};const L=function(t){const e=t.target.classList;if(e.contains("expand"))h(this);else if(e.contains("copy-button"))g(this)};const p=function(){this.classList.toggle("expand-done")};const b=(t,e,n)=>{const s=document.createDocumentFragment();if(i){const e=document.createElement("div");e.className=`highlight-tools ${d}`;e.innerHTML=r+t+u;btf.addEventListenerPjax(e,"click",L);s.appendChild(e)}if(o&&e.offsetHeight>o+30){const t=document.createElement("div");t.className="code-expand-btn";t.innerHTML='<i class="fas fa-angle-double-down"></i>';btf.addEventListenerPjax(t,"click",p);s.appendChild(t)}if(n==="hl"){e.insertBefore(s,e.firstChild)}else{e.parentNode.insertBefore(s,e)}};if(l){a.forEach((t=>{if(n){const e=t.getAttribute("data-language")||"Code";const n=`<div class="code-lang">${e}</div>`;btf.wrap(t,"figure",{class:"highlight"});b(n,t)}else{btf.wrap(t,"figure",{class:"highlight"});b("",t)}}))}else{a.forEach((t=>{if(n){let e=t.getAttribute("class").split(" ")[1];if(e==="plain"||e===undefined)e="Code";const n=`<div class="code-lang">${e}</div>`;b(n,t,"hl")}else{b("",t,"hl")}}))}};const l=()=>{if(!GLOBAL_CONFIG.isPhotoFigcaption)return;document.querySelectorAll("#article-container img").forEach((t=>{const e=t.title||t.alt;if(!e)return;const n=document.createElement("div");n.className="img-alt is-center";n.textContent=e;t.insertAdjacentElement("afterend",n)}))};const d=()=>{btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)"))};const r=async t=>{const e=await fetch(t);return await e.json()};const u=(t,e,n=false,o)=>{const s=e.length;const c=new InfiniteGrid.JustifiedInfiniteGrid(t,{gap:5,isConstantSize:true,sizeRange:[150,600],useResizeObserver:true,observeChildren:true,useTransform:true});if(o){btf.addGlobalFn("igOfTabs",(()=>{c.destroy()}),false,o)}const i=t=>t.replace(/"/g,"&quot;");const a=(t,n)=>{const o=[];const c=(t-1)*n;for(let t=0;t<n;++t){const n=c+t;if(n>=s){break}const a=e[n];const l=a.alt?`alt="${i(a.alt)}"`:"";const d=a.title?`title="${i(a.title)}"`:"";o.push(`<div class="item ">\n            <img src="${a.url}" data-grid-maintained-target="true" ${l+d} />\n          </div>`)}return o};const l=GLOBAL_CONFIG.infinitegrid.buttonText;const d=t=>{const e=document.createElement("button");e.textContent=l;const n=e=>{e.target.removeEventListener("click",n);e.target.remove();btf.setLoading.add(t);r(c.getGroups().length+1,10)};e.addEventListener("click",n);t.insertAdjacentElement("afterend",e)};const r=(t,e)=>{c.append(a(t,e),t)};const u=Math.ceil(s/10);const f=e=>{const{updated:o,isResize:s,mounted:i}=e;if(!o.length||!i.length||s){return}btf.loadLightbox(t.querySelectorAll("img:not(.medium-zoom-image)"));if(c.getGroups().length===u){btf.setLoading.remove(t);c.off("renderComplete",f);return}if(n){btf.setLoading.remove(t);d(t)}};const m=btf.debounce((t=>{const e=(+t.groupKey||0)+1;r(e,10);if(e===u){c.off("requestAppend",m)}}),300);btf.setLoading.add(t);c.on("renderComplete",f);if(n){r(1,10)}else{c.on("requestAppend",m);c.renderItems()}btf.addGlobalFn("justifiedGallery",(()=>{c.destroy()}))};const f=async(t,e=false)=>{const n=async()=>{for(const n of t){if(btf.isHidden(n))continue;if(e&&n.classList.contains("loaded")){n.querySelector(".gallery-items").innerHTML="";const t=n.querySelector(":scope > button");const e=n.querySelector(":scope > .loading-container");t&&t.remove();e&&e.remove()}const t=n.getAttribute("data-button")==="true";const o=n.firstElementChild.textContent;n.classList.add("loaded");const s=n.getAttribute("data-type")==="url"?await r(o):JSON.parse(o);u(n.lastElementChild,s,t,e)}};if(typeof InfiniteGrid==="function"){n()}else{await btf.getScript(`${GLOBAL_CONFIG.infinitegrid.js}`);n()}};const m=t=>{const e=btf.getScrollPercent(t,document.body);const n=document.getElementById("go-up");if(e<95){n.classList.add("show-percent");n.querySelector(".scroll-percent").textContent=e}else{n.classList.remove("show-percent")}};const g=()=>{const t=document.getElementById("rightside");const e=window.innerHeight+56;let n=0;const o=document.getElementById("page-header");const s=typeof chatBtn!=="undefined";const c=GLOBAL_CONFIG.percent.rightside;if(document.body.scrollHeight<=e){t.classList.add("rightside-show");return}const i=t=>{const e=t>n;n=t;return e};let a="";const l=btf.throttle((()=>{const n=window.scrollY||document.documentElement.scrollTop;const l=i(n);if(n>56){if(a===""){o.classList.add("nav-fixed");t.classList.add("rightside-show")}if(l){if(a!=="down"){o.classList.remove("nav-visible");s&&window.chatBtn.hide();a="down"}}else{if(a!=="up"){o.classList.add("nav-visible");s&&window.chatBtn.show();a="up"}}}else{a="";if(n===0){o.classList.remove("nav-fixed","nav-visible")}t.classList.remove("rightside-show")}c&&m(n);if(document.body.scrollHeight<=e){t.classList.add("rightside-show")}}),300);btf.addEventListenerPjax(window,"scroll",l,{passive:true})};const h=()=>{const t=GLOBAL_CONFIG_SITE.isToc;const e=GLOBAL_CONFIG.isAnchor;const n=document.getElementById("article-container");if(!(n&&(t||e)))return;let o,s,c,i,a;if(t){const t=document.getElementById("card-toc");s=t.querySelector(".toc-content");o=s.querySelectorAll(".toc-link");i=t.querySelector(".toc-percentage");a=s.classList.contains("is-expand");const e=e=>{const n=e.target.closest(".toc-link");if(!n)return;e.preventDefault();btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(n.getAttribute("href")).replace("#",""))),300);if(window.innerWidth<900){t.classList.remove("open")}};btf.addEventListenerPjax(s,"click",e);c=t=>{const e=t.getBoundingClientRect().top;const n=s.scrollTop;if(e>document.documentElement.clientHeight-100){s.scrollTop=n+150}if(e<100){s.scrollTop=n-150}};s.style.display="block"}const l=n.querySelectorAll("h1,h2,h3,h4,h5,h6");let d="";const r=n=>{if(n===0){return false}let i="";let r="";l.forEach(((t,e)=>{if(n>btf.getEleTop(t)-80){const n=t.id;i=n?"#"+encodeURI(n):"";r=e}}));if(d===r)return;if(e)btf.updateAnchor(i);d=r;if(t){s.querySelectorAll(".active").forEach((t=>{t.classList.remove("active")}));if(i===""){return}const t=o[r];t.classList.add("active");setTimeout((()=>{c(t)}),0);if(a)return;let e=t.parentNode;for(;!e.matches(".toc");e=e.parentNode){if(e.matches("li"))e.classList.add("active")}}};const u=btf.throttle((()=>{const e=window.scrollY||document.documentElement.scrollTop;if(t&&GLOBAL_CONFIG.percent.toc){i.textContent=btf.getScrollPercent(e,n)}r(e)}),100);btf.addEventListenerPjax(window,"scroll",u,{passive:true})};const L=t=>{const e=window.globalFn||{};const n=e.themeChange||{};if(!n){return}Object.keys(n).forEach((e=>{const o=n[e];if(["disqus","disqusjs"].includes(e)){setTimeout((()=>o(t)),300)}else{o(t)}}))};const p={readmode:()=>{const t=document.body;t.classList.add("read-mode");const e=document.createElement("button");e.type="button";e.className="fas fa-sign-out-alt exit-readmode";t.appendChild(e);const n=()=>{t.classList.remove("read-mode");e.remove();e.removeEventListener("click",n)};e.addEventListener("click",n)},darkmode:()=>{const t=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";if(t==="dark"){btf.activateDarkMode();GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)}else{btf.activateLightMode();GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)}btf.saveToLocal.set("theme",t,2);L(t)},"rightside-config":t=>{const e=t.firstElementChild;if(e.classList.contains("show")){e.classList.add("status");setTimeout((()=>{e.classList.remove("status")}),300)}e.classList.toggle("show")},"go-up":()=>{btf.scrollToDest(0,500)},"hide-aside-btn":()=>{const t=document.documentElement.classList;const e=t.contains("hide-aside")?"show":"hide";btf.saveToLocal.set("aside-status",e,2);t.toggle("hide-aside")},"mobile-toc-button":function(t,e){const n=document.getElementById("card-toc");n.style.transition="transform 0.3s ease-in-out";const o=n.clientHeight;const s=e.getBoundingClientRect();const c=window.innerHeight-s.bottom-30;if(o>c){n.style.transformOrigin=`right ${o-c-s.height/2}px`}n.classList.toggle("open");n.addEventListener("transitionend",(()=>{n.style.cssText=""}),{once:true})},"chat-btn":()=>{window.chatBtnFn()},translateLink:()=>{window.translateFn.translatePage()}};document.getElementById("rightside").addEventListener("click",(function(t){const e=t.target.closest("[id]");if(e&&p[e.id]){p[e.id](this,e)}}));const b=()=>{const t=t=>{const e=t.target.closest(".site-page.group");if(!e)return;e.classList.toggle("hide")};document.querySelector("#sidebar-menus .menus_items").addEventListener("click",t)};const y=()=>{const t=()=>{c.open()};btf.addEventListenerPjax(document.getElementById("toggle-menu"),"click",t)};const v=()=>{const{limitCount:t,languages:e}=GLOBAL_CONFIG.copyright;const n=n=>{n.preventDefault();const o=window.getSelection(0).toString();let s=o;if(o.length>t){s=`${o}\n\n\n${e.author}\n${e.link}${window.location.href}\n${e.source}\n${e.info}`}if(n.clipboardData){return n.clipboardData.setData("text",s)}else{return window.clipboardData.setData("text",s)}};document.body.addEventListener("copy",n)};const E=()=>{const t=document.getElementById("runtimeshow");if(t){const e=t.getAttribute("data-publishDate");t.textContent=`${btf.diffDate(e)} ${GLOBAL_CONFIG.runtime}`}};const w=()=>{const t=document.getElementById("last-push-date");if(t){const e=t.getAttribute("data-lastPushDate");t.textContent=btf.diffDate(e,true)}};const C=()=>{const t=document.querySelectorAll("#article-container table");if(!t.length)return;t.forEach((t=>{if(!t.closest(".highlight")){btf.wrap(t,"div",{class:"table-wrap"})}}))};const G=()=>{const t=document.querySelectorAll("#article-container .hide-button");if(!t.length)return;const e=function(t){const e=this;e.classList.add("open");const n=e.nextElementSibling.querySelectorAll(".gallery-container");n.length&&f(n)};t.forEach((t=>{t.addEventListener("click",e,{once:true})}))};const O=()=>{const t=document.querySelectorAll("#article-container .tabs");if(!t.length)return;const e=(t,e)=>{Array.from(t).forEach((t=>{t.classList.remove("active");if(t===e||t.id===e){t.classList.add("active")}}))};const n=(t,n)=>{const o=function(t){const o=t.target.closest("button");if(o.classList.contains("active"))return;e(this.children,o);this.classList.remove("no-default");const s=o.getAttribute("data-href");const c=this.nextElementSibling;e(c.children,s);if(n){btf.removeGlobalFnEvent("igOfTabs",this);const t=c.querySelectorAll(`:scope > #${s} .gallery-container`);t.length&&f(t,this)}};btf.addEventListenerPjax(t.firstElementChild,"click",o)};const o=t=>{const e=e=>{const n=e.target.closest("button");if(!n)return;btf.scrollToDest(btf.getEleTop(t),300)};btf.addEventListenerPjax(t.lastElementChild,"click",e)};t.forEach((t=>{const e=!!t.querySelectorAll(".gallery-container");n(t,e);o(t)}))};const I=()=>{const t=document.querySelector("#aside-cat-list.expandBtn");if(!t)return;const e=t=>{const e=t.target;if(e.nodeName==="I"){t.preventDefault();e.parentNode.classList.toggle("expand")}};btf.addEventListenerPjax(t,"click",e,true)};const A=()=>{const t=document.getElementById("switch-btn");if(!t)return;let e=false;const n=document.getElementById("post-comment");const o=()=>{n.classList.toggle("move");if(!e&&typeof loadOtherComment==="function"){e=true;loadOtherComment()}};btf.addEventListenerPjax(t,"click",o)};const B=()=>{const{limitDay:t,messagePrev:e,messageNext:n,position:o}=GLOBAL_CONFIG.noticeOutdate;const s=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(s>=t){const t=document.createElement("div");t.className="post-outdate-notice";t.textContent=`${e} ${s} ${n}`;const c=document.getElementById("article-container");if(o==="top"){c.insertBefore(t,c.firstChild)}else{c.appendChild(t)}}};const S=()=>{window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"});btf.addGlobalFn("pjaxComplete",(()=>{window.lazyLoadInstance.update()}),"lazyload")};const x=function(t){t.forEach((t=>{const e=t.getAttribute("datetime");t.textContent=btf.diffDate(e,true);t.style.display="inline"}))};const k=function(){window.addEventListener("resize",(()=>{o(false);n&&btf.isHidden(document.getElementById("toggle-menu"))&&c.close()}));document.getElementById("menu-mask").addEventListener("click",(t=>{c.close()}));b();GLOBAL_CONFIG.islazyload&&S();GLOBAL_CONFIG.copyright!==undefined&&v();if(GLOBAL_CONFIG.autoDarkmode){window.matchMedia("(prefers-color-scheme: dark)").addListener((t=>{if(btf.saveToLocal.get("theme")!==undefined)return;t.matches?L("dark"):L("light")}))}};const F=()=>{a();l();btf.removeGlobalFnEvent("justifiedGallery");const t=document.querySelectorAll("#article-container .gallery-container");t.length&&f(t);d();h();C();G();O()};const N=()=>{s();if(GLOBAL_CONFIG_SITE.isPost){GLOBAL_CONFIG.noticeOutdate!==undefined&&B();GLOBAL_CONFIG.relativeDate.post&&x(document.querySelectorAll("#post-meta time"))}else{GLOBAL_CONFIG.relativeDate.homepage&&x(document.querySelectorAll("#recent-posts time"));GLOBAL_CONFIG.runtime&&E();w();I()}GLOBAL_CONFIG_SITE.isHome&&i();g();F();A();y()};btf.addGlobalFn("pjaxComplete",N,"refreshFn");N();k();window.addEventListener("hexo-blog-decrypt",(t=>{F();window.translateFn.translateInitialization();Object.values(window.globalFn.encrypt).forEach((t=>{t()}))}))}));