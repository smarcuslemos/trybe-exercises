let N = 5;

function somaValoresDeN(N) {

let soma = 0;

for (let contador = 1; contador <= N; contador += 1){
    soma += contador;
};
return soma;
};

console.log(somaValoresDeN(N));


