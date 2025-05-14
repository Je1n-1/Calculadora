// Importa a função inserttoDisplay do arquivo operations.js
import { inserttoDisplay } from "./operations.js";

// Importa as funções para configurar botões do arquivo numbers.js
import { setupNumberButtons, setupOperationButtons } from "./numbers.js";

// Seleciona o elemento do display no HTML pelo id "display"
const display = document.querySelector('#display');

// Configura os botões de operações, passando o display e a função de inserir no display
setupOperationButtons(display, inserttoDisplay);

// Configura os botões numéricos, passando o display e a função de inserir no display
setupNumberButtons(display, inserttoDisplay);
