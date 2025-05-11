import { display, numberClear, numberPorcent, numberEqual, numberAdd, numberSub, numberMult, numberDiv, numberParentheses } from "./main.js";

import { onClickPorcent, onClickEqual, onClickOperator } from "./operators.js";
import { onClickParenthesis } from "./parentheses.js";

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
    onClickParenthesis();
});
