let nome = prompt('Qual é seu nome?');
let anoNascimento = prompt('Em qual ano nasceu?');
let ano = 2025;

let idadeAtual = ano - anoNascimento;

console.log('Sua idade atualmente é de', idadeAtual, 'anos');
alert('Sua idade atualmente é de ' + idadeAtual + ' anos ' + nome);