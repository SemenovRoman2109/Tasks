// Переменная которая хранит в себе значение полного текста
const startText = document.querySelector("p").textContent;
// Объект еще не написаного текста 
const textObj = document.querySelector("p");
// Объект правельно написаного текста
const greenTextObj = document.querySelector(".green");
// Объект неправельно написаного текста
const redTextObj = document.querySelector(".red");

// Добавляем событие нажатия на кнопку
document.addEventListener("keydown",(event) => {

    // Проверяем что нажатая буква таже самая что и нужная нам нужную нам букву доостаем из обекта полного текста по нужному индексу
    if (event.key == startText[(greenTextObj.innerHTML).length]){
        // Проверяем что нет неправельеых символов чтоб можно было дальше писать
        if (redTextObj.innerHTML == "") {
            // Добавляем нужную букву в значение правельно написаного текста
            greenTextObj.innerHTML = startText.slice(0,((greenTextObj.innerHTML).length + 1));
            // Удаляем нужную букву из еще не написаного текста
            textObj.innerHTML = startText.slice((greenTextObj.innerHTML).length);
            // По скольку мы в нашем обекте текста оставили только сам текст без правельного и непрвавельного текста добавляем их вновь
            textObj.prepend(greenTextObj,redTextObj)
        }
            
        }
    // Проверяю чтоб неправельный символ небыл пробелом и остальными недопустимыми символами
    else if(!["Shift","Control","Backspace"," ","Alt"].includes(event.key)){
        // Проверка что сивол вместо которого пользователь ввел не првельный символ не являеться пробелом это нужно потомучто пробел не может подчеркнуться красным и ето  заводит пользователь в заблуждение он не понимает он нажал пробел млм вместо етого нажал другой символ
        if (startText[(greenTextObj.innerHTML).length ] != " ") {
            // к прошлому значению крастного текста добавляем нужную букву от нашего полного текста индекс в каторой считаеться сумой длины крастного и зеленого текста
            redTextObj.innerHTML += startText[(greenTextObj.innerHTML).length+(redTextObj.innerHTML).length];
            // Из полного текста достоем часть которая будет после окончания красного и зеленого текста
            textObj.innerHTML = startText.slice((greenTextObj.innerHTML).length+(redTextObj.innerHTML).length);
            // По скольку мы в нашем обекте текста оставили только сам текст без правельного и непрвавельного текста добавляем их вновь
            textObj.prepend(greenTextObj,redTextObj) 
            }
        
        }
    
    
    // Если есть неправельнно введенный сивол
    if (redTextObj.innerHTML != ""){
        // И нажата кнопка стереть
        if (event.key == "Backspace"){
            // Убираем последний символ крастного текста
            redTextObj.innerHTML = redTextObj.innerHTML.slice(0,(redTextObj.innerHTML).length-1)
            // Из полного текста достоем часть которая будет после окончания красного и зеленого текста
            textObj.innerHTML = startText.slice((greenTextObj.innerHTML).length+(redTextObj.innerHTML).length);
            // По скольку мы в нашем обекте текста оставили только сам текст без правельного и непрвавельного текста добавляем их вновь
            textObj.prepend(greenTextObj,redTextObj) 

        }
    }
})