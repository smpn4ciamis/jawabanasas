
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const days = document.querySelectorAll('.day');

  days.forEach(day => {
    day.addEventListener('mouseenter', () => {
      day.style.transform = 'scale(1.05)';
      day.style.transition = 'transform 0.3s';
      day.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
    });

    day.addEventListener('mouseleave', () => {
      day.style.transform = 'scale(1)';
      day.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
});

// Fungsi untuk membuka Google Form
function openForm(link) {
  window.open(link, '_blank');
}
