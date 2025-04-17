// Captura os botões por seus IDs
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

// Mapeia os botões para variáveis
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


// Objeto para armazenar as referências aos botões numéricos (0 a 9)
const numbers = {};

// Pega o elemento do display onde os números e operações serão exibidos
const display = document.getElementById("display");

// Loop para capturar os botões de 0 a 9 e adicionar o evento de clique em cada um
for (let i = 0; i <= 9; i++) {
    numbers[i] = document.getElementById(`number-${i}`);
    
    // Se o botão existir, adiciona um ouvinte de clique que chama a função onClickNumber
    if (numbers[i]) {
        numbers[i].addEventListener("click", () => onClickNumber(i));
    }
}

// Se o botão de limpar existir, adiciona o evento para limpar o display
numberClear.addEventListener("click", () => {
    display.textContent = "0"; // Limpa o display e volta para zero
});

// Se o botão de porcentagem existir, adiciona o evento para chamar a função onClickPorcent
numberPorcent.addEventListener("click", () => {
    onClickPorcent(numbers); // Chama a função de porcentagem
});

// Função que trata o clique nos botões numéricos
function onClickNumber(number) {
    // Se o display estiver com valor "0", substitui pelo número clicado
    if (display.textContent === "0") {
        display.textContent = number.toString();
    } else {
        // Caso contrário, adiciona o número ao final do texto atual
        display.textContent += number;
    }
    console.log(`Número clicado: ${number}`); // Log para depuração
}

// Função de exemplo para o botão de porcentagem (ainda não implementado)
function onClickPorcent() {
    console.log("Botão de porcentagem clicado");
    if (display.textContent !== "0") {
        const number =(display.textContent);
        display.textContent = (number / 100).toString(); // Calcula a porcentagem
    }
}


// Função de exemplo para o botão de calcular (ainda não implementado)
function onClickEqual() {
    console.log("Botão de igual clicado");
}


//adiciona o evento de clique para o botão de divisão


