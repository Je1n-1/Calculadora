import { display, numberParentheses } from "../main.js";

export function onClickParenthesis() {
    const caracteres = numberParentheses.textContent;
    const text = display.textContent;
    const open = text.split("(").length - 1;
    const close = text.split(")").length - 1;
    const lastChar = text.slice(-1);

    if (open > close && !"*/+-(".includes(lastChar)) {
        display.textContent += ")";
    } else if ("*/+-(".includes(lastChar) || text === "0") {
        display.textContent += "(";
    } else {
        console.log("Parênteses não inseridos por segurança.");
    }
}
