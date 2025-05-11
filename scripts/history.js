import { display, currentNumberHistory,} from "../main.js";

export function addToHistory() {
    const historyItem = document.createElement("li");
    historyItem.textContent = display.textContent;
    currentNumberHistory.appendChild(historyItem);
    display.textContent = "0";
}
