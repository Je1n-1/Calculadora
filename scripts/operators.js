import { display } from "../main.js";
import { addToHistory } from "./history.js";

export function onClickPorcent() {
    console.log("Botão de porcentagem clicado");
    if (display.textContent !== "0") {
        const number = parseFloat(display.textContent);
        display.textContent = (number / 100).toString();
    }
}

export function onClickEqual() {
    console.log("Botão de igual clicado");
    try {
        display.textContent = eval(display.textContent);
        addToHistory();
    } catch (error) {
        display.textContent = "Erro";
        console.error("Erro ao calcular:", error);
    }
}

export function onClickOperator(operator) {
    console.log(`Operador clicado: ${operator}`);
    const lastChar = display.textContent.slice(-1);
    if ("+-*/".includes(lastChar)) {
        display.textContent = display.textContent.slice(0, -1) + operator;
    } else {
        display.textContent += operator;
    }
}
