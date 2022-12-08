var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;
let xAleatorio;
let yAleatorio;

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function desenhaAlvo(x, y){
    desenhaCirculo(x, y, raio + 20, 'red'); 
    desenhaCirculo(x, y, raio + 10, 'white');
    desenhaCirculo(x, y, raio, 'red'); 
}

function posicaoAleatoria(maximo){

    return Math.floor(Math.random() * maximo)
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela(){
    limpaTela();
    xAleatorio = posicaoAleatoria(600);
    yAleatorio = posicaoAleatoria(400);
    desenhaAlvo(xAleatorio, yAleatorio);
    
}

setInterval(atualizaTela, 3000);


function dispara(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

   if(x > xAleatorio - raio && x < xAleatorio + raio && y > yAleatorio - raio && y < yAleatorio + raio){
        alert("Acertou mizeravi")
   }
}

tela.onclick = dispara;
