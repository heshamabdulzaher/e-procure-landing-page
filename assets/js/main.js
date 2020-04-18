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

const comaringCardsContainer = document.querySelector('.comparing-cards');
const amazonCard = document.querySelector('.comparing-cards .card.amazon');
const alibabaCard = document.querySelector('.comparing-cards .card.alibaba');
const nextBtn = document.querySelector('.comparing-cards .next');
const prevBtn = document.querySelector('.comparing-cards .prev');
prevBtn.addEventListener('click', handleShowingComparingCards);
nextBtn.addEventListener('click', handleShowingComparingCards);
function collapseAmazonCard() {
  if (window.innerWidth <= 1000 && window.innerWidth > 680) {
    amazonCard.classList.add('collapse');
    nextBtn.classList.add('show');
  } else if (window.innerWidth <= 680) {
    alibabaCard.classList.add('collapse');
    amazonCard.classList.add('collapse');
    prevBtn.classList.add('show');
    nextBtn.classList.add('show');
  }
}

function handleShowingComparingCards(e) {
  if (window.innerWidth <= 1000 && window.innerWidth > 680) {
    amazonCard.classList.toggle('collapse');
    alibabaCard.classList.toggle('collapse');
    prevBtn.classList.toggle('show');
    nextBtn.classList.toggle('show');
  } else if (window.innerWidth <= 680) {
    let currentActiveCard = document.querySelector(
      '.comparing-cards .card:not(.collapse)'
    );
    let currentIndex = parseInt(currentActiveCard.dataset.cardIndex);
    let nextIndex, nextCard;
    let arrow = e.target.closest('.arrow');
    if (arrow.classList.contains('next')) {
      nextIndex = currentIndex + 1;
      if (nextIndex === 3) {
        prevBtn.classList.add('show');
        nextBtn.classList.remove('show');
      } else {
        prevBtn.classList.add('show');
        nextBtn.classList.add('show');
      }
      if (currentIndex === 3) {
        nextBtn.classList.remove('show');
        nextIndex = 3;
      }
    } else {
      nextIndex = currentIndex - 1;
      if (nextIndex === 1) {
        nextBtn.classList.add('show');
        prevBtn.classList.remove('show');
      } else {
        prevBtn.classList.add('show');
        nextBtn.classList.add('show');
      }
      if (currentIndex === 1) {
        prevBtn.classList.remove('show');
        nextIndex = 1;
      }
    }
    nextCard = comaringCardsContainer.querySelector(
      `.card[data-card-index="${nextIndex}"]`
    );
    currentActiveCard.classList.add('collapse');
    nextCard.classList.remove('collapse');
  }
}
