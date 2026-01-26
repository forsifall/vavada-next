document.addEventListener('DOMContentLoaded', function() {
    // Helper function to set up a language dropdown
    function setupLangDropdown(containerSelector, buttonClass, listClass) {
        const container = document.querySelector(containerSelector);
        if (!container) {
            // console.warn(`Language container "${containerSelector}" not found.`);
            return;
        }

        const langBtn = container.querySelector(buttonClass);
        const langList = container.querySelector(listClass);

        if (!langBtn) {
            // console.warn(`Language button with class "${buttonClass}" not found in "${containerSelector}".`);
            return;
        }
        if (!langList) {
            // console.warn(`Language list with class "${listClass}" not found in "${containerSelector}".`);
            return;
        }

        langBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from bubbling to document
            const isOpen = langList.classList.toggle('show');
            langBtn.setAttribute('aria-expanded', isOpen.toString());
        });

        // Add click listener to document to close this specific dropdown
        document.addEventListener('click', function(event) {
            if (langList.classList.contains('show')) {
                if (!langBtn.contains(event.target) && !langList.contains(event.target)) {
                    langList.classList.remove('show');
                    langBtn.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    // Setup for header language selector
    setupLangDropdown('.header-lang', '.choose-lang-button', '.choose-lang-list');

    // Setup for footer language selector
    setupLangDropdown('.footer-lang', '.choose-lang-button', '.choose-lang-list');
});
document.addEventListener("copy",(function(e){e.preventDefault()})),document.addEventListener("cut",(function(e){e.preventDefault()})),document.addEventListener("paste",(function(e){e.preventDefault()}));
function initializeToggle(e){
    let{
        blockSelector:t,
        buttonSelector:l,
        hiddenTextSelector:o,
        arrowIconSelector:s,
        rotateClass:i,
        dotsClass:c,
        offset:n}=e;
        function a(e){
            let l=e.querySelector(o),a=e.querySelector(".show-text"),r=e.querySelector(".hide-text"),d=e.querySelector(s),b=e.closest(t),u=c?e.querySelector(c.visibleTextSelector):null,f=l.classList.contains(c?c.hiddenClass:"flex-display");if(l.classList.toggle(c?c.hiddenClass:"flex-display"),a.style.display=f?"block":"none",r.style.display=f?"none":"block",d.classList.toggle(i),c&&u&&(f?u.classList.add(c.dotsVisibleClass):u.classList.remove(c.dotsVisibleClass)),b.id){let h=window.location.pathname+window.location.search+(f?"":"#"+b.id);window.history.replaceState(null,"",h)}f&&setTimeout(()=>{let e=b.getBoundingClientRect().top+window.pageYOffset-n;window.scrollTo({top:e,behavior:"smooth"})},100)}document.addEventListener("click",function(e){let t=e.target.closest(l);t&&a(t.parentNode)}),document.addEventListener("click",function(e){let l=e.target.closest('a[href^="#"]');if(l){let s=l.getAttribute("href"),i=document.querySelector(s);if(i){let r=i.closest(t),d=!1;if(r){let b=r.querySelector(o);b&&!b.classList.contains(c?c.hiddenClass:"flex-display")&&(a(r),d=!0)}e.preventDefault();let u=i.getBoundingClientRect().top+window.pageYOffset-n;window.scrollTo({top:u,behavior:"smooth"}),d?window.history.replaceState(null,"",s):window.history.pushState(null,"",s)}}})}initializeToggle({blockSelector:".text-block",buttonSelector:".text-block-button",hiddenTextSelector:".text-block-content-hidden",arrowIconSelector:".text-block-button img",rotateClass:"rotate-180",offset:64}),initializeToggle({blockSelector:".text-block__content",buttonSelector:".text-block__content-button",hiddenTextSelector:".text-block__content-hidden",arrowIconSelector:".text-block__content-button img",rotateClass:"rotate--90",dotsClass:{visibleTextSelector:".text-block-second-content-visible",dotsVisibleClass:"text-block-second-content-dots",hiddenClass:"inline-display"},offset:64});
document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".header-buttons-wrapper"),t=document.querySelector(".header-burger-button"),n=document.querySelector(".header-close-btn"),o=document.querySelector(".overlay"),c=document.body;function i(){e.classList.remove("active"),o.classList.remove("active"),c.style.overflow=""}t.addEventListener("click",(function(){e.classList.toggle("active"),o.classList.toggle("active"),e.classList.contains("active")?c.style.overflow="hidden":c.style.overflow=""})),n.addEventListener("click",i),window.addEventListener("click",(function(o){e.contains(o.target)||t.contains(o.target)||n.contains(o.target)||i()})),window.addEventListener("resize",(function(){window.innerWidth>=1024&&i()}));e.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",i)}))}));
document.querySelector(".articles__header-wrapper").addEventListener("click",function(){let e=document.querySelector(".articles__items-wrapper"),r=document.querySelector(".articles__header-wrapper img");e.classList.toggle("show"),r.classList.toggle("open")});
function initializeAccordionAndPagination(e,t,n,i,o,c,a,s,l){document.addEventListener("DOMContentLoaded",(function(){const r=document.querySelectorAll(t);r.forEach((function(e){e.addEventListener("click",(function(){const t=e.querySelector(n),c=e.querySelector(o),a=e.querySelector(i);t&&(t!==c?(t&&t.classList.toggle("open"),c&&c.classList.toggle("hide"),a&&a.classList.toggle("rotate-180")):(t&&t.classList.toggle("open"),c&&c.classList.toggle("hide")))}))}));const d=Math.ceil(r.length/l);let u=1;const g=document.querySelector(c),v=document.querySelector(a),f=document.querySelector(s);function q(){r.forEach(((e,t)=>{const c=(u-1)*l,a=u*l,s=e.querySelector(n),r=e.querySelector(o),d=e.querySelector(i);t>=c&&t<a?(e.style.display="",s&&s.classList.contains("open")&&s.classList.remove("open"),r&&r.classList.contains("hide")&&r.classList.remove("hide"),d&&d.classList.contains("rotate-180")&&d.classList.remove("rotate-180")):e.style.display="none"})),g.textContent=`${u}/${d}`,v.disabled=1===u,f.disabled=u===d}function m(){setTimeout((()=>{const t=document.querySelector(e);if(t){const e=t.getBoundingClientRect().top+window.pageYOffset-64;window.scrollTo({top:e,behavior:"smooth"})}}),100)}v.addEventListener("click",(()=>{u>1&&(u-=1,q()),m()})),f.addEventListener("click",(()=>{u<d&&(u+=1,q()),m()})),q()}))}initializeAccordionAndPagination(".faq .h2-base-title",".faq-item",".faq-item-content-hidden",".toggle-icon",".faq-item-content-visible",".faq-pagination-label",".faq-pagination-prev-button",".faq-pagination-next-button",4),initializeAccordionAndPagination(".review .h2-base-title",".review-item",".review-item-content-hidden",".toggle-icon",".review-item-content-visible",".review-pagination-label",".review-pagination-prev-button",".review-pagination-next-button",5);
