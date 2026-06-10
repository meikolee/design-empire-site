/**
 * 设计帝国 - Design Empire Promo Page
 * Main JavaScript
 */

// ============================================
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initSmoothScroll();
  initCounterAnimation();
});

// ============================================
// Navbar
// ============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const links = navLinks.querySelectorAll('a');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close menu on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// Active Link Highlight
// ============================================
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a:not(.nav-cta)');
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ============================================
// Scroll-triggered Animations
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ============================================
// Counter Animation
// ============================================
function initCounterAnimation() {
  const counterElement = document.querySelector('.stat-item .stat-number');
  if (!counterElement) return;

  // Simple entrance animation for hero card
  const heroCard = document.querySelector('.hero-card');
  if (heroCard) {
    heroCard.style.opacity = '0';
    heroCard.style.transform = 'translateY(20px)';

    setTimeout(() => {
      heroCard.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      heroCard.style.opacity = '1';
      heroCard.style.transform = 'translateY(0)';
    }, 300);
  }
}

// ============================================
// Console Easter Egg
// ============================================
console.log('%c🎨 设计帝国', 'font-size: 24px; font-weight: bold; color: #6c5ce7;');
console.log('%c让每一份设计都值得被看见', 'font-size: 14px; color: #636e72;');
console.log('%c📤 投稿入口: https://www.warting.com/service/submitworks.html', 'font-size: 12px; color: #00cec9;');
