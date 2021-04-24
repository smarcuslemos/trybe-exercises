let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = numbers[0];

for (let comparador = 1; comparador < numbers.length; comparador += 1) {
    if (numbers[comparador] > maior) {
        maior = numbers[comparador];
    };
};


console.log(maior);