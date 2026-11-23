/**
 * CYBERSECURITY JOE — Resources & Portfolio Engine (Vanilla ES6)
 * Generates the resource catalog on resources.html and deep-dive views on resource-detail.html
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CS_RESOURCES_DATA === 'undefined') {
    console.error('CS_RESOURCES_DATA is missing. Ensure resources-data.js is loaded first.');
    return;
  }

  const detailContainer = document.getElementById('single-resource-root');
  const catalogContainer = document.getElementById('resources-catalog-root');

  if (detailContainer) {
    renderSingleResource();
  } else if (catalogContainer) {
    initResourcesCatalog();
  }
});

/**
 * Render Single Resource / Portfolio Project View (resource-detail.html)
 */
function renderSingleResource() {
  const root = document.getElementById('single-resource-root');
  if (!root) return;

  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  let item = CS_RESOURCES_DATA.find(r => r.slug === slug);
  if (!item) {
    item = CS_RESOURCES_DATA[0];
  }

  // Update Dynamic SEO
  document.title = `${item.title} | CyberSecurityJoe Project & Toolkit`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', item.shortDescription);

  root.innerHTML = `
    <div class="resource-detail-wrap animate-fade-in">
      <header class="article-header container container-narrow">
        <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1rem;">
          <span class="badge badge-emerald">${escapeHtml(item.category)}</span>
        </div>
        <h1 style="font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem;">${escapeHtml(item.title)}</h1>
        <p class="lead" style="margin-bottom: 2rem;">${escapeHtml(item.shortDescription)}</p>
        
        <!-- Project Stats Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; background: var(--color-surface-elevated); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); padding: 1.5rem; text-align: left;">
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-text-dim); font-family: var(--font-mono); display: block;">Target Beneficiary</span>
            <strong style="color: #ffffff; font-size: 0.95rem;">${escapeHtml(item.client)}</strong>
          </div>
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-text-dim); font-family: var(--font-mono); display: block;">Framework Release</span>
            <strong style="color: #ffffff; font-size: 0.95rem;">${escapeHtml(item.completionDate)}</strong>
          </div>
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-text-dim); font-family: var(--font-mono); display: block;">Verification Standard</span>
            <strong style="color: #ffffff; font-size: 0.95rem;">Zero-Trust Baseline</strong>
          </div>
        </div>
      </header>

      <div class="container container-narrow" style="margin-top: 2.5rem;">
        <!-- Featured Image -->
        <div class="card-media" style="margin-bottom: 3rem; aspect-ratio: 16 / 9; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg);">
          <img src="${item.featuredImage}" alt="${escapeHtml(item.title)}" loading="eager">
        </div>

        <!-- Full Case Description -->
        <div class="article-body">
          ${item.fullDescription}
        </div>

        <!-- Services & Capabilities Breakdown -->
        <div style="margin-top: 3rem; background: var(--color-surface-card); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); padding: 2rem;">
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem; color: #ffffff;">Key Pillars & Deliverables</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
            ${item.services.map(s => `
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="color: var(--color-accent-emerald); font-weight: bold;">✓</span>
                <span style="color: var(--color-text-main); font-size: 0.95rem;">${escapeHtml(s)}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Technologies & Frameworks -->
        <div style="margin-top: 2rem; display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
          <span style="font-size: 0.85rem; color: var(--color-text-dim); font-family: var(--font-mono); text-transform: uppercase;">Standards & Tools:</span>
          ${item.technologies.map(t => `<span class="badge" style="background: var(--color-surface-elevated); color: var(--color-primary-light);">${escapeHtml(t)}</span>`).join('')}
        </div>

        <!-- Image Gallery -->
        ${item.galleryImages && item.galleryImages.length > 1 ? `
          <div style="margin-top: 3rem;">
            <h3 style="font-size: 1.3rem; margin-bottom: 1rem;">Visual Documentation & Artifacts</h3>
            <div class="grid-2">
              ${item.galleryImages.map(img => `
                <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--color-border-subtle); aspect-ratio: 16/9;">
                  <img src="${img}" alt="Documentation preview" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Next Actions & Inquiries -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 3rem; padding: 2rem; background: var(--color-surface-elevated); border-radius: var(--radius-lg); border: 1px solid var(--color-border-focus); flex-wrap: wrap; gap: 1rem;">
          <div>
            <h4 style="color: #ffffff; margin-bottom: 0.2rem;">Want personalized guidance?</h4>
            <p style="margin-bottom: 0; font-size: 0.9rem; color: var(--color-text-muted);">Reach out to discuss customized implementation or mentorship.</p>
          </div>
          <div style="display: flex; gap: 0.8rem;">
            <a href="resources.html" class="btn btn-secondary btn-sm">All Resources</a>
            <a href="contact.html" class="btn btn-primary btn-sm">Consult Joe →</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize Resources Catalog Grid (resources.html)
 */
function initResourcesCatalog() {
  const container = document.getElementById('resources-catalog-root');
  const searchInput = document.getElementById('resources-search-input');
  const filterBtns = document.querySelectorAll('.resource-filter-btn');

  let activeCategory = 'All';
  let searchTerm = '';

  function render() {
    container.innerHTML = '';

    const filtered = CS_RESOURCES_DATA.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = !searchTerm || 
        item.title.toLowerCase().includes(searchTerm) || 
        item.shortDescription.toLowerCase().includes(searchTerm) ||
        item.technologies.some(t => t.toLowerCase().includes(searchTerm));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; color: var(--color-text-dim);">
          <p style="font-size: 1.2rem;">No resource guides match your query.</p>
          <button class="btn btn-secondary btn-sm" id="reset-res-filter-btn" style="margin-top: 1rem;">Reset Filter</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-res-filter-btn');
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

    filtered.forEach(item => {
      container.appendChild(createResourceCardElement(item));
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      render();
    });
  }

  render();
}

/**
 * Reusable Resource Card Component
 */
function createResourceCardElement(item) {
  const card = document.createElement('article');
  card.className = 'card animate-fade-in';
  card.innerHTML = `
    <div class="card-media">
      <img src="${item.featuredImage}" alt="${escapeHtml(item.title)}" loading="lazy">
    </div>
    <div class="card-meta">
      <span class="badge badge-emerald">${escapeHtml(item.category)}</span>
      <span>•</span>
      <span style="font-family: var(--font-mono);">${escapeHtml(item.completionDate)}</span>
    </div>
    <h3 class="card-title">
      <a href="resource-detail.html?slug=${encodeURIComponent(item.slug)}">${escapeHtml(item.title)}</a>
    </h3>
    <p class="card-excerpt">${escapeHtml(item.shortDescription)}</p>
    <div style="margin-bottom: 1.2rem; display: flex; flex-wrap: wrap; gap: 0.4rem;">
      ${item.services.slice(0, 2).map(s => `
        <span style="font-size: 0.75rem; background: var(--color-surface-elevated); color: var(--color-text-muted); padding: 0.2rem 0.6rem; border-radius: var(--radius-sm);">✓ ${escapeHtml(s)}</span>
      `).join('')}
    </div>
    <div class="card-footer">
      <span style="font-size: 0.82rem; color: var(--color-text-dim);">For: ${escapeHtml(item.client)}</span>
      <a href="resource-detail.html?slug=${encodeURIComponent(item.slug)}" class="btn btn-secondary btn-sm">Explore Guide →</a>
    </div>
  `;
  return card;
}
