function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

function newChild(type, text, classs) {
    let newChildItem = document.createElement(type);
    newChildItem.innerText = text;
    if (classs !== '') {
        newChildItem.className = classs;
    }
    return newChildItem;
}

function createElementsDays(day) {
    let classs = 'day';
    if ((day === 24) || (day === 25) || (day === 31)){
        classs += ' holiday';
    }
    if ((day === 4) || (day === 11) || (day === 18) || (day === 25)){
        classs += ' friday';
    }
    return newChild('li', `${day}`, classs);
}
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Exercicio 1
  /* O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
   */
  let ulDays = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for(let index = 0; index < dezDaysList.length; index += 1) {
    ulDays.append(createElementsDays(dezDaysList[index]));
  }

  //Exercicio 2
  /* Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */
  let btn = newChild('button', 'Feriados!', '');
  btn.id = "btn-holiday";
  let divBtn = document.querySelector('.buttons-container');
  divBtn.append(btn);

  //Exercicio 3
  /* Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" . */
  btn.addEventListener('click', function() {
    let feriados = document.getElementsByClassName('holiday');
    for (element of feriados) {
        if (element.style.backgroundColor === 'red') {
          element.style.backgroundColor = 'rgb(238,238,238)';
        } else {
          element.style.backgroundColor = 'red';
        }
    }
  });

  //Exercicio 4
  /* Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */
let btnFriday = newChild('button', 'Sexta-feira', '');
btnFriday.id = 'btn-friday';
divBtn.append(btnFriday);

//Exercicio 5
/* Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */
