/**
 * CYBERSECURITY JOE — Video Hub Engine (Vanilla ES6)
 * Handles interactive video playback, category filtering, and featured player switching.
 */

document.addEventListener('DOMContentLoaded', () => {
  const videoGrid = document.getElementById('videos-grid-root');
  if (!videoGrid) return;

  if (typeof CS_VIDEOS_DATA === 'undefined') {
    console.error('CS_VIDEOS_DATA is missing. Ensure videos-data.js is loaded first.');
    return;
  }

  const categoryBtns = document.querySelectorAll('.video-filter-btn');
  const heroPlayer = document.getElementById('hero-video-iframe');
  const heroTitle = document.getElementById('hero-video-title');
  const heroSummary = document.getElementById('hero-video-summary');
  const heroTakeaways = document.getElementById('hero-video-takeaways');

  let activeCategory = 'All';

  function renderGrid() {
    videoGrid.innerHTML = '';

    const filtered = CS_VIDEOS_DATA.filter(item => {
      return activeCategory === 'All' || item.category === activeCategory;
    });

    filtered.forEach(video => {
      const card = document.createElement('div');
      card.className = 'card video-card animate-fade-in';
      card.style.cursor = 'pointer';

      card.innerHTML = `
        <div class="card-media" style="margin-bottom: 1rem;">
          <img src="${video.thumbnail}" alt="${escapeHtml(video.title)}" loading="lazy">
          <div class="video-play-overlay">
            <div class="play-button-icon">▶</div>
          </div>
          <span class="video-duration-pill">${video.duration}</span>
        </div>
        <div class="card-meta">
          <span class="badge badge-blue">${escapeHtml(video.category)}</span>
          <span>•</span>
          <span>${video.views} views</span>
        </div>
        <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem; line-height: 1.3;">
          ${escapeHtml(video.title)}
        </h4>
        <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem;">
          ${escapeHtml(video.summary)}
        </p>
        <div style="margin-top: auto; padding-top: 0.8rem; border-top: 1px solid var(--color-border-subtle); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.8rem; color: var(--color-primary-light); font-weight: 600;">Watch Video →</span>
          <span class="badge badge-amber" style="font-size: 0.7rem;">${video.badge}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        loadHeroVideo(video);
      });

      videoGrid.appendChild(card);
    });

    videoGrid.appendChild(createComingSoonVideoCardElement(activeCategory));
  }

  function loadHeroVideo(video) {
    if (heroPlayer) {
      heroPlayer.src = `${video.embedUrl}?autoplay=1`;
    }
    if (heroTitle) {
      heroTitle.textContent = video.title;
    }
    if (heroSummary) {
      heroSummary.textContent = video.summary;
    }
    if (heroTakeaways) {
      heroTakeaways.innerHTML = video.takeaways.map(t => `
        <li style="margin-bottom: 0.4rem; color: var(--color-text-main);">
          <strong style="color: var(--color-primary-light);">✓</strong> ${escapeHtml(t)}
        </li>
      `).join('');
    }

    // Smooth scroll to hero player
    const heroSection = document.getElementById('hero-video-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderGrid();
    });
  });

  renderGrid();
});

/**
 * Branded "More Videos Coming Soon" Card Component
 */
function createComingSoonVideoCardElement(activeCategory) {
  const card = document.createElement('div');
  card.className = 'card animate-fade-in coming-soon-card';
  card.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px dashed rgba(14, 165, 233, 0.45);
    background: radial-gradient(circle at 50% 10%, rgba(14, 165, 233, 0.12) 0%, var(--color-surface-base) 70%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    transition: transform var(--transition-fast), border-color var(--transition-fast);
  `;

  card.addEventListener('mouseenter', () => {
    card.style.borderColor = 'var(--color-primary-light)';
    card.style.transform = 'translateY(-4px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.borderColor = 'rgba(14, 165, 233, 0.45)';
    card.style.transform = 'translateY(0)';
  });

  card.innerHTML = `
    <div>
      <div class="card-media" style="background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.18) 0%, #080d19 80%); display: flex; flex-direction: column; align-items: center; justify-content: center; aspect-ratio: 16 / 9; margin-bottom: 1rem; border-bottom: 1px solid var(--color-border-subtle); position: relative;">
        <img src="assets/images/logo.png" alt="CyberSecurity Joe Logo" style="max-width: 200px; width: 75%; height: auto; object-fit: contain; filter: drop-shadow(0 10px 25px rgba(14, 165, 233, 0.45));">
        <span class="badge badge-blue" style="position: absolute; bottom: 8px; font-size: 0.7rem; letter-spacing: 0.5px;">⚡ CSJOE BROADCAST STUDIO</span>
      </div>

      <div class="card-meta">
        <span class="badge badge-amber">⚡ In Production</span>
        <span>•</span>
        <span style="font-family: var(--font-mono); color: var(--color-primary-light);">Upcoming Masterclasses</span>
      </div>

      <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem; line-height: 1.3;">
        More Videos Coming Soon
      </h4>

      <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem;">
        Shane, known as CyberSecurity Joe, is filming new plain-English visual breakdowns, cyber history documentaries, and step-by-step masterclasses.
      </p>

      <div style="margin-bottom: 1.2rem; display: flex; flex-wrap: wrap; gap: 0.4rem;">
        <span style="font-size: 0.75rem; background: var(--color-surface-elevated); color: var(--color-text-muted); padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">✓ Ransomware Incident Response</span>
        <span style="font-size: 0.75rem; background: var(--color-surface-elevated); color: var(--color-text-muted); padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">✓ 2026 Home Lab Setup Guide</span>
        <span style="font-size: 0.75rem; background: var(--color-surface-elevated); color: var(--color-text-muted); padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">✓ Declassified Stuxnet Deep-Dive</span>
      </div>
    </div>

    <div style="margin-top: auto; padding-top: 0.8rem; border-top: 1px solid var(--color-border-subtle); display: flex; align-items: center; justify-content: space-between;">
      <span style="font-size: 0.8rem; color: var(--color-text-dim);">By CyberSecurity Joe</span>
      <a href="contact.html" class="btn btn-secondary btn-sm" style="border-color: var(--color-primary-light); color: var(--color-primary-light); padding: 0.35rem 0.75rem;">Request a Video →</a>
    </div>
  `;

  return card;
}
