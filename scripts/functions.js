

function onClickNumber(number) {
    if (display.textContent === "0") {
        display.textContent = number.toString();  // Se a tela mostrar "0", substitui pelo número clicado
        
    } else {
        display.textContent += number;  // Caso contrário, adiciona o número à expressão
    }
    console.log(`Número clicado: ${number}`);
}

// Função chamada ao clicar no botão de porcentagem
function onClickPorcent() {
    console.log("Botão de porcentagem clicado");
    if (display.textContent !== "0") {
        const number = parseFloat(display.textContent);  // Converte o texto atual da tela para número
        display.textContent = (number / 100).toString();  // Converte a tela para mostrar a porcentagem (divide por 100)
    }
}

// Função chamada ao clicar no botão de igual
function onClickEqual() {
    console.log("Botão de igual clicado");
    try {
        display.textContent = eval(display.textContent);  // Avalia a expressão na tela (como se fosse uma expressão matemática)
        addToHistory();  // Adiciona a expressão ao histórico
    } catch (error) {
        display.textContent = "Erro";  // Se ocorrer um erro ao avaliar, exibe "Erro"
        console.error("Erro ao calcular:", error);
    }
}

// Função chamada ao clicar nos operadores (+, -, *, /)
function onClickOperator(operator) {
    console.log(`Operador clicado: ${operator}`);
    currentOperator = operator;  // Armazena o operador atual
    const lastChar = display.textContent.slice(-1);  // Pega o último caractere da expressão

    // Impede a inserção de dois operadores consecutivos
    if ("+-*/".includes(lastChar)) {
        display.textContent = display.textContent.slice(0, -1) + operator;  // Substitui o operador anterior
    } else {
        display.textContent += operator;  // Caso contrário, adiciona o operador à expressão
    }
}

// Função chamada ao clicar no botão de parênteses
function onClickParenthesis() {
    caracteres = numberParentheses.textContent;  // Conta quantos caracteres existem no botão de parênteses
    const text = display.textContent;
    const open = text.split("(").length - 1;  // Conta quantos parênteses de abertura existem
    const close = text.split(")").length - 1;  // Conta quantos parênteses de fechamento existem
    const lastChar = text.slice(-1);  // Pega o último caractere da expressão

    // Se houver mais parênteses de abertura do que de fechamento, adiciona um parêntese de fechamento
    if (open > close && !"*/+-(".includes(lastChar)) {
        display.textContent += ")";
    } else if ("*/+-(".includes(lastChar) || text === "0") {
        display.textContent += "(";  // Se for adequado, adiciona um parêntese de abertura
    } else {
        console.log("Parênteses não inseridos por segurança.");  // Se não for adequado, não faz nada
    }
}

function addToHistory() {
    const historyItem = document.createElement("li");
    historyItem.textContent = display.textContent;
    currentNumberHistory.appendChild(historyItem);  // Adiciona o item ao histórico
    display.textContent = "0";  // Limpa a tela após adicionar ao histórico
}