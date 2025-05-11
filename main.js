import "./scripts/numbers.js";
import "./scripts/events.js";
import "./scripts/operators.js";
import "./scripts/parentheses.js";
import "./scripts/history.js";

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

// Desestruturação para mapear cada botão ao seu respectivo elemento HTML
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

// Variáveis para armazenar o número atual da tela no histórico e etc...

// Objeto que armazena o histórico
let currentNumberHistory = document.getElementById("history_list");
let currentNumber = 0, currentOperator = "", currentExpression = "", caracteres = 0;
// Removed unused 'history' variable to resolve the error

// Objeto que armazena os números e o display da calculadora
const numbers = {};
const display = document.getElementById("display");

// Adiciona evento de clique para cada botão de número de 0 a 9
for (let i = 0; i <= 9; i++) {
    numbers[i] = document.getElementById(`number-${i}`);
    if (numbers[i]) {
        numbers[i].addEventListener("click", () => onClickNumber(i));  // Quando um número é clicado, chama a função onClickNumber
    } else {
        console.error(`Element with ID 'number-${i}' not found.`);
    }
}

export {
    display,
    numberClear, numberPorcent, numberEqual,
    numberAdd, numberSub, numberMult, numberDiv, numberParentheses,
    currentNumberHistory,
    caracteres
};
