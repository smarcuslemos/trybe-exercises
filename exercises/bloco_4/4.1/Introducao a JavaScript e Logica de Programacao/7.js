let nota = 8000;
let porcentagemNota = nota / 100;

if (porcentagemNota >= 90) {
    console.log('A')
} else if (porcentagemNota >= 80) {
    console.log('B')
} else if (porcentagemNota >= 70) {
    console.log('C')
} else if (porcentagemNota >= 60) {
    console.log('D')
} else if (porcentagemNota >= 50) {
    console.log('E')
} else if (porcentagemNota < 50) {
    console.log('F')
} else if (porcentagemNota < 0 || porcentagemNota > 100) {
    console.log('Nota inválida.')
} 