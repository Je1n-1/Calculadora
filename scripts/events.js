import { display, numberClear, numberPorcent, numberEqual, numberAdd, numberSub, numberMult, numberDiv, numberParentheses } from ".main.js";
import { onClickPorcent, onClickEqual, onClickOperator } from "./operators.js";
import { onClickParenthesis } from "./parentheses.js";

numberClear?.addEventListener("click", () => {
    display.textContent = "0";  // Limpa a tela quando o botão clear é pressionado
});

numberPorcent?.addEventListener("click", () => {
    onClickPorcent();  // Chama a função de porcentagem
});

numberEqual?.addEventListener("click", () => {
    onClickEqual();  // Chama a função de cálculo ao pressionar o igual
});

numberAdd?.addEventListener("click", () => {
    onClickOperator("+");  // Chama a função de operador de adição
});

numberSub?.addEventListener("click", () => {
    onClickOperator("-");  // Chama a função de operador de subtração
});

numberMult?.addEventListener("click", () => {
    onClickOperator("*");  // Chama a função de operador de multiplicação
});

numberDiv?.addEventListener("click", () => {
    onClickOperator("/");  // Chama a função de operador de divisão
});

numberParentheses?.addEventListener("click", () => {
    onClickParenthesis("");  // Chama a função de parênteses
});
