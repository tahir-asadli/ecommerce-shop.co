document.addEventListener('DOMContentLoaded', function () {
  const closeButton = document.querySelector('.announcement button');
  const announcement = document.querySelector('.announcement');

  closeButton?.addEventListener('click', function () {
    announcement && (announcement.style.display = 'none');

    document.querySelector('body').classList.remove('has-announcement');
  });

  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  mobileMenuButton?.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('mobile-menu-open');
  });
  mobileMenuOverlay?.addEventListener('click', () => {
    document.querySelector('html').classList.remove('mobile-menu-open');
  });

  const headerLinks = document.querySelectorAll('.header-link');

  headerLinks.forEach((link) => {
    link.addEventListener('mouseenter', function () {
      const content = this.querySelector('.header-link-content');
      if (content) {
        // Update inner scroll height
        const contentHeight = content.scrollHeight;
        content.style.height = contentHeight + 'px';
        content.classList.add('header-content-visible');
      }
    });

    link.addEventListener('mouseleave', function () {
      const content = this.querySelector('.header-link-content');
      if (content) {
        content.classList.remove('header-content-visible');
        content.style.height = '0';
      }
    });
  });

  // Search component
  const searchComponents = document.querySelectorAll('.search-component');
  searchComponents?.forEach((searchComponent) => {
    if (searchComponent.querySelector('input')?.value.trim() !== '') {
      searchComponent.classList.add('search-active');
    } else {
      searchComponent.classList.remove('search-active');
    }
    searchComponent.querySelector('input')?.addEventListener('keyup', function () {
      if (this.value.trim() !== '') {
        searchComponent.classList.add('search-active');
      } else {
        searchComponent.classList.remove('search-active');
      }
    });
    searchComponent.querySelector('button.clear')?.addEventListener('click', function () {
      searchComponent.querySelector('input').value = '';
      searchComponent.classList.remove('search-active');
    });
  });

  // Partners carousel
  new Splide('.partners-splide', {
    type: 'loop',
    perPage: 5,
    perMove: 1,
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 5000,
    breakpoints: {
      1600: {
        perPage: 5,
      },
      1400: {
        perPage: 4,
      },
      1200: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    },
  }).mount();

  // Reviews carousel
  new Splide('.reviews', {
    type: 'loop',
    perPage: 5,
    perMove: 1,
    pagination: false,
    arrows: true,
    autoplay: true,
    gap: 20,
    interval: 5000,
    breakpoints: {
      1600: {
        perPage: 5,
      },
      1400: {
        perPage: 4,
      },
      1200: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    },
  }).mount();
});
