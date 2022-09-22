import { diffDates, diffToHtml } from "./datecalc.js"; //импортируем 2 функции из файла datecalc.js
import { formatError } from "./utils.js"; //импортируем функцию из файла utils.js
import { timer } from "./timer.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");


dateCalcForm.addEventListener("submit", handleCalcDates);


function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();


    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;


    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); //вычитаем промежуток между датами
        dateCalcResult.innerHTML = diffToHtml(diff); //форматируем промежуток, как html и вставляем в DOM
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); //если поля не заполнены, выводим ошибку
}
