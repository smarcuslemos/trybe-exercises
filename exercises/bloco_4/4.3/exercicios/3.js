let repeticao = 5;
let linha = '';
let simbolo = '*';
let espaco = ' ';
let posicao = repeticao;

for (let index_linha = 1; index_linha <= repeticao; index_linha += 1){
  for (let index_coluna = 1; index_coluna <= repeticao; index_coluna += 1){
    if (index_coluna < posicao) {
      linha += ' ';
    } else {
      linha += '*';
    }
  }
  console.log(linha);
  linha = '';
  posicao -= 1;
}