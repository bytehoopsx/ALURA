alert('Boas Vindas ao jogo do Número Secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
 let chute = prompt('Escolha um Número entre 1 e 10');
console.log('Valor do chute:', chute);

console.log('Resultado da comparação:', chute == numeroSecreto);
//se chute for igual ao número secreto
if (numeroSecreto == chute) {
    alert(`Isso ai! Voce descobriu o número secreto ${numeroSecreto}`);
} else {
    console.log('Valor do Número Secreto', numeroSecreto)
    alert('Voce errou, o Número Secreto era: ' + numeroSecreto);
}
