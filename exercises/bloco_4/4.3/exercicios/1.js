/*let n = 5;

for (let repetidor = 1; repetidor <= n; repetidor += 1){
    let linha = '';
    for (let repetidor2 = 1; repetidor2 <= n; repetidor2 += 1){
        linha += '*';
    };
    console.log(linha);
};*/



let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1){
    inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1){
    console.log(inputLine);
};