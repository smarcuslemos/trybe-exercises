let word = 'trybe';
let ending = 'be';

function verificaFinalString(word, ending) {

    if (word.substr(word.length-2) === ending.substr(ending.length-2)) {
        return true;
    } else {
        return false;
    };

};

console.log(verificaFinalString(word, ending));