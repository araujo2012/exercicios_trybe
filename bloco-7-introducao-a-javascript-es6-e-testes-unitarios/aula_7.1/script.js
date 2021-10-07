// Parte 1 da aula 7.1

// Exercicio 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(false);

// Exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const oddsAndEvensSorted = (array) => {
  array.sort((a, b) => a - b);
  let newString = 'Os números ';
  for (let index = 0; index < array.length; index += 1) {
    newString += (newString === 'Os números ') ? `${array[index]}` : `, ${array[index]}`;
  }
  newString += ' se encontram ordenados de forma crescente!';
  return newString;
}

console.log(oddsAndEvensSorted(oddsAndEvens)); // será necessário alterar essa linha 😉



// Parte 2 da aula 7.1

// Exercicio 1
const factorial = (number) => (number - 1 === 0) ? number : number * factorial(number - 1);
console.log(factorial(2));

// Exercicio 2
const longestWord = (string) => {
	const maxObject = {
		max: - Infinity,
		string: '',
	};
	let stringArray = string.split(' ');
	for (let index = 0; index < stringArray.length; index += 1) {
		if (stringArray[index].length > maxObject.max) {
			maxObject.max = stringArray[index].length;
			maxObject.string = stringArray[index];
		}
	}
	return maxObject.string;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Exercicio 4
const skills = ['html', 'javascript', 'matlab', 'css', 'python'];

const changeX = (string) => {
	let myString = 'Tryber x aqui!';
	let myStringArray = myString.split(' ');
	for (let index = 0; index < myStringArray.length; index += 1) {
		if (myStringArray[index] === 'x') myStringArray[index] = string;
	}
	return myStringArray.join(' ');
}

const fullText = (string) => {
	const skillsOrder = skills.sort();
	string += ' Minhas cinco principais habilidades são:';
	for (let index = 0; index < skillsOrder.length; index += 1) {
		string += `\n${skillsOrder[index]}`;
	}
	return string;
}

console.log(fullText(changeX('Lucas')));
