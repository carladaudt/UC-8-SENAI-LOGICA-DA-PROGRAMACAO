// Faça um programa que receba 15 números inteiros e imprima na tela
// a somatória dos 15 números.


let entrada = require("readline-sync");

// // entrada
// let n1 = 50;
// let n2 = 30;
// let n3 = 90;


// let resultado = 0;


// // processamento
// resultado = resultado + n1 + n2 + n3;
// // saída
// console.log("A soma dos numeros é " + resultado);

let resultado = 0;
for(let i = 1;  i<= 3; i++){
    let n1 = parseInt ( entrada.question("Digite um numero: ") );
    resultado = resultado + n1;

}

console.log("A soma dos numeros eh" + resultado);