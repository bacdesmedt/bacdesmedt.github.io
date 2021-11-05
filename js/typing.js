const texts = ["durver", "doener", "danser", "developer", "desmedt"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let timeOut = 0;

(function type(){

    if(count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    timeOut = 1500 / currentText.length;

    document.getElementById("type-target").textContent = letter;

    if(letter.length === currentText.length) {
        count++;
        index = 0;
        if(count === 4) {
            timeOut = 2500;
        } else if ( count >4) {
            timeOut = 6500;
        }
    }

    setTimeout(type, timeOut);
})();