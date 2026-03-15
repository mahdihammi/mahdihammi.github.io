/* ═══════════════════════════════════════════════════════════════
   DATA ENGINEER PORTFOLIO — script.js
   Canvas animations · Scroll reveals · Interactions
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─── HERO CANVAS — Flowing data particles & nodes ────────────── */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, animId;
  let particles = [];
  let nodes = [];
  let mouse = { x: null, y: null };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    initScene();
  }

  /* ── Particle ── */
  function makeParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4 - 0.15,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      hue: Math.random() > 0.6 ? 280 : 190, // purple or cyan
    };
  }

  /* ── Node (bigger glowing dots) ── */
  function makeNode() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 3 + 2,
      pulsePhase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.5 ? '0,212,255' : '168,85,247',
    };
  }

  function initScene() {
    const pCount = Math.floor(W * H / 6000);
    particles = Array.from({ length: Math.min(pCount, 150) }, makeParticle);
    nodes = Array.from({ length: Math.min(Math.floor(pCount / 4), 30) }, makeNode);
  }

  function drawConnections() {
    const all = nodes;
    for (let i = 0; i < all.length; i++) {
      for (let j = i + 1; j < all.length; j++) {
        const dx = all[i].x - all[j].x;
        const dy = all[i].y - all[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.12;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,212,255,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(all[i].x, all[i].y);
          ctx.lineTo(all[j].x, all[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function drawFlowLines() {
    // Horizontal data flow lines
    const lineCount = 5;
    const t = Date.now() * 0.0005;
    for (let i = 0; i < lineCount; i++) {
      const y = (H / (lineCount + 1)) * (i + 1);
      const offset = ((t * 80 + i * 137) % W);
      const grad = ctx.createLinearGradient(offset - 120, y, offset + 120, y);
      grad.addColorStop(0, 'rgba(0,212,255,0)');
      grad.addColorStop(0.5, 'rgba(0,212,255,0.06)');
      grad.addColorStop(1, 'rgba(0,212,255,0)');
      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.moveTo(offset - 120, y);
      ctx.lineTo(offset + 120, y);
      ctx.stroke();
    }
  }

  let lastTime = 0;
  function animate(ts) {
    animId = requestAnimationFrame(animate);
    const dt = Math.min((ts - lastTime) / 16.67, 3);
    lastTime = ts;

    ctx.clearRect(0, 0, W, H);

    drawFlowLines();
    drawConnections();

    /* Particles */
    particles.forEach(p => {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue},100%,70%,${p.opacity})`;
      ctx.fill();
    });

    /* Nodes */
    const now = ts * 0.001;
    nodes.forEach(n => {
      n.x += n.vx * dt;
      n.y += n.vy * dt;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;

      const pulse = Math.sin(now * 1.5 + n.pulsePhase) * 0.5 + 0.5;
      const glowR = n.r * (1 + pulse * 0.8);

      // Glow halo
      const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR * 6);
      grd.addColorStop(0, `rgba(${n.color},${0.25 * pulse})`);
      grd.addColorStop(1, `rgba(${n.color},0)`);
      ctx.beginPath();
      ctx.arc(n.x, n.y, glowR * 6, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.color},${0.6 + pulse * 0.4})`;
      ctx.fill();
    });

    /* Mouse interaction ripple */
    if (mouse.x !== null) {
      const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 120);
      grd.addColorStop(0, 'rgba(0,212,255,0.04)');
      grd.addColorStop(1, 'rgba(0,212,255,0)');
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 120, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    }
  }

  window.addEventListener('resize', debounce(resize, 150));
  canvas.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

  resize();
  animate(0);
})();


/* ─── CONTACT CANVAS — Subtle grid particles ──────────────────── */
(function initContactCanvas() {
  const canvas = document.getElementById('contactCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function drawGrid(t) {
    ctx.clearRect(0, 0, W, H);

    // Animated dotted grid
    const gap = 40;
    for (let x = 0; x < W; x += gap) {
      for (let y = 0; y < H; y += gap) {
        const phase = Math.sin(t * 0.8 + x * 0.02 + y * 0.02) * 0.5 + 0.5;
        const alpha = 0.04 + phase * 0.08;
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${alpha})`;
        ctx.fill();
      }
    }
  }

  let animId;
  function animate(ts) {
    animId = requestAnimationFrame(animate);
    drawGrid(ts * 0.001);
  }

  // Only run when section is in view
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      resize();
      animate(0);
    } else {
      cancelAnimationFrame(animId);
    }
  }, { threshold: 0.1 });

  const section = document.getElementById('contact');
  if (section) observer.observe(section);

  window.addEventListener('resize', debounce(resize, 150));
})();


/* ─── TYPEWRITER ──────────────────────────────────────────────── */
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    'Data Engineer',
    'GCP Specialist',
    'Pipelines Builder',
    'Lakehouse Specialist',
    
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let paused = false;

  function tick() {
    const phrase = phrases[phraseIdx];

    if (paused) {
      paused = false;
      setTimeout(tick, 1400);
      return;
    }

    if (!deleting) {
      charIdx++;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        paused = true;
        setTimeout(tick, 50);
        return;
      }
      setTimeout(tick, 65 + Math.random() * 40);
    } else {
      charIdx--;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 35);
    }
  }

  setTimeout(tick, 800);
})();


/* ─── COUNTER ANIMATION ───────────────────────────────────────── */
function animateCounters() {
  const els = document.querySelectorAll('.stat-num[data-target]');
  els.forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}


/* ─── SCROLL REVEAL ───────────────────────────────────────────── */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  let countersAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));

  // Trigger counter animation when hero stats enter view
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const statsObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    }, { threshold: 0.5 });
    statsObserver.observe(heroStats);
  }
})();


/* ─── SKILL BAR ANIMATION ─────────────────────────────────────── */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill[data-width]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
})();


/* ─── NAVBAR ──────────────────────────────────────────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const links = navLinks.querySelectorAll('a');

  // Scroll state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active link highlighting
  const sections = document.querySelectorAll('section[id]');
  const activateLink = () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');
      const link   = navLinks.querySelector(`a[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  };
  window.addEventListener('scroll', activateLink, { passive: true });
  activateLink();
})();


/* ─── SCROLL TO TOP ───────────────────────────────────────────── */
(function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ─── PROJECT IMAGES (user-provided) ──────────────────────────── */
(function loadProjectImages() {
  // For project images: set the data-bg attribute to your image URL
  // e.g. <div class="project-image" data-bg="./images/my-project.jpg">
  // The CSS will handle color overlay to match the design theme automatically

  document.querySelectorAll('.project-image[data-bg]').forEach(el => {
    const bg = el.getAttribute('data-bg');
    if (bg && bg.trim()) {
      el.style.backgroundImage = `url('${bg}')`;
      // Hide placeholder art when image is set
      const art = el.querySelector('.project-placeholder-art');
      if (art) art.style.display = 'none';
    }
  });

  // Same for cert images
  document.querySelectorAll('.cert-image[data-bg]').forEach(el => {
    const bg = el.getAttribute('data-bg');
    if (bg && bg.trim()) {
      el.style.backgroundImage = `url('${bg}')`;
      const placeholder = el.querySelector('.cert-placeholder');
      if (placeholder) placeholder.style.display = 'none';
    }
  });
})();


/* ─── CONTACT FORM ────────────────────────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<span class="btn-icon">⟳</span> Sending...';

    // Simulate send (replace with real endpoint)
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.innerHTML = '<span class="btn-icon">◈</span> Send Message';
      success.classList.add('visible');
      setTimeout(() => success.classList.remove('visible'), 5000);
    }, 1200);
  });
})();


/* ─── SMOOTH ANCHOR SCROLLING ─────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navH = document.getElementById('navbar')?.offsetHeight || 0;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH - 20;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


/* ─── TIMELINE ANIMATED FILL ──────────────────────────────────── */
(function initTimelineFill() {
  const line = document.querySelector('.timeline-line');
  if (!line) return;

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      line.style.transition = 'opacity 1.5s ease';
      line.style.opacity = '1';
    }
  }, { threshold: 0.1 });

  line.style.opacity = '0';
  observer.observe(line);
})();


/* ─── TECH PILLS stagger animation ──────────────────────────────── */
(function initPillsAnimation() {
  const pills = document.querySelectorAll('.tech-pill');
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      pills.forEach((pill, i) => {
        setTimeout(() => {
          pill.style.opacity = '1';
          pill.style.transform = 'translateY(0)';
        }, i * 35);
      });
      observer.disconnect();
    }
  }, { threshold: 0.3 });

  pills.forEach(pill => {
    pill.style.opacity = '0';
    pill.style.transform = 'translateY(10px)';
    pill.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });

  const pillsContainer = document.querySelector('.tech-pills');
  if (pillsContainer) observer.observe(pillsContainer);
})();


/* ─── CURSOR GLOW EFFECT ─────────────────────────────────────── */
(function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // Skip on touch

  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9999;
    width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
    left: -999px; top: -999px;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
})();


/* ─── UTILITY ─────────────────────────────────────────────────── */
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
