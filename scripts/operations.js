import { numbers } from "./numbers.js";

function inserttoDisplay(data, display) {
  if (data === 'C') {
    display.textContent = '';
    currentNumber = '';
    numbers.length = 0;
  } 
}

export { inserttoDisplay };
