import { display } from "./main.js";

export function onClickNumber(number) {
    if (display.textContent === "0") {
        display.textContent = number.toString();
    } else {
        display.textContent += number;
    }
    console.log(`Número clicado: ${number}`);
}
