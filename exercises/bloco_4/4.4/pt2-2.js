let array = [2, 3, 6, 7, 10, 1];

function retornarIndice(array) {

let maiorValor = array[0];

let indice = 0;

for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorValor) {
        maiorValor = array[index];
        indice = index;
    };
};

return indice;

};

console.log(retornarIndice(array));