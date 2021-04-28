let array = [2, 4, 6, 7, 10, 0, -3];

function retornaIndiceDoMenorValor(array) {

let menorValor = array[0];

let indice = 0;

for (let index = 0; index < array.length; index += 1) {
    if (array[index] < menorValor){
        menorValor = array[index];
        indice = index;
    };
    
};
return indice;
};

console.log(retornaIndiceDoMenorValor(array));