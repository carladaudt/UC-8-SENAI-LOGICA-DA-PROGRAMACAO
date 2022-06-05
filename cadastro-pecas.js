// SE A PEÇA POSSUIR PESO > 100 GRAMAS, PODE CADASTRAR 
// CASO A CAIXA FOR SUPERIOR A 10 PECAS (DENTRO) IMPRIMIR UMA MENSAGEM INFORMANDO NAO TER CAPACIDADE SUFICIENTE
// CASO A PEÇA TENHA UM NOME NO FORMATO SOMENTE DE 3 CARACTERES, INFORMAR UMA MENSAGEM DE ERROR 

//  Correção 1

let listapecas = 30;
let peso= 100;
let nomepecas="cilindro mestre"; //string

if(peso >= 100 ){
    console.log("Peça com peso ok para cadastrar");

    if(listapecas >= 10){
        console.log("Não ter capacidade suficiente");
    }

        if(nomepecas.length < 3){
            console.log("Peça não pode ser cadastrada ");

        }
        
    } else {
        console.log("Peça não será cadastrada");
    }


//  Correção 2
if(peso >= 100 ){
console.log("Peça com peso ok para cadastrar");
}

if(listapecas >= 10){
    console.log("Não ter capacidade suficiente");
}
    if(nomepecas.length < 3) {
    console.log("Peça não pode ser cadastrada ");

    }

console.log("Fim do Programa");