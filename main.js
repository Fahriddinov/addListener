let body = document.querySelector('body');
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.display = 'flex';
body.style.gap = '50px';
body.style.marginTop = '300px';

counterElement.style.fontSize = '70px';
counterElement.style.color = 'blue';

incrementButton.style.width = '100px';
incrementButton.style.height = '60px';
incrementButton.style.background = 'green';
incrementButton.style.color = 'white';
incrementButton.style.fontSize = '40px';
incrementButton.style.borderRadius = '10px';

decrementButton.style.width = '100px';
decrementButton.style.height = '60px';
decrementButton.style.background = 'red';
decrementButton.style.color = 'white';
decrementButton.style.fontSize = '40px';
decrementButton.style.borderRadius = '10px';

resetButton.style.width = '100px';
resetButton.style.height = '60px';
resetButton.style.background = 'yellow';
resetButton.style.fontSize = '25px';
resetButton.style.borderRadius = '10px';
resetButton.style.position = 'absolute';
resetButton.style.top = '450px';


let count = 0;

function updateCounter() {
  counterElement.textContent = count;
}

incrementButton.addEventListener('click', () => {
  count++;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetButton.addEventListener('click', () => {
  count = 0;
  updateCounter();
});



updateCounter();