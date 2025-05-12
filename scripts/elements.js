// IDs dos botões
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

// Mapeamento dos botões de operações
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

// Display e histórico
const display = document.getElementById("display");
const currentNumberHistory = document.getElementById("history_list");

// Botões numéricos
const numbers = {};
for (let i = 0; i <= 9; i++) {
    numbers[i] = document.getElementById(`number-${i}`);
}

export {
    display,
    numberClear, numberPorcent, numberEqual,
    numberAdd, numberSub, numberMult, numberDiv, numberParentheses,
    currentNumberHistory,
    numbers
};
