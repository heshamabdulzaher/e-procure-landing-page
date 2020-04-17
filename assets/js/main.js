// Show header
const header = document.querySelector('header');
document.addEventListener('scroll', function (e) {
  if (window.scrollY >= 800) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});

// Look at the competition
window.onload = function () {
  collapseAmazonCard();
};
window.onresize = function () {
  collapseAmazonCard();
};

const amazonCard = document.querySelector('.comparing-cards .card.amazon');
function collapseAmazonCard() {
  if (window.innerWidth <= 1000) {
    amazonCard.classList.add('collapse');
  }
}
