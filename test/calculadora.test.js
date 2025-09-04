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

    it('A função deve ser capaz de somar dois números negativos', function () {
        const resultadoDaSoma = somarDoisNumeros(-5, -10);
        expect(resultadoDaSoma).to.equal(-15);
    });

    it('A função deve ser capaz de somar dois números zerados', function () {
        const resultadoDaSoma = somarDoisNumeros(0, 0);
        expect(resultadoDaSoma).to.equal(0);
    });
});