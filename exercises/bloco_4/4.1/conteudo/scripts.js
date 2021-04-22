let nota = 80;

switch(nota) {
    case nota >= 80:
        console.log("Parabéns, você foi aprovada(o)!");
        break;

    case nota < 80 && nota >= 60:
        console.log("Você está na nossa lista de espera");
        break;

    case nota < 60:
        console.log("Você foi reprovada(o)");
        break;

    default:
        console.log('Operação Inválida');
}