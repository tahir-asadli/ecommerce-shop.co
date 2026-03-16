document.addEventListener('DOMContentLoaded', function () {
  const closeButton = document.querySelector('.announcement button');
  const announcement = document.querySelector('.announcement');

  closeButton?.addEventListener('click', function () {
    announcement && (announcement.style.display = 'none');
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
});
