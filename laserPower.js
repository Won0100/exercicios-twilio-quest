function calculatePower(array){
    var soma = 0
    var dobra = array.map(item => item*2)
    for (var item in dobra){
        soma += dobra[item]
    }
    return soma
}

var lista = [1,2,3,4]

console.log(calculatePower(lista))