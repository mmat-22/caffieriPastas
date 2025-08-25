/* =====================
   Caffieri Pastas — app.js
   ===================== */

// Año en footer
const yEl = document.getElementById('y');
if (yEl) yEl.textContent = new Date().getFullYear();

// Reveal on scroll (respeta reduced motion)
const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!prefersReduce.matches) {
  const els = () => document.querySelectorAll('.card, .step, .reel');
  const reveal = () => {
    els().forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 40) {
        el.style.transition = 'transform .6s ease, opacity .6s ease';
        el.style.transform = 'translateY(0)';
        el.style.opacity = 1;
      } else {
        el.style.transform = 'translateY(12px)';
        el.style.opacity = .001;
      }
    });
  };
  reveal();
  addEventListener('scroll', reveal, { passive: true });
}

// Helper: smooth scroll para anchors (opcional)
const enableSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length > 1) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
};

enableSmoothScroll();

// Placeholder: reemplazar con número real de WhatsApp automáticamente si definís una variable global
// window.CAFFIERI_WAPP = '54911XXXXXXX'; // Ejemplo
// document.querySelectorAll('a[href*="wa.me"]').forEach(a=>{
//   if (window.CAFFIERI_WAPP) a.href = a.href.replace('54911XXXXXXX', window.CAFFIERI_WAPP);
// });
