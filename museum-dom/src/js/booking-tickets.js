const booking = document.querySelector('.booking-tickets');
const closeButton = document.querySelector('.booking-tickets__close');
const button = document.querySelector('.amount__buy');
const body = document.querySelector('body');
const overlay = document.querySelector('.booking-tickets__bg');

function open() {
   booking.classList.add('open');
   overlay.style.opacity = '1';
   booking.addEventListener('click', function (e) {
     if (!e.target.closest('.container')) {
     booking.classList.remove('open');
     overlay.style.opacity = '0';
     }
   })
}
function close() {
    booking.classList.remove('open');
    overlay.style.opacity = '0';
}
button.addEventListener('click', open);
closeButton.addEventListener('click', close);

//-------------------------------------------//

const buttonCircle = document.querySelector('.book__btn')

function animation (e) {
  const x = e.clientX
  const y = e.clientY
  const buttonTop = this.getBoundingClientRect().top;
  const buttonLeft = this.getBoundingClientRect().left;
  const xInside = x - buttonLeft
  const yInside = y - buttonTop
  const circle = document.createElement('span')

  circle.classList.add('circle')
  circle.style.top = yInside + 'px'
  circle.style.left = xInside + 'px'

  this.appendChild(circle)

  setTimeout(() => circle.remove(), 500)
}

buttonCircle.addEventListener('click', animation);

