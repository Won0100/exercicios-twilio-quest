function transform(array){
    var transforma = array.map(item => item.toUpperCase())
    return transforma
}

const cargo = ["apples", "ray guns", "oranges"];

console.log(transform(cargo))