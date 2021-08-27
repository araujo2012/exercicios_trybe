/* Setup do exercicio bonus */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cnumbers = [...numbers];
let mnumbers = [];
console.log(numbers);
let aux = 0;

/* Ordene o array numbers em ordem crescente e imprima seus valores; */
for(i=0;i<cnumbers.length;i += 1){
    for(j=0;j<cnumbers.length;j += 1){
        if (i != j){
            if (cnumbers[j] > cnumbers[i]){
                aux = cnumbers[i];
                cnumbers[i] = cnumbers[j];
                cnumbers[j] = aux;
            }
        }
    }
}
console.log(cnumbers);

/* Ordene o array numbers em ordem decrescente e imprima seus valores; */
for(i=0;i<cnumbers.length;i += 1){
    for(j=0;j<cnumbers.length;j += 1){
        if (i != j){
            if (cnumbers[j] < cnumbers[i]){
                aux = cnumbers[i];
                cnumbers[i] = cnumbers[j];
                cnumbers[j] = aux;
            }
        }
    }
}
console.log(cnumbers);

/* Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo: */
for(let i=0;i<numbers.length;i+=1){
    mnumbers.push((numbers[i+1]||2)*numbers[i]);
}
console.log(mnumbers);