function scanAndFilter (array, string){
    let filtra = array.filter(item => item != string);
    return filtra
}

const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

const filteredCargo = scanAndFilter(cargo, 'ray guns')
console.log(filteredCargo)