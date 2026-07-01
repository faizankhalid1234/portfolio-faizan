'use strict';

(function () {
  var yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    var y = new Date().getFullYear();
    yearEl.textContent = String(y);
    yearEl.dateTime = String(y);
  }

  function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    var themeColor = document.getElementById('theme-color-meta');
    if (themeColor) {
      themeColor.setAttribute('content', isDark ? '#060d18' : '#f0f4fb');
    }
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {}
  }

  var themeToggle = document.querySelector('[data-theme-toggle]');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(!document.documentElement.classList.contains('dark'));
    });
  }

  var themeColor = document.getElementById('theme-color-meta');
  if (themeColor) {
    themeColor.setAttribute(
      'content',
      document.documentElement.classList.contains('dark') ? '#060d18' : '#f0f4fb'
    );
  }

  if ('serviceWorker' in navigator) {
    var isLocalHost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    window.addEventListener('load', function () {
      if (isLocalHost) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          registrations.forEach(function (registration) {
            registration.unregister();
          });
        }).catch(function () {});
        if ('caches' in window) {
          caches.keys().then(function (keys) {
            keys.forEach(function (key) {
              caches.delete(key);
            });
          }).catch(function () {});
        }
        return;
      }
      navigator.serviceWorker.register('./sw.js').catch(function () {});
    });
  }
})();

const elementToggleFunc = function (elem) { elem.classList.toggle('active'); };

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

function initProjectFilters() {
  const filterItems = document.querySelectorAll('[data-filter-item]');

  const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
      if (selectedValue === 'all') {
        filterItems[i].classList.add('active');
      } else if (selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add('active');
      } else {
        filterItems[i].classList.remove('active');
      }
    }
  };

  if (filterBtn.length) {
    let lastClickedBtn = filterBtn[0];

    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].addEventListener('click', function () {
        const selectedValue = this.innerText.toLowerCase();
        if (selectValue) selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;
      });
    }
  }

  if (selectItems.length && selectValue && select) {
    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].addEventListener('click', function () {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    }
  }
}

if (select) {
  select.addEventListener('click', function () { elementToggleFunc(this); });
}

initProjectFilters();

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute('disabled');
      } else {
        formBtn.setAttribute('disabled', '');
      }
    });
  }
}

const sectionLinks = document.querySelectorAll('.section-link');
const pageSections = document.querySelectorAll('.page-section[data-section]');

function setActiveSection(sectionId) {
  sectionLinks.forEach(function (link) {
    if (link.dataset.section === sectionId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(sectionId);
  }
}

sectionLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const sectionId = link.dataset.section || (link.getAttribute('href') || '').replace('#', '');
    if (!sectionId) return;
    e.preventDefault();
    scrollToSection(sectionId);
  });
});

if (pageSections.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.dataset.section);
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  pageSections.forEach(function (section) {
    observer.observe(section);
  });
}
