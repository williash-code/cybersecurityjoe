/**
 * CYBERSECURITY JOE — Resources & Portfolio Engine (Vanilla ES6)
 * Generates the resource catalog on resources.html and deep-dive views on resource-detail.html
 * Features interactive checklists, localStorage state tracking, copyable templates, and PDF print export.
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

  const tk = item.toolkit;
  const storageKey = `cs_toolkit_${item.slug}`;
  let savedChecks = {};
  try {
    savedChecks = JSON.parse(localStorage.getItem(storageKey) || '{}');
  } catch (e) {
    savedChecks = {};
  }

  root.innerHTML = `
    <div class="resource-detail-wrap animate-fade-in">
      <header class="article-header container container-narrow">
        <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1rem; flex-wrap: wrap;">
          <span class="badge badge-emerald">${escapeHtml(item.category)}</span>
          ${tk ? `<span class="badge badge-blue">⚡ ${escapeHtml(tk.badge)}</span>` : ''}
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

        ${tk ? `
        <!-- ==================== ACTIONABLE TOOLKIT & IMPLEMENTATION WORKSPACE ==================== -->
        <section class="toolkit-workspace" id="toolkit-section">
          <div class="toolkit-header-bar">
            <div>
              <span class="badge badge-emerald" style="margin-bottom: 0.4rem;">Actionable Implementation</span>
              <h2 style="font-size: 1.8rem; color: #ffffff; margin-bottom: 0.3rem;">${escapeHtml(tk.name)}</h2>
              <div class="toolkit-badge-group">
                <span style="font-size: 0.85rem; color: var(--color-text-dim);">⏱️ Estimated: <strong style="color: #ffffff;">${escapeHtml(tk.estimatedTime)}</strong></span>
                <span>•</span>
                <span style="font-size: 0.85rem; color: var(--color-text-dim);">🎯 Difficulty: <strong style="color: var(--color-primary-light);">${escapeHtml(tk.difficulty)}</strong></span>
              </div>
            </div>
            <div class="toolkit-actions">
              <button class="btn btn-secondary btn-sm" id="btn-print-toolkit" title="Print clean PDF checklist">
                <span>🖨️ Print / Save PDF</span>
              </button>
              <button class="btn btn-secondary btn-sm" id="btn-reset-toolkit" title="Reset all checked items">
                <span>↺ Reset</span>
              </button>
            </div>
          </div>

          <!-- Progress Bar Tracker -->
          <div class="toolkit-progress-box">
            <div class="toolkit-progress-header">
              <strong style="color: #ffffff;">Implementation Checklist</strong>
              <span id="toolkit-progress-text" style="font-family: var(--font-mono); color: var(--color-accent-emerald); font-weight: 600;">0 of ${tk.checklist.length} Completed (0%)</span>
            </div>
            <div class="toolkit-progress-bar-bg">
              <div class="toolkit-progress-bar-fill" id="toolkit-progress-bar" style="width: 0%;"></div>
            </div>
          </div>

          <!-- Interactive Checklist -->
          <div class="toolkit-checklist-grid" id="toolkit-checklist-root">
            ${tk.checklist.map((c, idx) => {
              const isChecked = !!savedChecks[c.id];
              return `
                <div class="toolkit-item ${isChecked ? 'checked' : ''}" data-id="${c.id}">
                  <input type="checkbox" class="toolkit-checkbox" id="check-${c.id}" ${isChecked ? 'checked' : ''} aria-label="${escapeHtml(c.title)}">
                  <div class="toolkit-item-body">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.2rem;">
                      <span class="badge" style="font-size: 0.7rem; padding: 0.15rem 0.5rem; background: rgba(255, 255, 255, 0.06); color: var(--color-primary-light);">${escapeHtml(c.category)}</span>
                      <span style="font-size: 0.75rem; color: var(--color-text-dim); font-family: var(--font-mono);">Step ${idx + 1}</span>
                    </div>
                    <div class="toolkit-item-title">${escapeHtml(c.title)}</div>
                    <p class="toolkit-item-desc">${escapeHtml(c.description)}</p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Copyable Templates & Quick References -->
          ${tk.templates && tk.templates.length > 0 ? `
            <div style="margin-top: 2.5rem;">
              <h3 style="font-size: 1.4rem; color: #ffffff; margin-bottom: 1.2rem;">Ready-to-Use Templates & Reference Cards</h3>
              ${tk.templates.map(tmpl => `
                <div class="toolkit-template-card">
                  <div class="toolkit-template-header">
                    <div>
                      <h4 style="font-size: 1.1rem; color: #ffffff; margin-bottom: 0.2rem;">${escapeHtml(tmpl.title)}</h4>
                      <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0;">${escapeHtml(tmpl.description)}</p>
                    </div>
                    <button class="copy-btn" data-clipboard="${encodeURIComponent(tmpl.content)}">
                      <span>📋 Copy Template</span>
                    </button>
                  </div>
                  <pre class="toolkit-template-box"><code>${escapeHtml(tmpl.content)}</code></pre>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </section>
        ` : ''}

        <!-- Services & Capabilities Breakdown -->
        <div style="margin-top: 3.5rem; background: var(--color-surface-card); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); padding: 2rem;">
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
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 3.5rem; padding: 2rem; background: var(--color-surface-elevated); border-radius: var(--radius-lg); border: 1px solid var(--color-border-focus); flex-wrap: wrap; gap: 1rem;">
          <div>
            <h4 style="color: #ffffff; margin-bottom: 0.2rem;">Want personalized guidance?</h4>
            <p style="margin-bottom: 0; font-size: 0.9rem; color: var(--color-text-muted);">Reach out to discuss customized implementation or mentorship.</p>
          </div>
          <div style="display: flex; gap: 0.8rem;">
            <a href="resources.html" class="btn btn-secondary btn-sm">All Toolkits</a>
            <a href="contact.html" class="btn btn-primary btn-sm">Consult Shane →</a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach Toolkit Interactions
  if (tk) {
    setupToolkitInteractivity(storageKey, tk.checklist.length);
  }
}

/**
 * Setup Toolkit Checklists, Progress Tracker, Clipboard & Print
 */
function setupToolkitInteractivity(storageKey, totalItems) {
  const checklistRoot = document.getElementById('toolkit-checklist-root');
  const progressBar = document.getElementById('toolkit-progress-bar');
  const progressText = document.getElementById('toolkit-progress-text');
  const resetBtn = document.getElementById('btn-reset-toolkit');
  const printBtn = document.getElementById('btn-print-toolkit');

  let state = {};
  try {
    state = JSON.parse(localStorage.getItem(storageKey) || '{}');
  } catch (e) {
    state = {};
  }

  function updateProgress() {
    const checkedCount = Object.values(state).filter(Boolean).length;
    const percentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;
    
    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (progressText) {
      progressText.textContent = `${checkedCount} of ${totalItems} Completed (${percentage}%)`;
    }
  }

  updateProgress();

  // Click & Toggle Handlers
  if (checklistRoot) {
    checklistRoot.addEventListener('click', (e) => {
      const itemEl = e.target.closest('.toolkit-item');
      if (!itemEl) return;

      const checkbox = itemEl.querySelector('.toolkit-checkbox');
      const id = itemEl.dataset.id;

      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }

      state[id] = checkbox.checked;
      itemEl.classList.toggle('checked', checkbox.checked);

      try {
        localStorage.setItem(storageKey, JSON.stringify(state));
      } catch (err) {}

      updateProgress();
    });
  }

  // Reset Handler
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Reset your progress on this toolkit?')) {
        state = {};
        try {
          localStorage.removeItem(storageKey);
        } catch (err) {}

        const items = document.querySelectorAll('.toolkit-item');
        items.forEach(el => {
          el.classList.remove('checked');
          const cb = el.querySelector('.toolkit-checkbox');
          if (cb) cb.checked = false;
        });

        updateProgress();
      }
    });
  }

  // Print / PDF Export
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Copy Buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const rawText = decodeURIComponent(btn.dataset.clipboard || '');
      try {
        await navigator.clipboard.writeText(rawText);
        btn.classList.add('copied');
        btn.innerHTML = '<span>✓ Copied!</span>';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = '<span>📋 Copy Template</span>';
        }, 2200);
      } catch (err) {
        // Fallback for non-secure context
        const ta = document.createElement('textarea');
        ta.value = rawText;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.classList.add('copied');
        btn.innerHTML = '<span>✓ Copied!</span>';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = '<span>📋 Copy Template</span>';
        }, 2200);
      }
    });
  });
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
 * Reusable Resource Card Component (for resources.html)
 */
function createResourceCardElement(item) {
  const card = document.createElement('article');
  card.className = 'card animate-fade-in';
  const tk = item.toolkit;
  
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
    
    ${tk ? `
      <div style="margin-bottom: 0.8rem;">
        <span class="badge badge-blue" style="font-size: 0.72rem;">⚡ Interactive Checklist (${tk.checklist.length} Steps)</span>
      </div>
    ` : ''}

    <div style="margin-bottom: 1.2rem; display: flex; flex-wrap: wrap; gap: 0.4rem;">
      ${item.services.slice(0, 2).map(s => `
        <span style="font-size: 0.75rem; background: var(--color-surface-elevated); color: var(--color-text-muted); padding: 0.2rem 0.6rem; border-radius: var(--radius-sm);">✓ ${escapeHtml(s)}</span>
      `).join('')}
    </div>
    <div class="card-footer">
      <span style="font-size: 0.82rem; color: var(--color-text-dim);">For: ${escapeHtml(item.client)}</span>
      <a href="resource-detail.html?slug=${encodeURIComponent(item.slug)}" class="btn btn-primary btn-sm">Open Toolkit & Guide →</a>
    </div>
  `;
  return card;
}
