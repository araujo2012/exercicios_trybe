/* setup dos exercicios */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

/* Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.  */

console.log('Exercicio 1');
console.log('Bem-vinda,', info.personagem);

/* Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. */

console.log('Exercicio 2');
info.recorrente = 'Sim';
console.log(info);

/* Faça um for/in que mostre todas as chaves do objeto.  */

console.log('Exercicio 3');
for(i in info){
    console.log(i);
}

/* Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. */

console.log('Exercicio 4');
for(i in info){
    console.log(info[i]);
}

/* Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 
'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada 
objeto juntos de acordo com cada uma das chaves. */

console.log('Exercicio 5');
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  for(i in info){
      if(i==='recorrente'){
        if((info[i] === 'Sim')&&(info2[i] === 'Sim')){
            console.log('Ambos recorrentes');
        }
      }else{
        console.log(info[i], 'e', info2[i]);
    }
  }