/* ============================================================
   RAM CHARAN — CINEMATIC FAN SITE — script.js
   ============================================================ */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- DATA: FILMOGRAPHY ----------
     Categories: action, drama, historical, recent
     Characters are included only where widely verified/public;
     left blank where not confidently verifiable. */
  const MOVIES = [
    { title: 'Chirutha', year: 2007, cat: ['action', 'drama'], character: 'Siddharth / Vicky',
      desc: 'Ram Charan\u2019s debut film, a romantic action drama that introduced him to Telugu cinema.' },
    { title: 'Magadheera', year: 2009, cat: ['action', 'historical'], character: 'Harsha / Kala Bhairava',
      desc: 'A reincarnation action epic that became a landmark hit and a defining breakthrough in his career.' },
    { title: 'Orange', year: 2010, cat: ['drama'], character: 'Krishna / Ram',
      desc: 'A romantic drama exploring love and sacrifice across two intertwined timelines.' },
    { title: 'Racha', year: 2012, cat: ['action'], character: 'Ram Charan',
      desc: 'A high-energy mass action entertainer built around family rivalry and romance.' },
    { title: 'Naayak', year: 2013, cat: ['action', 'drama'], character: 'Shiva / Naayak',
      desc: 'A political action drama about one man\u2019s mission to clean up corruption as an undercover chief minister.' },
    { title: 'Yevadu', year: 2014, cat: ['action'], character: 'Gautham / Vishnu',
      desc: 'A dual-role action thriller blending a heartfelt family story with a gritty revenge plot.' },
    { title: 'Govindudu Andarivadele', year: 2014, cat: ['drama'], character: 'Krishna',
      desc: 'A family drama about reconnecting with one\u2019s roots and rural heritage.' },
    { title: 'Bruce Lee: The Fighter', year: 2015, cat: ['action'], character: 'Krishna',
      desc: 'An action film centered on martial arts discipline and personal transformation.' },
    { title: 'Dhruva', year: 2016, cat: ['action'], character: 'Dhruva Vijay',
      desc: 'A slick investigative action thriller following a disciplined young police officer.' },
    { title: 'Rangasthalam', year: 2018, cat: ['drama'], character: 'Chitti Babu',
      desc: 'A critically acclaimed rural drama widely regarded as one of the finest performances of his career.' },
    { title: 'Vinaya Vidheya Rama', year: 2019, cat: ['action'], character: 'Ram',
      desc: 'A high-octane action drama centered on family honour and vengeance.' },
    { title: 'RRR', year: 2022, cat: ['action', 'historical', 'recent'], character: 'Alluri Sitarama Raju',
      desc: 'S. S. Rajamouli\u2019s epic period action drama that brought Ram Charan to global audiences and international acclaim.' },
    { title: 'Acharya', year: 2022, cat: ['action', 'recent'], character: 'Siddha',
      desc: 'An action drama centered on the fight to protect temple lands and community heritage.' },
    { title: 'Game Changer', year: 2025, cat: ['action', 'recent'], character: 'Ram Nandan',
      desc: 'A political action drama marking his high-profile return to the screen after RRR\u2019s global success.' },
    { title: 'Peddi', year: 2025, cat: ['action', 'recent'], character: 'TBA',
      desc: 'An upcoming film reuniting Ram Charan with filmmaker Buchi Babu Sana, among his most anticipated projects.' },
  ];

  /* ---------- DATA: AWARDS ---------- */
  const PERSONAL_AWARDS = [
    { year: '2008', name: 'Filmfare Award for Best Male Debut \u2013 South', note: 'For Chirutha' },
    { year: '2010', name: 'Nandi Award \u2013 Special Jury', note: 'For Magadheera' },
    { year: '2019', name: 'Filmfare Award for Best Actor \u2013 Telugu', note: 'For Rangasthalam' },
    { year: '2019', name: 'SIIMA Award for Best Actor \u2013 Telugu', note: 'For Rangasthalam' },
    { year: '2023', name: 'Padma Shri (announced jointly with RRR team context)', note: 'Recognition of contribution to Indian cinema' },
  ];

  const FILM_AWARDS = [
    { year: '2022', name: 'RRR \u2013 Global Box Office & Critical Success', note: 'Recognition for the film as a whole' },
    { year: '2023', name: 'Academy Award \u2013 Best Original Song', note: '\u201cNaatu Naatu\u201d from RRR (song recognition, not an acting award)' },
    { year: '2023', name: 'Golden Globe \u2013 Best Original Song', note: '\u201cNaatu Naatu\u201d from RRR' },
    { year: '2018', name: 'National Film Award context \u2013 Rangasthalam', note: 'Recognition associated with the film\u2019s craft' },
  ];

  /* ---------- DATA: TIMELINE ---------- */
  const TIMELINE = [
    { year: '2007', title: 'Chirutha', desc: 'His acting debut, introducing him as a leading man in Telugu cinema.' },
    { year: '2009', title: 'Magadheera', desc: 'A major breakthrough and one of the highest-grossing Telugu films of its time.' },
    { year: '2013', title: 'Zanjeer', desc: 'His Hindi film debut, expanding his reach beyond Telugu cinema.' },
    { year: '2018', title: 'Rangasthalam', desc: 'A critically acclaimed, award-winning performance widely considered a career best.' },
    { year: '2022', title: 'RRR', desc: 'International recognition through S. S. Rajamouli\u2019s global blockbuster.' },
    { year: '2023', title: 'Global Recognition', desc: 'Continued worldwide attention following RRR\u2019s award-season success.' },
    { year: '2025', title: 'Game Changer', desc: 'His return to the big screen with a high-profile political action drama.' },
  ];

  /* ---------- DATA: NEWS (labelled as featured, not live) ---------- */
  const NEWS = [
    { date: 'Featured Update', title: 'A Career Spanning Nearly Two Decades', desc: 'From his 2007 debut to global recognition through RRR, Ram Charan\u2019s journey reflects the evolution of modern Telugu cinema.' },
    { date: 'Featured Update', title: 'Rangasthalam Remains a Fan Favourite', desc: 'Years after release, Rangasthalam continues to be cited as a defining performance in his filmography.' },
    { date: 'Featured Update', title: 'Building Beyond Acting', desc: 'Alongside his acting career, Ram Charan has continued to grow his presence as a producer and entrepreneur.' },
  ];

  /* ---------- DATA: GALLERY CAPTIONS ---------- */
  const GALLERY = [
    'On set \u2013 Action sequence prep', 'Red carpet appearance', 'Behind the scenes \u2013 Rangasthalam',
    'Promotional event', 'Magazine cover feature', 'Award night moment',
    'Candid on-location photo', 'Press conference', 'Cinematic portrait study',
    'Fan meet appearance', 'Film launch event', 'Behind the scenes \u2013 RRR',
  ];

  /* ============================================================
     LOADING SCREEN
     ============================================================ */
  window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    setTimeout(() => loader.classList.add('hidden'), 900);
  });

  /* ============================================================
     HERO LETTERS
     ============================================================ */
  function buildHeroTitle() {
    const el = document.getElementById('hero-title');
    const text = 'RAM CHARAN';
    let delay = 0;
    text.split('').forEach((ch) => {
      const span = document.createElement('span');
      if (ch === ' ') {
        span.className = 'space';
      } else {
        span.className = 'letter';
        span.textContent = ch;
        span.style.animationDelay = `${0.15 + delay * 0.05}s`;
        delay++;
      }
      el.appendChild(span);
    });
  }
  buildHeroTitle();

  /* ============================================================
     HERO PARTICLES
     ============================================================ */
  function buildParticles() {
    if (prefersReducedMotion) return;
    const field = document.getElementById('hero-particles');
    const count = window.innerWidth < 700 ? 16 : 30;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.className = 'particle';
      const size = 2 + Math.random() * 4;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.bottom = `-${Math.random() * 20}px`;
      p.style.animationDuration = `${8 + Math.random() * 10}s`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      field.appendChild(p);
    }
  }
  buildParticles();

  /* ============================================================
     NAVIGATION: scroll state, active link, mobile menu
     ============================================================ */
  const header = document.getElementById('site-header');
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.getElementById('hamburger');
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTop = document.getElementById('back-to-top');

  function onScroll() {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 40);
    backToTop.classList.toggle('show', scrollY > 600);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    scrollProgress.style.width = `${pct}%`;

    updateActiveSection();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = Array.from(document.querySelectorAll('main > section[id]'));
  const navAnchors = Array.from(document.querySelectorAll('.nav-link'));
  function updateActiveSection() {
    let current = sections[0];
    const trigger = window.scrollY + window.innerHeight * 0.35;
    for (const sec of sections) {
      if (sec.offsetTop <= trigger) current = sec;
    }
    navAnchors.forEach((a) => {
      a.classList.toggle('active-link', a.dataset.section === current.id);
    });
  }

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  document.getElementById('scroll-indicator').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  /* ============================================================
     SOUND TOGGLE (muted by default, no autoplay, user-controlled)
     ============================================================ */
  const soundToggle = document.getElementById('sound-toggle');
  let soundOn = false;
  let audioCtx = null;

  function playChime() {
    if (!soundOn) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch (e) { /* audio unavailable; fail silently */ }
  }

  soundToggle.addEventListener('click', () => {
    soundOn = !soundOn;
    soundToggle.classList.toggle('on', soundOn);
    soundToggle.setAttribute('aria-pressed', String(soundOn));
    soundToggle.innerHTML = soundOn
      ? '<i class="fa-solid fa-volume-high"></i>'
      : '<i class="fa-solid fa-volume-xmark"></i>';
    if (soundOn) playChime();
  });

  if (!prefersReducedMotion) {
    document.querySelectorAll('.btn, .filter-btn, .social-card, .nav-link').forEach((el) => {
      el.addEventListener('mouseenter', playChime);
    });
  }

  /* ============================================================
     CUSTOM CURSOR
     ============================================================ */
  const cursor = document.getElementById('custom-cursor');
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
    document.querySelectorAll('a, button, .movie-card, .masonry-item').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
  }

  /* ============================================================
     SCROLL REVEAL (Intersection Observer)
     ============================================================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  function observeReveals(root = document) {
    root.querySelectorAll('.reveal, .award-card, .timeline-item').forEach((el) => revealObserver.observe(el));
  }

  /* ============================================================
     ANIMATED STATS COUNTER
     ============================================================ */
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10);
    if (prefersReducedMotion) { el.textContent = target; return; }
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  document.querySelectorAll('.stat-number').forEach((el) => statObserver.observe(el));

  /* ============================================================
     BUILD: FILMOGRAPHY GRID
     ============================================================ */
  const movieGrid = document.getElementById('movie-grid');

  function createPosterIcon(index) {
    const icons = ['fa-film', 'fa-clapperboard', 'fa-star', 'fa-masks-theater', 'fa-video'];
    return icons[index % icons.length];
  }

  function renderMovies() {
    movieGrid.innerHTML = '';
    MOVIES.forEach((movie, i) => {
      const card = document.createElement('article');
      card.className = 'movie-card';
      card.dataset.cats = movie.cat.join(' ');
      card.innerHTML = `
        <div class="movie-poster-wrap">
          <div class="poster-placeholder">
            <i class="fa-solid ${createPosterIcon(i)}"></i>
            <span>${movie.title}</span>
          </div>
        </div>
        <div class="movie-body">
          <span class="movie-year">${movie.year}</span>
          <h3 class="movie-title">${movie.title}</h3>
          ${movie.character ? `<p class="movie-char">as ${movie.character}</p>` : ''}
          <p class="movie-desc">${movie.desc}</p>
          <button class="view-btn" data-index="${i}">View Details <i class="fa-solid fa-arrow-right"></i></button>
        </div>`;
      movieGrid.appendChild(card);
    });
    requestAnimationFrame(() => {
      movieGrid.querySelectorAll('.movie-card').forEach((c, i) => {
        setTimeout(() => c.classList.add('visible'), i * 60);
      });
    });
  }
  renderMovies();

  /* Filtering */
  const filterBar = document.getElementById('filter-bar');
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterBar.querySelectorAll('.filter-btn').forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const filter = btn.dataset.filter;

    document.querySelectorAll('.movie-card').forEach((card) => {
      const cats = card.dataset.cats.split(' ');
      const show = filter === 'all' || cats.includes(filter);
      if (show) {
        card.classList.remove('hidden-card');
        card.classList.remove('visible');
        requestAnimationFrame(() => card.classList.add('visible'));
      } else {
        card.classList.add('hidden-card');
      }
    });
  });

  /* Movie modal */
  const movieModal = document.getElementById('movie-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalYear = document.getElementById('modal-year');
  const modalChar = document.getElementById('modal-character');
  const modalDesc = document.getElementById('modal-desc');
  const modalPosterPlaceholder = document.getElementById('modal-poster-placeholder');

  function openMovieModal(index) {
    const movie = MOVIES[index];
    modalTitle.textContent = movie.title;
    modalYear.textContent = movie.year;
    modalChar.textContent = movie.character ? `as ${movie.character}` : '';
    modalDesc.textContent = movie.desc;
    modalPosterPlaceholder.innerHTML = `<i class="fa-solid ${createPosterIcon(index)}"></i><span>${movie.title}</span>`;
    movieModal.classList.add('open');
    movieModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }
  function closeMovieModal() {
    movieModal.classList.remove('open');
    movieModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  movieGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-btn');
    if (!btn) return;
    openMovieModal(parseInt(btn.dataset.index, 10));
  });
  modalClose.addEventListener('click', closeMovieModal);
  movieModal.addEventListener('click', (e) => { if (e.target === movieModal) closeMovieModal(); });

  /* ============================================================
     BUILD: GALLERY (MASONRY) + LIGHTBOX
     ============================================================ */
  const masonryGrid = document.getElementById('masonry-grid');
  function renderGallery() {
    masonryGrid.innerHTML = '';
    GALLERY.forEach((caption, i) => {
      const item = document.createElement('div');
      item.className = 'masonry-item';
      item.dataset.index = i;
      item.innerHTML = `
        <div class="poster-placeholder">
          <i class="fa-solid fa-image"></i>
        </div>
        <div class="masonry-caption">${caption}</div>`;
      masonryGrid.appendChild(item);
    });
  }
  renderGallery();

  const lightbox = document.getElementById('lightbox');
  const lightboxPlaceholder = document.getElementById('lightbox-placeholder');
  const lightboxCaption = document.getElementById('lightbox-caption');
  let currentLightboxIndex = 0;

  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function updateLightbox() {
    lightboxCaption.textContent = GALLERY[currentLightboxIndex];
    lightboxPlaceholder.innerHTML = '<i class="fa-solid fa-image"></i>';
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function nextImage() { currentLightboxIndex = (currentLightboxIndex + 1) % GALLERY.length; updateLightbox(); }
  function prevImage() { currentLightboxIndex = (currentLightboxIndex - 1 + GALLERY.length) % GALLERY.length; updateLightbox(); }

  masonryGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.masonry-item');
    if (!item) return;
    openLightbox(parseInt(item.dataset.index, 10));
  });
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-next').addEventListener('click', nextImage);
  document.getElementById('lightbox-prev').addEventListener('click', prevImage);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeLightbox(); closeMovieModal(); }
    if (lightbox.classList.contains('open')) {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    }
  });

  /* ============================================================
     BUILD: AWARDS
     ============================================================ */
  function renderAwards(containerId, list) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    list.forEach((award) => {
      const card = document.createElement('div');
      card.className = 'award-card';
      card.innerHTML = `
        <div class="award-trophy"><i class="fa-solid fa-trophy"></i></div>
        <span class="award-year">${award.year}</span>
        <h4>${award.name}</h4>
        <p>${award.note}</p>`;
      container.appendChild(card);
    });
  }
  renderAwards('personal-awards-grid', PERSONAL_AWARDS);
  renderAwards('film-awards-grid', FILM_AWARDS);

  /* Floating decorative stars in awards section */
  (function addStars() {
    if (prefersReducedMotion) return;
    const section = document.querySelector('.awards-section');
    for (let i = 0; i < 10; i++) {
      const star = document.createElement('i');
      star.className = 'fa-solid fa-star star';
      star.style.left = `${Math.random() * 95}%`;
      star.style.top = `${Math.random() * 95}%`;
      star.style.fontSize = `${8 + Math.random() * 14}px`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      section.appendChild(star);
    }
  })();

  /* ============================================================
     BUILD: TIMELINE
     ============================================================ */
  const timelineList = document.getElementById('timeline-list');
  function renderTimeline() {
    timelineList.innerHTML = '';
    TIMELINE.forEach((item, i) => {
      const el = document.createElement('div');
      el.className = 'timeline-item';
      el.innerHTML = `
        <span class="timeline-marker"></span>
        <span class="timeline-year">${item.year}</span>
        <div class="timeline-card">
          <div class="timeline-thumb">
            <div class="poster-placeholder"><i class="fa-solid fa-clapperboard"></i></div>
          </div>
          <div>
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
          </div>
        </div>`;
      timelineList.appendChild(el);
    });
  }
  renderTimeline();

  /* ============================================================
     BUILD: NEWS
     ============================================================ */
  const newsGrid = document.getElementById('news-grid');
  function renderNews() {
    newsGrid.innerHTML = '';
    NEWS.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'news-card';
      card.innerHTML = `
        <div class="news-thumb"><div class="poster-placeholder"><i class="fa-solid fa-newspaper"></i></div></div>
        <div class="news-body">
          <span class="news-date">${item.date}</span>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <a href="#news" class="news-link">Read More <i class="fa-solid fa-arrow-right"></i></a>
        </div>`;
      newsGrid.appendChild(card);
    });
  }
  renderNews();

  /* ============================================================
     HERO PARALLAX (subtle, disabled with reduced motion)
     ============================================================ */
  if (!prefersReducedMotion) {
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = `translateY(${y * 0.25}px)`;
      }
    }, { passive: true });
  }

  /* ============================================================
     FOOTER YEAR
     ============================================================ */
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  /* ============================================================
     FINALLY: observe all reveal targets (built dynamically too)
     ============================================================ */
  observeReveals();
  document.querySelectorAll('.award-card').forEach((el) => revealObserver.observe(el));
  document.querySelectorAll('.timeline-item').forEach((el) => revealObserver.observe(el));

})();
