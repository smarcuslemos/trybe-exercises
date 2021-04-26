//Movimentos da Rainha

//Posição da Rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//Posição peça alvo
let posicaoPecaLinha = 3;
let posicaoPecaColuna = 2;

let ataqueBemSucedido = false;

if (posicaoRainhaLinha === posicaoPecaLinha || posicaoRainhaColuna === posicaoPecaColuna){
    ataqueBemSucedido = true;
};

//Diagonal superior direita
for (let supDir = 1; supDir < 8; supDir += 1) {
    let linhaRainha = posicaoRainhaLinha + supDir;
    let colunaRainha = posicaoRainhaColuna + supDir;

    if (linhaRainha > 8 || colunaRainha > 8) {
        break;
    };

    if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
        ataqueBemSucedido = true;
    };
};

//Diagonal superior esquerda
for (let infEsq = 1; infEsq < 8; infEsq += 1) {
    let linhaRainha = posicaoRainhaLinha - supEsq;
    let colunaRainha = posicaoRainhaColuna - supEsq;

    if (linhaRainha < 1 || colunaRainha < 1) {
        break;
    };

    if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
        ataqueBemSucedido = true;
    };
};

console.log(ataqueBemSucedido)