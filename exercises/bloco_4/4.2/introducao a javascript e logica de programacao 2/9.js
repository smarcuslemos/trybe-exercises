let array1ao25 = [];

let divisao = [];

for (let criaArray = 1; criaArray <= 25; criaArray += 1) {
    array1ao25.push(criaArray)
};

for (let dividendo = 0; dividendo < array1ao25.length; dividendo += 1){
    divisao.push(array1ao25[dividendo] / 2);
}

console.log(divisao)
