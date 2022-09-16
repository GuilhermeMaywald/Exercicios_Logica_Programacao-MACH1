/*
9 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao
segundo.
Exemplo:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true
*/

function maiorOuIgual(primerioNumero, segundoNumero) {
    if (typeof primerioNumero != typeof segundoNumero){
        return false;
    } 
    return primerioNumero > segundoNumero
}
alert(maiorOuIgual(4, 2));