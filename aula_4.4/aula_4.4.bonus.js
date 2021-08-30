/* (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa) */

/* Refatorar para utilizar o conceito de objetos */

function romanoToNumber(array){
    let number = 0;
    let save = 0;
    let romano = 'MDCLXVI';
    let add = [1000, 500, 100, 50, 10, 5, 1];
    for(i=0;i<array.length;i+=1){
        for(j=0;j<romano.length;j+=1){
            if(array[i]===romano[j]){
                if(add[j] > save){
                    number += add[j] - 2*save;
                }else{
                    number += add[j];

                }
                save = add[j];
                break;
            }
        }
    }
    return number;
}

console.log('Exercicio 1');
let teste = 'MMMCDXII';
console.log(romanoToNumber(teste));

/* Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. 
Através de um loop for , percorra essa variável, busque os números pares e os adicione 
a um novo array que deverá ser retornado ao final pela pela função. */

function arrayOfNumbers(vector){
    let newArray = [];
    for(i of vector){
        for(j of i){
            if(j%2===0){
                newArray.push(j);
            }
        }
    }
    return newArray;
}

console.log('Exercicio 2');
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));

/* A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave 
e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array 
['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } 
quando passado como argumento para a função.
Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, 
x Abacates... */

function newBasket(basket){
    let basketOfFruits = {};
    for(i of basket){
        if(typeof basketOfFruits[i] === 'undefined'){
            basketOfFruits[i] = 1;
        }else {
            basketOfFruits[i] += 1;
        }
    }
    return basketOfFruits;
}

console.log('Exercicio 3');
const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
  console.log(newBasket(basket));