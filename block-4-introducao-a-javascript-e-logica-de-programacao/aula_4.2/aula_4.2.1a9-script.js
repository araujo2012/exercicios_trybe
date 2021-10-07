/* Setup dos exercicios */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; */
console.log('Exercicio 4.2.1');
for(i of numbers){
    console.log(i);
}

/* Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */
console.log('Exercicio 4.2.2');
let soma =0;
for(i of numbers){
    soma += i;
}
console.log(soma);

/* Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; */
console.log('Exercicio 4.2.3');
let media = soma/numbers.length;
console.log(media);

/* Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */
console.log('Exercicio 4.2.4');
if (media > 20){
    console.log('valor maior que 20');
}else{
    console.log('valor menor ou igual a 20');
}

/* Utilizando for , descubra qual o maior valor contido no array e imprima-o; */
console.log('Exercicio 4.2.5');
let max = -Infinity;
for(i of numbers){
    if (i > max){
        max = i;
    }
}
console.log(max);

/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
console.log('Exercicio 4.2.6');
let impar = Infinity;
for(i of numbers){
    if (i%2==1){
        impar += 1;
    }
}
if (impar > 0){
    console.log(impar);
}else{
    console.log('Nenhum valor e impar');
}

/* Utilizando for , descubra qual o menor valor contido no array e imprima-o; */
console.log('Exercicio 4.2.7');
let min = numbers[0];
for(i of numbers){
    if (i < min){
        min = i;
    }
}
console.log(min);

/* Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */
console.log('Exercicio 4.2.8');
let novo = [];
for (i=1;i<26;i += 1){
    novo.push(i);
}
console.log(novo);

/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . */
console.log('Exercicio 4.2.9');
for (i=0;i<25;i += 1){
    console.log(novo[i]/2);
}
