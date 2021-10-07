let a = 2;
let b = 10;
let c = 100;
if (a > b){
    if (a > c){
        console.log('A primeira variavel e maior.')
    }else if (a < c){
        console.log('A terceira variavel e maior.')
    }else{
        console.log('A primeira e terceira variavel sao maiores.')
    }
}else if (a < b){
    if (b > c){
        console.log('A segunda variavel e maior.')
    }else if (b < c){
        console.log('A terceira variavel e maior.')
    }else{
        console.log('A segunda e terceira variavel sao maiores.')
    }
}else{
    if (b > c){
        console.log('A primeira e segunda variavel sao maiores.')
    }else if (b < c){
        console.log('A terceira variavel e maior.')
    }else{
        console.log('As tres variaveis sao iguais.')
    }
}