//let reset = document.querySelector('#reset');
let number = document.getElementsByClassName('number');
let operation = document.getElementsByClassName('operation');
document.querySelector('.calc').addEventListener('click', calc);
document.querySelector('.reset').addEventListener('click', reset);
let display = document.querySelector('#display');

for (let i = 0; i < number.length; i++) {
  number[i].onclick = addNum;
}
for(let j=0;j<operation.length;j++){
    operation[j].onclick=addOper;
}

function addNum() {
  display.value += this.value;
}
function addOper(){
    display.value+=this.value;
}

function calc() {
  
  display.value = eval(display.value);
}

function reset() {
  display.value = '';
}