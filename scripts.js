const flipCards = document.querySelectorAll('.flip-card-inner');
let index = 0;

setInterval(() => {
  flipCards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('flip-card-animate');
    } else {
      card.classList.remove('flip-card-animate');
    }
  });
  index = (index + 1) % flipCards.length;
}, 3000);
