const entrada =require("readline-sync");

let numerodigitado = parseFloat( entrada.question("Digite um numero ") );

if (numerodigitado % 2 == 0) {
    console.log("Numero digitado e par");
} else {
    console.log("Numero digitado e impar");
}