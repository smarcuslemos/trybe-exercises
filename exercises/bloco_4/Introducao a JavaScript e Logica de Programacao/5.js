let angulo1 = 80;
let angulo2 = 70;
let angulo3 = 30;

let somaAngulos = angulo1 + angulo2 + angulo3;

let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
    if (somaAngulos == 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('Valor de ângulo inválido.');
}


