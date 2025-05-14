import { inserttoDisplay, setupOperationButtons } from "./operations.js";
import { setupNumberButtons } from "./numbers.js";

// Supondo que há um display definido no HTML com id "display"
const display = document.querySelector('#display');

// Configura os botões
setupOperationButtons(display, inserttoDisplay);
setupNumberButtons(display, inserttoDisplay);
