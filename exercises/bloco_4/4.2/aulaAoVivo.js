/*
Marcar 6 números entre 1 e 60.
Sortear o mesmo intervalo.
Ganha quem acertar 6 números.
*/

let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let turma12Play = [35, 8, 22, 14, 2, 60];
let turma12Play2 = [1, 2, 3, 4, 5, 6];
let turma12Play3 = [7, 8, 9, 10, 11, 12];

let megaSenaGames = [turma12Play, turma12Play2, turma12Play3];

let numberOfHits = 0;

for (let games = 0; games < megaSenaGames.length; games += 1) {
    for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
        for (let indexPlay = 0; indexPlay < megaSenaGames.length; indexPlay += 1) {
            if(megaSenaNumbers[indexMega] === turma12Play[indexPlay]){
                numberOfHits += 1;
            }
        }
    }
}


console.log(`Mega-Sena: ${megaSenaNumbers}`);
console.log('Jogo 1 da Turma 12: ' + turma12Play);
console.log('Jogo 2 da Turma 12: ' + turma12Play);
console.log('Jogo 3 da Turma 12: ' + turma12Play);
console.log('Acertos 1: ' + numberOfHits);
console.log('Acertos 2: ' + numberOfHits);
console.log('Acertos 3: ' + numberOfHits);
