const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da Função de Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function () {
        const resultadoDaSoma = somarDoisNumeros(4, 3);
        expect(resultadoDaSoma).to.equal(7);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function () {
        const resultadoDaSoma = somarDoisNumeros(20, -12);
        expect(resultadoDaSoma).to.equal(8);
    });
});
