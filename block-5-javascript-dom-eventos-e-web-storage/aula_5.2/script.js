// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
function newChild(type, text, classs) {
    let newChildItem = document.createElement(type);
    newChildItem.innerText = text;
    if (classs !== '') {
        newChildItem.className = classs;
    }
    return newChildItem;
}

let body = document.querySelector('body');
body.appendChild(newChild('h1', 'Exercício 5.2 - JavaScript DOM', ''));

//Adicione a tag main com a classe main-content como filho da tag body ;
body.appendChild(newChild('main', '', 'main-content'));

//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let main = document.querySelector('main');
main.appendChild(newChild('section', '', 'center-content'));

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let section = document.querySelector('section');
section.appendChild(newChild('p', 'algum texto', ''));

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
main.appendChild(newChild('section', '', 'left-content'));

//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
main.appendChild(newChild('section', '', 'right-content'));

//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let leftContent = document.querySelector('.left-content');
leftContent.appendChild(newChild('img', '', 'small-image'));
let firstImage = document.querySelector('.small-image');
firstImage.src = 'https://picsum.photos/200';

//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let rightContent = document.querySelector('.right-content');
rightContent.appendChild(newChild('ul', '', ''));
let unoredList = document.querySelector('ul');
for (index = 0; index < 10; index += 1) {
    unoredList.appendChild(newChild('li', `${index+1}`, ''));
}

//Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (index = 0; index < 3; index += 1) {
    main.appendChild(newChild('h3', 'texto', ''));
}

//Adicione a classe title na tag h1 criada;
let firstH1 = document.querySelector('h1');
function highestCount(numbersArray) {
    let highestNumber = numbersArray.sort((a, b) => a - b).pop();
    console.log(highestNumber);
    let highestNumberCount = 1;
    for (const index in numbersArray) {
      if (numbersArray[index] === highestNumber) {
        highestNumberCount += 1;
      }
    }
    return highestNumberCount;
  }

  console.log([1, 3, 9, 100, 9, 100, 99].sort((a, b) => a-b));

//Adicione a classe description nas 3 tags h3 criadas;
//Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
//Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
//Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
//Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.