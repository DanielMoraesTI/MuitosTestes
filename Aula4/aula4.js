const nomeJogo = 'RedSec BF6';
console.log(nomeJogo);
console.log(typeof nomeJogo);

let contador = 0;
console.log('Contador inicial:', contador);
contador = 1;
console.log('Contador atualizado:', contador);

let idade = 43;
console.log('Tipo de idade', typeof idade);
let mensagem = 'Idade é apenas um número';
console.log('Tipo de mensagem', typeof mensagem);
let temCarro = false;
console.log('Tipo de tem Carro', typeof temCarro);

const n1 = "10";
const n2 = 5;
// ➕ Concatenação
console.log("Soma (String + Number):", n1 + n2); 
// ➖ Subtração
console.log("Subtração (String - Number):", n1 - n2); 

//let idadeTexto = "42";
//console.log(typeof idadeTexto); 
//let idadeNumero = Number(idadeTexto);
//console.log(typeof idadeNumero); 

//let nome = prompt('Qual é seu nome?');
//console.log('Bem vindo ao site', nome);

let idadeTexto = prompt("Qual é a tua idade?");
console.log("Tipo original:", typeof idadeTexto);
let idadeNumero = Number(idadeTexto);
console.log("Tipo convertido:", typeof idadeNumero); // number
console.log("Daqui a um ano terás:", idadeNumero + 1);