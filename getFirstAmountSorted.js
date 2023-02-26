function getFirstAmountSorted(array, num){
    var organizado = array.sort()
    var newArray = []
    for(var c=0;c < num; c++){
        newArray.push(organizado[c])
    }
    return newArray
}
var lista = ['golden', 'terrier', 'boxer']
console.log(getFirstAmountSorted(lista, 0))