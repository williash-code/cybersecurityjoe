/**
 * CYBERSECURITY JOE — Master UI Controller (Vanilla ES6)
 * Handles navigation, mobile menu, search modal, scroll observers, and global events.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initUniversalSearch();
  initNewsletterForm();
  highlightActiveNavLink();
});

/**
 * 1. Sticky Header & Scroll Effect
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  const toggle = () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', toggle);

  // Close when clicking nav links
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggle();
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggle();
    }
  });
}

/**
 * 3. Universal Search Engine (Ctrl/Cmd + K)
 */
function initUniversalSearch() {
  const modal = document.getElementById('search-modal');
  const triggers = document.querySelectorAll('.search-trigger');
  const closeBtn = document.querySelector('.modal-close');
  const searchInput = document.getElementById('modal-search-input');
  const resultsContainer = document.getElementById('modal-search-results');

  if (!modal || !searchInput || !resultsContainer) return;

  const openModal = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 50);
    renderResults(searchInput.value.trim());
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  triggers.forEach(t => t.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      modal.classList.contains('open') ? closeModal() : openModal();
    }
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Perform search across data stores
  searchInput.addEventListener('input', (e) => {
    renderResults(e.target.value.trim().toLowerCase());
  });

  function renderResults(query) {
    resultsContainer.innerHTML = '';

    if (!query) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--color-text-dim);">
          <p>Type to instantly search across articles, cyber history milestones, and safety toolkits...</p>
        </div>
      `;
      return;
    }

    const matches = [];

    // Search Blog Articles
    if (typeof CS_BLOG_DATA !== 'undefined') {
      CS_BLOG_DATA.forEach(item => {
        if (item.title.toLowerCase().includes(query) || item.excerpt.toLowerCase().includes(query) || (item.tags && item.tags.some(t => t.toLowerCase().includes(query)))) {
          matches.push({
            title: item.title,
            type: 'Article',
            badgeClass: 'badge-blue',
            url: `article.html?slug=${encodeURIComponent(item.slug)}`,
            sub: item.publishDate
          });
        }
      });
    }

    // Search Resources / Portfolio
    if (typeof CS_RESOURCES_DATA !== 'undefined') {
      CS_RESOURCES_DATA.forEach(item => {
        if (item.title.toLowerCase().includes(query) || item.shortDescription.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)) {
          matches.push({
            title: item.title,
            type: 'Resource',
            badgeClass: 'badge-emerald',
            url: `resource-detail.html?slug=${encodeURIComponent(item.slug)}`,
            sub: item.category
          });
        }
      });
    }

    // Search Cyber History Milestones
    if (typeof CS_HISTORY_DATA !== 'undefined') {
      CS_HISTORY_DATA.forEach(item => {
        if (item.title.toLowerCase().includes(query) || item.summary.toLowerCase().includes(query) || item.year.includes(query)) {
          matches.push({
            title: `${item.year}: ${item.title}`,
            type: 'History',
            badgeClass: 'badge-amber',
            url: `history.html#${item.year}`,
            sub: item.category
          });
        }
      });
    }

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--color-text-dim);">
          <p>No results found for "<strong>${escapeHtml(query)}</strong>".</p>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Try searching for <em>"AI"</em>, <em>"passwords"</em>, <em>"Morris Worm"</em>, or <em>"Wi-Fi"</em>.</p>
        </div>
      `;
      return;
    }

    matches.slice(0, 8).forEach(match => {
      const el = document.createElement('a');
      el.className = 'modal-result-item';
      el.href = match.url;
      el.innerHTML = `
        <div>
          <h4 style="font-size: 0.95rem; margin-bottom: 0.2rem; color: #ffffff;">${escapeHtml(match.title)}</h4>
          <span style="font-size: 0.8rem; color: var(--color-text-dim);">${escapeHtml(match.sub)}</span>
        </div>
        <span class="badge ${match.badgeClass}">${match.type}</span>
      `;
      resultsContainer.appendChild(el);
    });
  }
}

/**
 * 4. Newsletter Subscription Form Handler
 */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn = form.querySelector('button');
      if (!input || !btn) return;

      const email = input.value.trim();
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      const origText = btn.innerHTML;
      btn.innerHTML = `<span class="spinner"></span> Joining...`;
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = `✓ Subscribed!`;
        btn.style.background = '#10b981';
        btn.style.color = '#ffffff';
        input.value = '';
        setTimeout(() => {
          btn.innerHTML = origText;
          btn.style.background = '';
          btn.style.color = '';
          btn.disabled = false;
        }, 3500);
      }, 700);
    });
  });
}

/**
 * 5. Highlight Active Navigation Link
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = link.getAttribute('href').split('#')[0];
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * Helper Functions
 */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}
