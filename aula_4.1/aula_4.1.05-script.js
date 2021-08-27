let a = 30;
let b = 50;
let c = 100;
if ((a<0)||(b<0)||(c<0)){
    console.log('Erro. Angulo inferior a zero.');
}else{
    if (a+b+c==180){
        console.log('True');
    }else{
        console.log('False')
    }
}