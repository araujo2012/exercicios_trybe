let custo = 10;
let venda = 50;
let imposto = 0.2*custo;
if ((custo<=0)||(venda<=0)){
    console.log('Valores iguais ou menores que zero');
}else{
    console.log('O lucro foi de:')
    console.log(1000*(venda-custo-imposto));
}