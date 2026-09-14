alert('Boas Vindas ao jogo do Número Secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute
console.log('Valor do chute:', chute);

//enquanto chute não igual ao num secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um Número entre 1 e 10');
    console.log('Resultado da comparação:', chute == numeroSecreto);
    //se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Voce descobriu o número secreto ${numeroSecreto}`);
} else {
    console.log('Valor do Número Secreto', numeroSecreto)
    if (chute >numeroSecreto ) {
        alert(`O Número secreto é menor que ${chute}`);
    } else {
        alert(`O Número secreto é maior que ${chute}`);
    }
}
}

