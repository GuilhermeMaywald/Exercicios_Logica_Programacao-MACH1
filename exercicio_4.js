// 4 - Criar uma função que receba um array de números e retorne o menor número desse array.
// Exemplo:
// menorNumero([10, 5, 35, 65]) // retornará 5
// menorNumero([5, -15, 50, 3]) // retornará -15

function menorNumero(arrNumeros) {
    let menor = arrNumeros[0]; // primeiro elemento

    for (let i in arrNumeros) { // indices
        if (arrNumeros[i] < menor) {
            menor = arrNumeros[i];
        }
    }
    return menor;
}
console.log(menorNumero([10, 50, 3, 65]));