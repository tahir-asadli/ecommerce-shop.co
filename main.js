document.addEventListener('DOMContentLoaded', function () {
  const closeButton = document.querySelector('.announcement button');
  const announcement = document.querySelector('.announcement');

  closeButton?.addEventListener('click', function () {
    announcement && (announcement.style.display = 'none');

    document.querySelector('body').classList.remove('has-announcement');
  });

  // Mobile menu
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  mobileMenuButton?.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('mobile-menu-open');
  });
  mobileMenuOverlay?.addEventListener('click', () => {
    document.querySelector('html').classList.remove('mobile-menu-open');
  });

  // Search menu
  const searchMenuButton = document.getElementById('search-menu-button');
  const searchMenuOverlay = document.getElementById('search-menu-overlay');

  searchMenuButton?.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('search-menu-open');
  });
  searchMenuOverlay?.addEventListener('click', () => {
    document.querySelector('html').classList.remove('search-menu-open');
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

  // Quantity component
  const quantityComponents = document.querySelectorAll('.quantity-component');
  quantityComponents?.forEach((component) => {
    const input = component.querySelector('input[type="number"]');
    const incrementButton = component.querySelector('button:nth-child(3)');
    const decrementButton = component.querySelector('button:nth-child(1)');

    incrementButton?.addEventListener('click', () => {
      input.value = parseInt(input.value) + 1;
      input.dispatchEvent(new Event('change'));
    });

    decrementButton?.addEventListener('click', () => {
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        input.dispatchEvent(new Event('change'));
      }
    });
  });

  document.querySelectorAll('.product-gallery').forEach((gallery) => {
    const mainImage = gallery.querySelector('.product-gallery-main-image');
    const thumbnails = gallery.querySelectorAll('.product-thumbnails img');

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', function () {
        const newSrc = this.getAttribute('data-large-src');
        if (newSrc) {
          mainImage.src = newSrc;
          thumbnails.forEach((thumb) => {
            thumb.parentElement.classList.remove('active');
          });
          this.parentElement.classList.add('active');
        }
      });
    });
  });

  document.querySelectorAll('.filter-accordion').forEach((accordion) => {
    const header = accordion.querySelector('h6');
    const content = header.nextElementSibling;

    header.addEventListener('click', () => {
      if (accordion.classList.contains('accordion-open')) {
        content.style.height = '0';
        accordion.classList.remove('accordion-open');
      } else {
        const contentHeight = content.scrollHeight;
        content.style.height = contentHeight + 'px';
        accordion.classList.add('accordion-open');
      }
    });
  });

  // Slider value display
  document.querySelectorAll('.slider').forEach((slider) => {
    const valueDisplay = slider.nextElementSibling;
    slider.addEventListener('input', function () {
      valueDisplay.textContent = this.value;
    });
  });

  // Tab functionality
  document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', function () {
      const tabName = this.getAttribute('data-tab');

      document.querySelectorAll('.tab-content').forEach((content) => {
        content.classList.add('hidden');
      });

      document.getElementById(tabName + '-content').classList.remove('hidden');

      document.querySelectorAll('.tab-button').forEach((btn) => {
        btn.classList.remove('text-black', 'font-semibold', 'border-b-black');
        btn.classList.add('text-gray-600', 'border-b-transparent');
      });

      this.classList.remove('text-gray-600', 'border-b-transparent');
      this.classList.add('text-black', 'font-semibold', 'border-b-black');
    });
  });
  // Partners carousel
  document.querySelector('.partners-splide') &&
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
  document.querySelector('.reviews') &&
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
