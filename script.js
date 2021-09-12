
function display(val) {
    document.getElementById("textval").value+=val;
}

function evaluate() {
    let x = document.getElementById("textval").value;
    document.getElementById("textval").value = eval(x);
}

function clr() {
    document.getElementById("textval").value = "";
}