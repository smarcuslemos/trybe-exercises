let palavra = 'ovo';

function palindromo(palavra) {

    let palavraAoContrario = '';


    for (let verificador = palavra.length-1; verificador >= 0; verificador -= 1){
        palavraAoContrario += palavra[verificador];
    };
    
    if (palavra === palavraAoContrario) {
        return true;
    } else {
        return false;
    };

};

console.log(palindromo(palavra))