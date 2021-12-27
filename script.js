var p = document.querySelectorAll('p');
var input = document.querySelector('input');
var score = 0;

function values() {
  a = p[0].innerText = Math.trunc(Math.random() * 10);

  b = p[2].innerText = Math.trunc(Math.random() * 10);
  operation = ['+', '-', '*', '/'];
  opindex = Math.trunc(Math.random() * 4);
  p[1].innerText = operation[opindex];
}
values();
input.oninput = function() {
  switch (opindex) {
    case 0:
      res = a + b;
      break;
    case 1:
      res = a - b;
      break;
    case 2:
      res = a * b;
      break;
    case 3:
      res = a / b;
      break;
  }
  if (input.value == res) {
    input.value = '';
    score++;
    document.querySelector('b').innerText = score;
    values();
  }
}

function restart() {
  document.querySelector('b').innerText = 0;
  input.style.display = 'block';

}

var timeleft = 60;
var downloadTimer = setInterval(function() {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    input.style.display = 'none';
  }
  document.querySelector('i').innerText = timeleft;
  timeleft -= 1;
}, 1000);