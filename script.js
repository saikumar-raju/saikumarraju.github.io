// script.js - theme toggle, header reveal, animations, smooth scroll
(function () {
  'use strict';

  // Set theme and store in localStorage
  function setTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      // dark default
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('site-theme', theme);
  }

  function initTheme() {
    const stored = localStorage.getItem('site-theme');
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (stored === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        // small rotate feedback
        btn.style.transition = 'transform 320ms ease';
        btn.style.transform = 'rotate(180deg)';
        setTimeout(() => btn.style.transform = '', 340);

        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        setTheme(isLight ? 'dark' : 'light');
      });
    }
  }

  function setFooterYear() {
    const el = document.getElementById('year');
    if (!el) return;
    el.textContent = new Date().getFullYear();
  }

  function revealHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    setTimeout(() => header.classList.add('show'), 120);
  }

  function runEntrance() {
    // Elements to animate on load
    const selectors = [
      '.hero', '.contact-card',
      '#about', '#skills', '#experience', '#projects',
      '.project-card', '.card', '.site-footer'
    ];
    let all = [];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => all.push(el));
    });
    all = Array.from(new Set(all));
    all.forEach((el, i) => {
      el.style.animationDelay = (i * 80) + 'ms';
      el.classList.add('fade-in');
    });
  }

  function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (!href || href === '#') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const id = href.slice(1);
        const node = document.getElementById(id);
        if (node) {
          e.preventDefault();
          node.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setFooterYear();
    revealHeader();
    runEntrance();
    enableSmoothScroll();
  });
})();
