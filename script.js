const moreButton = document.querySelector('.seeMore');
const hiddenPort = document.querySelector('.hiddenPort');

moreButton.addEventListener('click', () => {
  hiddenPort.style.display = 'block';
});
