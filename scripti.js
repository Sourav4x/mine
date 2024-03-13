const acceptButton = document.getElementById('accept-button');
const thankYou = document.getElementById('thank-you');
const rejectButton = document.getElementById('reject-button');


function getRandomPosition() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const buttonWidth = rejectButton.offsetWidth;
  const buttonHeight = rejectButton.offsetHeight;

  const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

  return { left: `${randomX}px`, top: `${randomY}px` };
}


setInterval(() => {
  rejectButton.style.position = 'absolute';
  rejectButton.style.left = getRandomPosition().left;
  rejectButton.style.top = getRandomPosition().top;
}, 120);

acceptButton.addEventListener('click', () => {
  thankYou.style.display = 'block';
  acceptButton.style.display = 'none';
  rejectButton.style.display = 'none';
});
