/*
6 - Escreva uma função que receba um array de números e retornará a soma de todos os
números desse array.
Exemplo:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/
function somarNumeros(array){
    let total = 0;
    for (let i = 0; i<array.length; i++) {
        if (array[i] >=2) {
            total += array[i];
        }
    }
    return total;
}
let array = [10, 10, 10]
console.log(somarNumeros(array));