//retorna a diferença de valor entre o elemento min e o max do array
function differenceMinMax(array) {
    let minimo = Math.min(...array)
    let maximo = Math.max(...array)
    let diferenca = maximo - minimo
    return diferenca
}

console.log("Test case 1:");
console.log(differenceMinMax([1, 2, 3, 4, 5]));

console.log("Test case 2:");
console.log(differenceMinMax([6, 2, 3]));

console.log("Test case 3:");
console.log(differenceMinMax([100, 0]));
