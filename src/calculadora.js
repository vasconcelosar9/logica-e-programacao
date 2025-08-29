function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;    
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
    const resultadoDaSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
    const mediaDeDoisValores = resultadoDaSomaDeDoisValores / 2;
    return mediaDeDoisValores;
}

module.exports = {
    somarDoisNumeros,
    calcularMediaDeDoisNumeros
}