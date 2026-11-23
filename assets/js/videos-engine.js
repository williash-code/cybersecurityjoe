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
