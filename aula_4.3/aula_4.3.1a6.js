/* setup dos exercicios */
let n = 7;

/* Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .*/
console.log('exercicio 1');
let asterisco = '';
for(i=0;i<n;i+=1){
    asterisco += '*';
}
for(i=0;i<n;i+=1){
    console.log(asterisco);
}

/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.  */
console.log('exercicio 2');
asterisco = '';
for(i=0;i<n;i+=1){
    asterisco += '*';
    console.log(asterisco);
}

/* Agora inverta o lado do triângulo. */
console.log('exercicio 3');
asterisco = '';
let espaco = '';
let soma = '';
for(i=0;i<n;i+=1){
    asterisco += '*';
    espaco = '';
    soma = '';
    for (j=0;j<n-i-1;j+=1){
        espaco += ' ';
    }
    soma = espaco+asterisco;
    console.log(soma);
}

/* Depois, faça uma pirâmide com n asteriscos de base: */
console.log('exercicio 4');
asterisco = '';
if(n%2==1){
    for(i=0;i<n;i+=1){
        asterisco += '*';
        soma = '';
        espaco = '';
        if(i%2==0){
            for(j=((n-1)/2)-i/2;j>0;j-=1){
                espaco += ' ';
            }
            soma = espaco + asterisco;
            console.log(soma);
        }
    }
}else{
    console.log('Valor de n par. erro na piramide');
}

/* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar */

/* Faça um programa que diz se um número definido numa variável é primo ou não. */
console.log('exercicio 6');
let primo = 93;
console.log('O numero', primo, 'e primo?');
let primos = [2];
let z = 0;
for(i=3;i<=primo;i+=1){
    z = 0;
    for(j of primos){
        if(i%j==0){
            z = 1;
        }
    }
    if(z==0){
        primos += [i];
    }
}
z = 0;
for(j of primos){
    if(primo==j){
        z = 1;
        break;
    }
}
if(z==0){
    console.log('Nao');
}else{
    console.log('Sim');
}