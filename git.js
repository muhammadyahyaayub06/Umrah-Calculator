let counter = 0;

function updateCounter() {
  document.getElementById("counter").textContent = counter;
}

function increaseCounter() {
  counter++;
  updateCounter();
}

function decreaseCounter() {
  counter--;
  updateCounter();
}

function resetCounter() {
  counter = 0;
  updateCounter();
}
