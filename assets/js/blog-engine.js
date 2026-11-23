/**
 * CYBERSECURITY JOE — Blog Engine (Vanilla ES6)
 * Renders blog overview on blog.html and single article on article.html
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CS_BLOG_DATA === 'undefined') {
    console.error('CS_BLOG_DATA is missing. Ensure blog-data.js is loaded first.');
    return;
  }

  // Check if we are on the single article page or the archive
  const articleContainer = document.getElementById('single-article-root');
  const archiveContainer = document.getElementById('blog-archive-root');

  if (articleContainer) {
    renderSingleArticle();
  } else if (archiveContainer) {
    initBlogArchive();
  }
});

/**
 * Render Single Article View (article.html)
 */
function renderSingleArticle() {
  const root = document.getElementById('single-article-root');
  if (!root) return;

  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  // Fallback to first post if slug is missing or not found
  let post = CS_BLOG_DATA.find(p => p.slug === slug);
  if (!post) {
    post = CS_BLOG_DATA[0];
  }

  // Update Page Title and SEO Meta Tags Dynamically
  document.title = `${post.seoTitle || post.title} | CyberSecurityJoe`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', post.metaDescription);

  // Render Article HTML
  root.innerHTML = `
    <article class="article-detail-wrap animate-fade-in">
      <header class="article-header container container-narrow">
        <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1rem; flex-wrap: wrap;">
          ${post.categories.map(c => `<span class="badge badge-blue">${escapeHtml(c)}</span>`).join('')}
        </div>
        <h1 style="font-size: clamp(2rem, 4vw, 3.2rem); margin-bottom: 1.5rem; line-height: 1.2;">${escapeHtml(post.title)}</h1>
        <div class="card-meta" style="justify-content: center; font-size: 0.95rem; margin-bottom: 2rem;">
          <span>By <strong>${escapeHtml(post.author.name)}</strong></span>
          <span>•</span>
          <time datetime="${post.isoDate}">${escapeHtml(post.publishDate)}</time>
          <span>•</span>
          <span>${escapeHtml(post.readTime)}</span>
        </div>
      </header>

      <div class="container container-narrow">
        <div class="card-media" style="margin-bottom: 3rem; aspect-ratio: 16 / 9; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg);">
          <img src="${post.featuredImage}" alt="${escapeHtml(post.title)}" loading="eager">
        </div>

        <div class="article-body">
          ${post.fullArticle}
        </div>

        <!-- Tag Cloud -->
        <div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border-subtle); display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
          <span style="font-size: 0.85rem; color: var(--color-text-dim); text-transform: uppercase; font-family: var(--font-mono);">Tags:</span>
          ${post.tags.map(t => `<span class="badge" style="background: var(--color-surface-elevated); color: var(--color-text-muted);">${escapeHtml(t)}</span>`).join('')}
        </div>

        <!-- Social Share & Return Actions -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; padding: 1.5rem; background: var(--color-surface-card); border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); flex-wrap: wrap; gap: 1rem;">
          <a href="blog.html" class="btn btn-secondary btn-sm">← Back to Articles</a>
          <button id="share-article-btn" class="btn btn-primary btn-sm">
            <span>🔗 Share Article</span>
          </button>
        </div>

        <!-- Author Bio Box -->
        <div class="author-bio-card">
          <img src="assets/images/logo.png" alt="CyberSecurity Joe">
          <div>
            <h4 style="font-size: 1.2rem; color: #ffffff; margin-bottom: 0.3rem;">CyberSecurity Joe</h4>
            <p style="font-size: 0.85rem; color: var(--color-primary-light); font-family: var(--font-mono); margin-bottom: 0.6rem;">Information Systems Security Manager (ISSM)</p>
            <p style="font-size: 0.95rem; margin-bottom: 0; color: var(--color-text-muted);">
              Dedicated to translating complex technical risks and cyber history into clear, empowering mental models for everyday individuals and families.
            </p>
          </div>
        </div>

        <!-- Related Articles Carousel / Grid -->
        <div style="margin-top: 4rem;">
          <h3 style="font-size: 1.6rem; margin-bottom: 1.5rem; text-align: center;">Continue Reading</h3>
          <div class="grid-2" id="related-articles-grid"></div>
        </div>
      </div>
    </article>
  `;

  // Attach share event
  const shareBtn = document.getElementById('share-article-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        const orig = shareBtn.innerHTML;
        shareBtn.innerHTML = `✓ Link Copied!`;
        setTimeout(() => { shareBtn.innerHTML = orig; }, 2500);
      }
    });
  }

  // Populate related articles (excluding current)
  const relatedGrid = document.getElementById('related-articles-grid');
  if (relatedGrid) {
    const others = CS_BLOG_DATA.filter(p => p.slug !== post.slug).slice(0, 2);
    others.forEach(rel => {
      relatedGrid.appendChild(createBlogCardElement(rel));
    });
  }
}

/**
 * Initialize Blog Archive Grid (blog.html)
 */
function initBlogArchive() {
  const container = document.getElementById('blog-archive-root');
  const searchInput = document.getElementById('blog-search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let activeCategory = 'All';
  let searchTerm = '';

  function render() {
    container.innerHTML = '';

    const filtered = CS_BLOG_DATA.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.categories.includes(activeCategory);
      const matchesSearch = !searchTerm || 
        item.title.toLowerCase().includes(searchTerm) || 
        item.excerpt.toLowerCase().includes(searchTerm) ||
        item.tags.some(t => t.toLowerCase().includes(searchTerm));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; color: var(--color-text-dim);">
          <p style="font-size: 1.2rem;">No articles match your search criteria.</p>
          <button class="btn btn-secondary btn-sm" id="reset-blog-filter-btn" style="margin-top: 1rem;">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-blog-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeCategory = 'All';
          searchTerm = '';
          if (searchInput) searchInput.value = '';
          filterBtns.forEach(b => b.classList.toggle('active', b.dataset.category === 'All'));
          render();
        });
      }
      return;
    }

    filtered.forEach(post => {
      container.appendChild(createBlogCardElement(post));
    });

    if (!searchTerm) {
      container.appendChild(createComingSoonArticleCardElement(activeCategory));
    }
  }

  // Category filter clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      render();
    });
  });

  // Search input typing
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      render();
    });
  }

  render();
}

/**
 * Reusable Blog Card Component
 */
function createBlogCardElement(post) {
  const card = document.createElement('article');
  card.className = 'card animate-fade-in';
  card.innerHTML = `
    <div class="card-media">
      <img src="${post.featuredImage}" alt="${escapeHtml(post.title)}" loading="lazy">
    </div>
    <div class="card-meta">
      <span class="badge badge-blue">${escapeHtml(post.categories[0] || 'Security')}</span>
      <span>•</span>
      <time datetime="${post.isoDate}">${escapeHtml(post.publishDate)}</time>
      <span>•</span>
      <span>${escapeHtml(post.readTime)}</span>
    </div>
    <h3 class="card-title">
      <a href="article.html?slug=${encodeURIComponent(post.slug)}">${escapeHtml(post.title)}</a>
    </h3>
    <p class="card-excerpt">${escapeHtml(post.excerpt)}</p>
    <div class="card-footer">
      <span style="font-size: 0.85rem; color: var(--color-text-dim);">By ${escapeHtml(post.author.name)}</span>
      <a href="article.html?slug=${encodeURIComponent(post.slug)}" class="btn btn-secondary btn-sm">Read Story →</a>
    </div>
  `;
  return card;
}

/**
 * Branded "More Articles Coming Soon" Card Component
 */
function createComingSoonArticleCardElement(activeCategory) {
  const card = document.createElement('article');
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
      <div class="card-media" style="background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.18) 0%, #080d19 80%); display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 195px; padding: 1.8rem; border-bottom: 1px solid var(--color-border-subtle); position: relative;">
        <img src="assets/images/logo.png" alt="CyberSecurity Joe Logo" style="max-width: 220px; width: 100%; height: auto; filter: drop-shadow(0 10px 25px rgba(14, 165, 233, 0.45));">
        <span class="badge badge-blue" style="position: absolute; bottom: 12px; font-size: 0.72rem; letter-spacing: 0.5px;">⚡ CSJOE EDITORIAL DESK</span>
      </div>
      
      <div style="padding: 1.5rem 1.5rem 0.5rem;">
        <div class="card-meta">
          <span class="badge badge-amber">⚡ In Production</span>
          <span>•</span>
          <span style="font-family: var(--font-mono); color: var(--color-primary-light);">Weekly Essays</span>
        </div>
        
        <h3 class="card-title" style="color: #ffffff; margin-bottom: 0.6rem; font-size: 1.25rem;">
          More Articles Coming Soon
        </h3>
        
        <p class="card-excerpt" style="color: var(--color-text-muted); line-height: 1.55; margin-bottom: 1.2rem;">
          Shane, known as CyberSecurity Joe, publishes weekly zero-jargon analyses, cyber history documentaries, and threat breakdowns for everyday people.
        </p>

        <div style="margin-bottom: 1.2rem; display: flex; flex-wrap: wrap; gap: 0.4rem;">
          <span style="font-size: 0.75rem; background: var(--color-surface-elevated); color: var(--color-text-muted); padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">✓ Smart Home Threat Matrix</span>
          <span style="font-size: 0.75rem; background: var(--color-surface-elevated); color: var(--color-text-muted); padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">✓ AI Voice Fraud Case Studies</span>
          <span style="font-size: 0.75rem; background: var(--color-surface-elevated); color: var(--color-text-muted); padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">✓ Declassified Cyber History</span>
        </div>
      </div>
    </div>

    <div class="card-footer" style="padding: 1.2rem 1.5rem; border-top: 1px solid var(--color-border-subtle); display: flex; justify-content: space-between; align-items: center;">
      <span style="font-size: 0.85rem; color: var(--color-text-dim);">By CyberSecurity Joe</span>
      <a href="contact.html" class="btn btn-secondary btn-sm" style="border-color: var(--color-primary-light); color: var(--color-primary-light);">Suggest a Topic →</a>
    </div>
  `;
  return card;
}
