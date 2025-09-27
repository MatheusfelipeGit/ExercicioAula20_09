// //estrutura de repetição

// //while
// let i = 1; 
// while (i<=5) {
//     console.log("numero:", i);
//     i++;
// }

// //do...while
// let senha;
// do {
//     senha = prompt("Digite a senha:")
// } while (senha !== "1234");
// console.log("acesso liberado!")

//for
//estrutura: (inicio; condicao; incremento)

// for(let i = 1; i <= 10; i++){
//     console.log(`7 x ${i} = ${7 * i}`)
// }

//for..of
// const frutas = ["Maçã", "Banana", "Laranja"];
// for(const fruta of frutas){
//     console.log("Fruta:", fruta)
// };

// //for..in
// const pessoa = {nome: "Lucas", idade: "35", cidade:"Mauá"};
// for(const chave in pessoa){
//     console.log(`${chave}: ${pessoa[chave]}`)
// };


// //forEach
// const numeros = [1,2,3,4,5,6,7,8,9,10];
// numeros.forEach(function(n) {
//     console.log(`7 x ${n} = ${7 * n}`)
// })


//teste1 - mostrar numeros de 1 a 10 com while
// let i = 1;
// while (i <=10 ) {
//     console.log("numero:", i)
//     i++;
// 

//teste2 - tabuada do 5 com for
//estrutura: (inicio; condicao; incremento)
// for(let i = 1; i<=10; i++){
//     console.log(`5 x ${i} = ${5 * i}`)
// }

//teste3 - somar os numeros de 1 a 100 com for.

// let soma = 0;
// for(let i = 1; i <=100; i++){
//     soma += i;
    

// }
// console.log(`a soma de 1 a 100 é: ${soma}`)

//media de 5 números - faça um programa que peça 5 numeros ao usuario, calcule e mostre a media deles

// let soma = 0;

// for(let i = 1; i <=5; i++){

//     const num = Number(prompt(`Digite o ${i} numero:`));
//     soma += num;
// }

// console.log(`resultado da media: ${soma / 5}`);

// const numeros = prompt("digite os numeros: ex: 1,2,3,4,5" );
// const numero = [n1,n2,n3,n4,n5] = numeros.split(",").map(Number)

// const soma = n1 + n2 + n3 + n4 + n5;

// const media = soma / 5;

// console.log(` media deu: ${media}`)

//teste 4 - criar um programa que peça nomes ao usuario repetidamente ate que o usuario digite "sair"

// let nome;
// do {
//     nome = prompt("Digite um nome:")
// } while (nome !== "sair");

// console.log("finalizo.")