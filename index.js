let display = document.getElementById("display");
let result;
function appdisplay(input){
    display.value += input;
}

function reset(){
    display.value = "";
}

function cac(){
    display.value = eval(display.value);
}