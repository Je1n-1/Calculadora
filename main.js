import {
  display,
  numberClear, numberPorcent, numberEqual,
  numberAdd, numberSub, numberMult, numberDiv, numberParentheses,
  currentNumberHistory,
  numbers
} from "./scripts/elements.js";

import { onClickNumber } from "./scripts/numbers.js";
import { onClickPorcent, onClickEqual, onClickOperator } from "./scripts/operators.js";
import { onClickParenthesis } from "./scripts/parentheses.js";

// Aguarda o carregamento da página
if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
        console.log("Página carregada com sucesso.");
    });
} else {
    console.error("Não foi possível carregar a página.");
}

// Eventos para botões de número
for (let i = 0; i <= 9; i++) {
    if (numbers[i]) {
        numbers[i].addEventListener("click", () => onClickNumber(i));
        console.log(`Número ${i} adicionado ao evento de clique`);
    }
}

// Eventos para operadores
numberClear?.addEventListener("click", () => {
    display.textContent = "0";
});

numberPorcent?.addEventListener("click", () => {
    onClickPorcent();
});

numberEqual?.addEventListener("click", () => {
    onClickEqual();
});

numberAdd?.addEventListener("click", () => {
    onClickOperator("+");
});

numberSub?.addEventListener("click", () => {
    onClickOperator("-");
});

numberMult?.addEventListener("click", () => {
    onClickOperator("*");
});

numberDiv?.addEventListener("click", () => {
    onClickOperator("/");
});

numberParentheses?.addEventListener("click", () => {
    onClickParenthesis("");
});
