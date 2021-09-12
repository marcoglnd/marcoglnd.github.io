const screen = document.querySelector('#screen');
screen.innerText = '0';

const one = document.querySelector('#one')
one.onclick = function () {
  screen.innerText += '1';
}

const two = document.querySelector('#two')
two.onclick = function () {
  screen.innerText += '2';
}
const three = document.querySelector('#three')
three.onclick = function () {
  screen.innerText += '3';
}
const four = document.querySelector('#four')
four.onclick = function () {
  screen.innerText += '4';
}
const five = document.querySelector('#five')
five.onclick = function () {
  screen.innerText += '5';
}

const plus = document.querySelector('#plus');
plus.onclick = function add() {
  let soma = screen.innerText
}

const equals = document.querySelector('#equals');
  equals.onclick = function result() {
    
  }
