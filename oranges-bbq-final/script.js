const leftDoor = document.querySelector('.door-left');
const rightDoor = document.querySelector('.door-right');

const openPoint = 420;

function updateDoor() {
  const scrollY = window.scrollY;
  const openValue = Math.min((scrollY / openPoint) * 100, 100);

  if (leftDoor && rightDoor) {
    leftDoor.style.transform = `translateX(-${openValue}%)`;
    rightDoor.style.transform = `translateX(${openValue}%)`;
  }

  if (scrollY >= openPoint - 2) {
    document.body.classList.add('entered');
  } else {
    document.body.classList.remove('entered');
  }
}

window.addEventListener('scroll', updateDoor, { passive: true });
window.addEventListener('load', () => {
  updateDoor();
  setTimeout(updateDoor, 80);
});
