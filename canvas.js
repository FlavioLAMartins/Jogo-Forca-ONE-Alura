let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'white'
pincel.strokeStyle = 'white'
function desenhaCabeça() {
  pincel.beginPath();
  pincel.arc(400,160, 30, 0, 2 * Math.PI);
  pincel.stroke();
}

function desenhaTronco() {
  pincel.moveTo(400,190);
  pincel.lineTo(400,290);
  pincel.stroke();
}
function desenhaBracoEsquerdo() {
  pincel.moveTo(400,210);
  pincel.lineTo(350,230);
  pincel.stroke();
}

function desenhaBracoDireito() {
  pincel.moveTo(400,210);
  pincel.lineTo(450,230);
  pincel.stroke();
}

function desenhaPernaDireita() {
  pincel.moveTo(400,290);
  pincel.lineTo(450,310);
  pincel.stroke();
}


function desenhaPernaEsquerda() {
  pincel.moveTo(400,290);
  pincel.lineTo(350,310);
  pincel.stroke();
}
function desenhaForca() {

  pincel.fillStyle = 'white'
  pincel.fillRect(250, 50, 20, 400);
  pincel.fillRect(250, 50, 200, 20);
  pincel.fillRect(200, 430, 120, 20);
  pincel.moveTo(400,50);
  pincel.lineTo(400,130);
  pincel.stroke();
}

desenhaForca()
