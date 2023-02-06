const button = document.querySelector(".button-readmore");
const textElem = document.querySelector(".text-content");
const fullText = textElem.innerHTML;
let smallerText = fullText.slice(0,20);
smallerText += "  ...";

button.onclick = function(event) {
    if (textElem.innerHTML == smallerText) {
        textElem.innerHTML = fullText;
        button.innerHTML = " Read Less";
    }
    else {
        textElem.innerHTML = smallerText;
        button.innerHTML = " Read More";
    }
}