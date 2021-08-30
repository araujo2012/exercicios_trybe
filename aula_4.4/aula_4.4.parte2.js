/* Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for */

console.log('Exercicio 1');
function verificaPalindromo(palavra){
    for(i = 0; i < palavra.length; i += 1){
        if(palavra[i] != palavra[palavra.length-i-1]){
            return false;
        }
    }
    return true;
}
console.log('arara e palindrome:', verificaPalindromo('arara'));
console.log('desenvolvimento e palindrome:', verificaPalindromo('desenvolvimento'));

/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */

console.log('Exercicio 2');
function indexOfHigherValue(array){
    let max = -Infinity;
    let index;
    for(i=0;i<array.length;i+=1){
        if(array[i]>max){
            max = array[i];
            index = i;
        }
    }
    return index;
}

let array = [2, 3, 6, 7, 10, 1];
console.log(indexOfHigherValue(array));

/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor */

function indexOfLowerValue(array){
    let min = Infinity;
    let index;
    for(i=0;i<array.length;i+=1){
        if(array[i]<min){
            min = array[i];
            index = i;
        }
    }
    return index;
}

console.log('Exercicio 3');
array = [2, 4, 6, 7, 10, 0, -3];
console.log(indexOfLowerValue(array));

/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres */

function wordWithHigherNumberOfCaracters(array){
    let max = 0;
    let word = '';
    for(i=0;i<array.length;i+=1){
        if(array[i].length>max){
            max = array[i].length;
            word = array[i];
        }
    }
    return word;
}

console.log('Exercicio 4');
array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(wordWithHigherNumberOfCaracters(array));

/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete */

function numberWithMostRepeats(array){
    let repeats = 0;
    let number;
    for(i of array){
        let soma = 0;
        for(j of array){
            if(j === i){
                soma += 1;
            }
        }
        if(soma>repeats){
            repeats = soma;
            number = i;
        }
    }
    return number;
}

console.log('Exercicio 5');
array = [2, 3, 2, 5, 8, 2, 3];
console.log(numberWithMostRepeats(array));

/* Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N */

function sumFromOneToN(n){
    return (n+1)*n/2;
}

console.log('Exercicio 6');
console.log(sumFromOneToN(5));

/* Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o 
final da string word . Considere que a string ending sempre será menor que a string word */

function checkEndOfString(mainString, secondString){
    let k = mainString.length-secondString.length;
    for(i=0;i<secondString.length;i+=1){
        if(secondString[i]!=mainString[i+k]){
            return false;
        }
    }
    return true;
}

console.log('Exercicio 7');
console.log(checkEndOfString('trybe', 'be'));
console.log(checkEndOfString('joaofernando', 'fernan'));