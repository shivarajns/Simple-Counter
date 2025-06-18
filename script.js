let count = 0;

function increase() {
    count = count + 1;
    document.getElementById("DisplayNum").innerHTML = count;
}
function clearDisplay() {
    count = 0;
    document.getElementById("DisplayNum").innerHTML = count;
}
function decrease() {
    count = count - 1;
    document.getElementById("DisplayNum").innerHTML = count;
}