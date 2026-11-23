/**
 * CYBERSECURITY JOE — Cyber History Timeline Engine (Vanilla ES6)
 * Powers interactive timeline, milestone filters, and deep-dive incident modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  const timelineContainer = document.getElementById('history-timeline-root');
  if (!timelineContainer) return;

  if (typeof CS_HISTORY_DATA === 'undefined') {
    console.error('CS_HISTORY_DATA is missing. Ensure history-data.js is loaded first.');
    return;
  }

  const eraButtons = document.querySelectorAll('.era-btn');
  const searchInput = document.getElementById('history-search-input');

  let activeEra = 'all';
  let searchTerm = '';

  function renderTimeline() {
    timelineContainer.innerHTML = '';

    const filtered = CS_HISTORY_DATA.filter(item => {
      const matchesEra = activeEra === 'all' || item.era === activeEra;
      const matchesSearch = !searchTerm || 
        item.title.toLowerCase().includes(searchTerm) || 
        item.summary.toLowerCase().includes(searchTerm) ||
        item.year.includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm);
      return matchesEra && matchesSearch;
    });

    if (filtered.length === 0) {
      timelineContainer.innerHTML = `
        <div style="padding: 3rem; text-align: center; color: var(--color-text-dim);">
          <p style="font-size: 1.2rem;">No historical milestones match your filter.</p>
          <button class="btn btn-secondary btn-sm" id="reset-history-filter" style="margin-top: 1rem;">View All Eras</button>
        </div>
      `;
      const reset = document.getElementById('reset-history-filter');
      if (reset) {
        reset.addEventListener('click', () => {
          activeEra = 'all';
          searchTerm = '';
          if (searchInput) searchInput.value = '';
          eraButtons.forEach(b => b.classList.toggle('active', b.dataset.era === 'all'));
          renderTimeline();
        });
      }
      return;
    }

    filtered.forEach(milestone => {
      const itemEl = document.createElement('div');
      itemEl.className = 'timeline-item animate-fade-in';
      itemEl.id = milestone.year;

      itemEl.innerHTML = `
        <div class="timeline-node" aria-hidden="true"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <span class="timeline-year">${escapeHtml(milestone.year)}</span>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <span class="badge badge-amber">${escapeHtml(milestone.badge)}</span>
              <span class="badge badge-blue">${escapeHtml(milestone.category)}</span>
            </div>
          </div>
          <h3 style="font-size: 1.4rem; color: #ffffff; margin-bottom: 0.6rem;">${escapeHtml(milestone.title)}</h3>
          <p style="font-size: 1rem; line-height: 1.6; color: var(--color-text-main); margin-bottom: 0.8rem;">
            ${escapeHtml(milestone.summary)}
          </p>
          <div class="timeline-callout">
            <strong>Historical Significance & Modern Impact:</strong>
            <p style="font-size: 0.92rem; margin-bottom: 0.4rem; color: #bae6fd;">${escapeHtml(milestone.impact)}</p>
            <div style="font-size: 0.85rem; color: var(--color-text-muted); font-style: italic;">
              Key takeaway for everyday users: ${escapeHtml(milestone.takeaway)}
            </div>
          </div>
        </div>
      `;

      timelineContainer.appendChild(itemEl);
    });

    // Check if URL has a hash matching a year to smoothly scroll
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  eraButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      eraButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeEra = btn.dataset.era;
      renderTimeline();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      renderTimeline();
    });
  }

  renderTimeline();
});
