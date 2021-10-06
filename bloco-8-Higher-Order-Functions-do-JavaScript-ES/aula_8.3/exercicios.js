const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

/* {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
} */

// Adicione o código do exercício aqui:

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
const expectedResult1 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

const formatedBookNames = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

console.log('Exercicio 1');
console.log(formatedBookNames());


// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const expectedResult2 = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

const nameAndAge = () => {
  let newBooks = books.map((book) => {
    return {
      age: (book.releaseYear - book.author.birthYear), 
      author: book.author.name,
    };
  });
  return newBooks.sort((a, b) => a.age - b.age);
}

console.log('Exercicio 2');
console.log(nameAndAge());


// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const expectedResult3 = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

const fantasyOrScienceFiction = () => books.filter((book) => {
  return ((book.genre === 'Fantasia') || (book.genre === 'Ficção Científica'));
});

console.log('Exercicio 3');
console.log(fantasyOrScienceFiction());


// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
const expectedResult4 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  let newBooks = books.filter((book) => (book.releaseYear < 1961));
  return newBooks.sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log('Exercicio 4');
console.log(oldBooksOrdered());


// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult5 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  let newBooks = books.filter((book) => ((book.genre === 'Fantasia') || (book.genre === 'Ficção Científica')));
  return newBooks.map((book) => book.author.name).sort();
}

console.log('Exercicio 5');
console.log(fantasyOrScienceFictionAuthors());


// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult6 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  let newBooks = books.filter((book) => book.releaseYear < 1961);
  return newBooks.map((book) => book.name);
}

console.log('Exercicio 6');
console.log(oldBooks());


// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const expectedResult7 = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  let countDots = books.map((book) => {
    return [...book.author.name].reduce((acm, letter) => (letter === '.') ? acm + 1 : acm, 0);
  });
  let newBooks = books.filter((book, index) => countDots[index] === 3).map((book) => book.name);
  return newBooks;
}

console.log('Exercicio 7');
console.log(authorWith3DotsOnName());