// Total de alunos = 17 
// Se o numero = par escrever par e o numero correspondente 
// Se o numero = impar escrever impar e o numero correspondente 
// Se o numero = zero escrever zero e o numero correspondente 

for (let alunos = 0; alunos < 17; alunos ++) {

   if ( alunos == 0) { 
    console.log ("zero" + alunos);     
   } else { 

     if (alunos % 2 ==0 ) {
         console.log("par" + alunos);
     } else {
         console.log("impar" + alunos);
     }

    }

}