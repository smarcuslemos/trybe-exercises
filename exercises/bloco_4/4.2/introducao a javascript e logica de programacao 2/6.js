let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = [];


for (let dividendo = 0; dividendo < numbers.length; dividendo += 1) {
    if (numbers[dividendo] % 2 !== 0) {
        impares.push(numbers[dividendo])
    } 
}

if (impares.length === 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(impares)
}
