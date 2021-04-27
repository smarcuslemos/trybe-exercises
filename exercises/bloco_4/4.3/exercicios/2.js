let n = 5;

for (let repetidor = 1; repetidor <= 1; repetidor += 1){
    let linha = '';
    for (let repetidor2 = 1; repetidor2 <= n; repetidor2 += 1){
        linha += '*';
        console.log(linha);
    };
};

let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < size; lineIndex += 1){
    //console.log(inputLine); Por que aqui há menos linhas impressas?
    inputLine += symbol;
    //console.log(inputLine); Por que aqui há mais linhas impressas?
};
