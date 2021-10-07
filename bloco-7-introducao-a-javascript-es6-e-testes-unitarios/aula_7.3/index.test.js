const {sum, myRemove, myFizzBuzz, encode, decode} = require('./index.js');

describe('Testando a funcao sum', () => {
	const input1 = [4, 0, 2];
	const input2 = [5, 0, 3];
	const output = [9, 0, 5];
	
	for (let index = 0; index < input1.length; index += 1) {	
		it(`Verifica se a soma de ${input1[index]} com ${input2[index]} retorna ${output[index]}`, () => {
			expect(sum(input1[index], input2[index])).toBe(output[index]);
		});
	}

	it(`Verifica se quando passado uma string, a funcao retorna um erro`, () => {
		expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
	});
});

describe('Testando a funcao myRemove', () => {
	it('Verifica se remove o valor 3 do array [1, 2, 3, 4]', () => {
		expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
	});

	it('Verifica se a funcao myRemove passada com o parametro 3 nao retorna o array [1, 2, 3, 4]', () => {
		expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
	});

	it('Verifica se a funcao myRemove passada com o parametro 5 retorna o array [1, 2, 3, 4]', () => {
		expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
	});
});

describe('Testando a funcao myFizzBuzz', () => {
	it('Verifica se a funcao retorna fizzbuzz quando inserido 15', () => {
		expect(myFizzBuzz(15)).toMatch('fizzbuzz');
	});

	it('Verifica se a funcao retorna fizz quando inserido 6', () => {
		expect(myFizzBuzz(6)).toMatch('fizz');
	});

	it('Verifica se a funcao retorna buzz quando inserido 10', () => {
		expect(myFizzBuzz(10)).toMatch('buzz');
	});

	it('Verifica se a funcao retorna o proprio numero quando inserido 11', () => {
		expect(myFizzBuzz(11)).toBe(11);
	});

	it('Verifica se a funcao retorna false quando inserido algo diferente de numero', () => {
		expect(myFizzBuzz('a')).not.toBeTruthy();
	});
});

describe('Testando as funcoes encode e decode', () => {
	it('Verifica se a funcao encode existe', () => {
		expect(typeof(encode)).toMatch('function');
	});

	it('Verifica se a funcao decode existe', () => {
		expect(typeof(decode)).toMatch('function');
	});

	it('Verifica se a funcao encode tarduz as letras a, e, i, o, u para 1, 2, 3, 4, 5', () => {
		expect(encode('aeiou')).toMatch('12345');
	});

	it('Verifica se a funcao encode nao traduz as conssoantes', () => {
		expect(encode('abcdefghijklmnopqrstuvwxyz')).toMatch('1bcd2fgh3jklmn4pqrst5vwxyz');
	});

	it('Verifica se a funcao decode nao retraduz as conssoantes', () => {
		expect(decode('1bcd2fgh3jklmn4pqrst5vwxyz')).toMatch('abcdefghijklmnopqrstuvwxyz');
	});

	it('Verifica se a string retornada pela funcao encode tem o mesmo numero de caracteres que a string de parametro', () => {
		expect(encode('1bcd2fgh3jklmn4pqrst5vwxyz').length).toBe(26);
	});

	it('Verifica se a string retornada pela funcao decode tem o mesmo numero de caracteres que a string de parametro', () => {
		expect(decode('1bcd2fgh3jklmn4pqrst5vwxyz').length).toBe(26);
	});
});