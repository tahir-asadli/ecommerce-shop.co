document.addEventListener('DOMContentLoaded', function () {
  const closeButton = document.querySelector('.announcement button');
  const announcement = document.querySelector('.announcement');

  closeButton?.addEventListener('click', function () {
    announcement && (announcement.style.display = 'none');
  });
});
