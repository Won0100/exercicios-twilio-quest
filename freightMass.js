function calculateMass(array){
    var contador =  array.reduce((currentSum, nextWord) =>{
        currentSum += nextWord.length
        return currentSum}, 0)
    return contador
}

const cargo = ['cat', 'dog', 'bird'];
console.log(calculateMass(cargo))