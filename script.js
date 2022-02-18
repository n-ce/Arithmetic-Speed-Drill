const btn = document.querySelectorAll('button');
const bx = document.querySelectorAll('b');
const input = document.querySelector('input');
const p = document.querySelectorAll('p');
let timeleft = 0;
let score = 0;

function difficulty(a, b, c) {
  d = Math.pow(10, (a - 1));
  btn[a].style.color = 'lightgreen';
  btn[b].style.color =
    btn[c].style.color = 'darkgreen';
  restart();
  values();
}

function values() {
  a = p[0].innerText = Math.trunc(Math.random() * d);
  b = p[2].innerText = Math.trunc(Math.random() * d);
  while (b == 0) { values(); }
  operation = ['+', '-', '*', '/'];
  opindex = Math.trunc(Math.random() * 4);
  p[1].innerText = operation[opindex];
  while (opindex == 3 && (a / b) - Math.trunc(a / b) > 0) { values(); }
}

input.oninput = () => {
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
    case 3: {
      res = a / b;
    }
    break;
  }
  if (input.value == res) {
    input.value = '';
    score++;
    bx[0].innerText = score;
    values();
  }
}

setInterval(()=> {
  if (timeleft <= 0) {
    bx[1].style.display =
      input.style.display = 'none';
  }
  bx[1].innerText = timeleft;
  timeleft -= 1;
}, 1000);

function restart() {
  bx[0].innerText = 0;
  input.style.display = 'block';
  bx[1].style.display = 'inline';
  timeleft = 60;
}