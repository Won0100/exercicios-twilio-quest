var lista = ['contraband', 'apples', 'cats', 'contraband', 'contraband']
function scan(array){
    var conta = []
    for(var i = 0; i < array.length; i++){
        if(array[i] === 'contraband'){
            conta.push(i)
        }
    }
    return conta
}

console.log(scan(lista))