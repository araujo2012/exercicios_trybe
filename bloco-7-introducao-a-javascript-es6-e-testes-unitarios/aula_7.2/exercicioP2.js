const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const nightShift = (lesson, key, value) => {
  lesson[key] = value;
}

nightShift(lesson2, 'turno', 'noite');

console.log(lesson2);

// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const objectKeys = (obj) => Object.keys(obj);

console.log(objectKeys(lesson1));

// 3 Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (obj) => Object.keys(obj).length;

console.log(objectLength(lesson1));

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectValues = (obj) => Object.values(obj);

console.log(objectValues(lesson1));

// 5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = {lesson1, lesson2, lesson3};

console.log(allLessons);

// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numberOfStudents = (obj) => {
  const keys = Object.keys(obj);
  let sum = 0;
  keys.forEach((key) => {
    sum += obj[key].numeroEstudantes;
  });
  return sum;
}

console.log(numberOfStudents(allLessons));

// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const getValueByNumber = (obj, index) => {
  const keys = Object.keys(obj);
  return obj[keys[index]];
}

console.log(getValueByNumber(lesson1, 0));

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const verifyPair = (obj, key, value) => {
  const keys = Object.keys(obj);
  const newKey = keys.find((keyX) => keyX === key);
  if (newKey === undefined) return false;
  if (obj[newKey] === value) return true;
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));