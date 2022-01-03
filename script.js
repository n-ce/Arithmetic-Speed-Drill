var p = document.querySelectorAll('p');
var input = document.querySelector('input');
var button = document.querySelectorAll('button');
var score = 0;

function difficulty(a, b, c) {
  d = Math.pow(10, (a - 1));
  button[a].style.color = 'lightgreen';
  button[b].style.color =
    button[c].style.color = 'darkgreen';
  restart();
  values();
}

function values() {
  a = p[0].innerText = Math.trunc(Math.random() * d);

  b = p[2].innerText = Math.trunc(Math.random() * d);
  operation = ['+', '-', '*', '/'];
  opindex = Math.trunc(Math.random() * 4);
  p[1].innerText = operation[opindex];
}

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
    document.querySelectorAll('b')[0].innerText = score;
    values();
  }

}

var time = document.querySelectorAll('b')[1];
var timeleft = 0;
var downloadTimer = setInterval(function() {

  if (timeleft <= 0) {
    time.style.display =
      input.style.display = 'none';
  }

  time.innerText = timeleft;
  timeleft -= 1;
}, 1000);

function restart() {
  document.querySelector('b').innerText = 0;
  input.style.display = 'block';
  time.style.display = 'inline';
  timeleft = 60;
}

document.querySelectorAll('div')[1].onclick = function() {
  difficulty(2, 3, 4);
}