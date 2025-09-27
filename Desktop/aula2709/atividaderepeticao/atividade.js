/* EXERCICIO 1 - Contagem de 1 a 10
Use um `for` para exibir os números de 1 a 10 no console. */

let i;
for(i = 1; i<=10; i++){
    console.log("Número",i)
}

/* EXERCICIO 2 Tabuada de um número 
Peça um número ao usuário e exiba a tabuada desse número de 1 a 10 usando um `for`.*/

let numero = Number(prompt("Digite um número: "));
for (let i = 1; i <=10; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`);  
}

/* EXERCICIO 3 Soma dos primeiros N números naturais
Peça um número `N` ao usuário, use um `while` ou `for` para somar os números de `1` até `N`.*/

const numeros = prompt("digite os numeros: ex: 1,2,3,4,5" );
const numero = [n1,n2,n3,n4,n5] = numeros.split("+").map(Number)

const soma = n1 + n2 + n3 + n4 + n5;

3
3
console.log(soma)

/*EXERCICIO 4 Exibir os números pares de 1 a 50
Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.*/

for (let i = 1; i <=50; i++){
    if(i %  2 === 0){
        console.log(`${i}`)
    }
}

/*EXERCICIO 5 jogo de adivinhação - gerar numero aleatorio e pedir pro usuario tentar adivinhar
*/

const segredo = Math.floor (Math.random()*100)+1;
console.log(`${segredo}`)
let tentativa;

do {
tentativa = prompt("adivinhe o número:")
if(tentativa > segredo ){
    console.log("alto demais...")
}
if(tentativa < segredo ){
    console.log("baixo demais...")
}else{
    console.log("ACERTO MISERAVI")
}


} while (tentativa !== `${segredo}`);

//EXERCICIO 6 - CONTAGEM REGRESSIVA DE 100 ATE ZERO
//USANDO WHILE

let i = Number(prompt("Digite um numero:"));

while (i >=0) {
    console.log("numero:", i);
    i--;
}

// AVANÇADO - EXERCICIO 1 - SOMA DOS DIGITOS

let num = Number(prompt("Digite um número inteiro e positivo:"));
