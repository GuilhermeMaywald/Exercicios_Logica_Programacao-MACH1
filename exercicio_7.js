/*
7 - Elabore uma função que recebe um número como parâmetro e retorne uma string com o
símbolo "+" na quantidade especificada no parâmetro.
Exemplo:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

function simboloMais(quantidade) {
    let resultado = '';

    for (let i = 0; i < quantidade; i++) {
        resultado += '+';
        return resultado;
    }
}
alert(simboloMais(resultado));