   

function setup() {
  createCanvas(500, 400);
  sonTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaCarroPosição();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}










