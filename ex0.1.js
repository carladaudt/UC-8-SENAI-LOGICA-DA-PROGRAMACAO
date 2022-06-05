// Faça um programa que receba a idade de uma pessoa em anos e
// imprima essa idade em: Meses, Dias, Horas, Minutos.

let entrada = require("readline-sync");



// entrada
let idade = entrada.question("Qual é a sua idade");

// processamento 
let meses = idade * 12;
let dias = idade * 365;
let horas = idade *8760;
let minutos = idade * 525600;

// saída 
console.log("Sua idade em meses é " + meses);
console.log("Sua idade em dias é " + dias);
console.log("Sua idade em horas é " + horas);
console.log("Sua idade em minutos é " + minutos);





