const entrada = require("readline-sync");

// entrada
let idade = entrada.question("Digite sua idade ");

// processamento
if (idade >= 18) {
    console.log("Maior de idade");
    
} else {
    console.log("Menor de idade");
}

console.log("fim do programa");

