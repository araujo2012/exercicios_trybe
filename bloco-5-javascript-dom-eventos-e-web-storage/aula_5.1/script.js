/*         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName() */

 /* Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) */
 /* Crie uma função que corrija o texto da tag <h1>. */
function setTextByTag(tag, indexId, text) {
    document.getElementsByTagName(tag)[indexId].innerHTML = text;
}

 /* Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)). */
 /* Crie uma função que mude a cor do quadrado vermelho para branco. */
function setStyleByClass(classs, indexClass, newStyle, styleSetup) {
    document.getElementsByClassName(classs)[indexClass].style[newStyle] = styleSetup;
}

 /* Crie uma função que modifique todo o texto da tag <p> para maiúsculo. */
function setStyleByTag(tag, indexClass, newStyle, styleSetup) {
   document.getElementsByTagName(tag)[indexClass].style[newStyle] = styleSetup;
}

/* main script */
setTextByTag('p', 1, 'Independente');
setTextByTag('h1', 0, 'Exercício 5.1 - JavaEscripit');
setStyleByClass('main-content', 0, 'backgroundColor', 'rgb(76,164,109)');
setStyleByClass('center-content', 0, 'backgroundColor', 'white');
let paragrafos = document.getElementsByTagName('p');
for (index = 0; index < paragrafos.length; index += 1) {
    setStyleByTag('p', index, 'textTransform', 'uppercase');
}