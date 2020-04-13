// Show header
const header = document.querySelector('header');
document.addEventListener('scroll', function (e) {
  if (window.scrollY >= 800) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});
