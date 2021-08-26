let salario = 3000;
let aliquota = 0;
let ir = 0;
if (salario <= 1556.94){
    aliquota = 0.08*salario;
}else if (salario <= 2594.92){
    aliquota = 0.09*salario;
}else if (salario <= 5189.82){
    aliquota = 0.11*salario;
}else{
    aliquota = 570.88;
}
salario = salario-aliquota;
if ((salario>1903.99)&&(salario <= 2826.65)){
    ir = 0.075*salario-142.80;
}else if (salario <= 3751.05){
    ir = 0.15*salario-354.8;
}else if (salario <= 4664.68){
    ir = 0.225*salario-636.13;
}else{
    ir = 0.275*salario-869.36;
}
console.log(salario-ir);