function TybeDay4_3(today, hour){
    let msg = '';
    if (today === "sexta" && hour === "13h"){
    msg = "Partiu mentoria de logica!!";
}else{
    msg = "Hoje nao e mentoria de logica";
}
console.log(msg);
}

function IMC_trybeDay4_3(altura,peso){
    let aux = peso/(altura*altura);
    let resultado = [];
    if (aux < 18.5){
        resultado ='magreza';
    }else if(aux < 24.9){
        resultado ='normal';
    }else if(aux < 30){
        resultado ='sobrepeso';
    }else{
        resultado ='obesidade';
    }

    console.log('Seu IMC e:', aux, 'kg/m2');
    console.log(resultado);
}

TybeDay4_3('sexta', '14h');
IMC_trybeDay4_3(1.82, 90);