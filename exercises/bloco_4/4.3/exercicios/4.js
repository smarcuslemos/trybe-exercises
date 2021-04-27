let n = 5;
let simbolo = '*';
let espaco = ' ';
let posicao = n;
let linha = '';

for (let index_linha = 1; index_linha <= 3; index_linha += 1) {
    for (let index_coluna = 1; index_coluna <= n; index_coluna += 1) {
        if (index_coluna < (posicao - 2)) {
            linha += '8';
        } else {
            linha += '*';
        } if (index_coluna > (posicao - 2)) {
            linha += '9';
        }
    }
    console.log(linha)
    linha = '';
    posicao -= 1;

}