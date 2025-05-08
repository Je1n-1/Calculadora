// Definição dos IDs dos botões
const buttons = {
    clear: "clear",          // Botão de limpar
    porcent: "porcent",      // Botão de porcentagem
    calculate: "calculate",  // Botão de igual (calcular)
    add: "add",              // Botão de adição
    subtract: "subtract",    // Botão de subtração
    multiply: "multiply",    // Botão de multiplicação
    divide: "divide",        // Botão de divisão
    parenthesis: "parenthesis" // Botão de parênteses
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
//variáveis para armazenar o número atual da tela no histórico e etc...
let currentNumberHistory = document.getElementById("history_list");
let currentNumber = 0, currentOperator = "", currentExpression = "", caracteres = 0;
let history = [currentNumber, currentOperator, currentExpression];  // Array para armazenar o histórico de operações
// Objeto que armazena os números, e o display da calculadora
const numbers = {};
const display = document.getElementById("display");

// Adiciona evento de clique para cada botão de número de 0 a 9
for (let i = 0; i <= 9; i++) {
    numbers[i] = document.getElementById(`number-${i}`);
    if (numbers[i]) {
        numbers[i].addEventListener("click", () => onClickNumber(i));  // Quando um número é clicado, chama a função onClickNumber
    }
}

