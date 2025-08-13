// Hamburger menu toggle
const hamburger = document.getElementById('hamburger-icon');
const slideMenu = document.getElementById('slide-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  slideMenu.style.right = slideMenu.style.right === '0px' ? '-250px' : '0px';
});
window.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !slideMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    slideMenu.style.right = '-250px';
  }
});

// Mode Gelap/Terang
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Inisialisasi Lightbox
const lightbox = new SimpleLightbox('.gallery-item', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.9,
  closeText: '×',
  navText: ['←', '→'],
});
