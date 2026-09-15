alert('Boas Vindas ao site de Média')
let nome = prompt('Digite seu nome para Login');
let nota1 = prompt('Informe sua Primeira Nota');
let nota2 = prompt('Informe sua Segunda Nota');
let media = (1*nota1+1*nota2)/2
console.log('Nome do Aluno:', nome);
console.log('Valor da Primeira Nota:', nota1);
console.log('Valor da Segunda Nota:', nota2);
console.log('Sua Média Final:', media);



if (media >= 6) {
    alert(`Sua Média Final é: ${media}. E tu está Aprovado!`)
} else {
    alert(`Sua Média Final é: ${media}. E tu está Reprovado!`)
}
  