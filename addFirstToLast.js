var lista = ['first', 'second', 'third']
function addFirstToLast(array){
    if (array == ""){
        return ""
    }
    var first = array[0]
    var last = array[array.length -1]
    return first + last
}
