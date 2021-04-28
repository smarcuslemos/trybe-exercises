let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function verificaOmaiorNome(array) {

let maiorNome = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorNome.length){
        maiorNome = array[index];
    };
};
return maiorNome;
};



console.log(verificaOmaiorNome(array));

