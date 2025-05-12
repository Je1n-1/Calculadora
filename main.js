// Definição dos IDs dos botões
const buttons = {
    clear: "clear",
    porcent: "porcent",
    calculate: "calculate",
    add: "add",
    subtract: "subtract",
    multiply: "multiply",
    divide: "divide",
    parenthesis: "parenthesis"
};

const {
    clear: numberClear,
    porcent: numberPorcent,
    calculate: numberEqual,
    add: numberAdd,
    subtract: numberSub,
    multiply: numberMult,
    divide: numberDiv,
    parenthesis: numberParentheses
} = Object.fromEntries(
    Object.entries(buttons).map(([key, id]) => [key, document.getElementById(id)])
);

const numbers = {};
const display = document.getElementById("display");
let currentNumberHistory = document.getElementById("history_list");


for (let i = 0; i <= 9; i++) {
    numbers[i] = document.getElementById(`number-${i}`);
    if (numbers[i]) {
        numbers[i].addEventListener("click", () => onClickNumber(i));
    }
}

// Exporte os elementos que os outros módulos precisarão
export {
    display,
    numberClear, numberPorcent, numberEqual,
    numberAdd, numberSub, numberMult, numberDiv, numberParentheses,
    currentNumberHistory,
    caracteres
};
