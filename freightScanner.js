function scan(array){
    var contrabandCount  = 0
    for(var c=0; c < array.length; c++){
        if(array[c] === "contraband"){
            contrabandCount ++
        }
    }
    return contrabandCount
}


var lista = ['dog', 'contraband', 'cat', 'zippers', 'contraband']
function scan2(array){
    var count = 0
    array.forEach(item => {if(item == "contraband" ){count ++}})  
    return count
}

console.log(scan2(lista))

console.log(scan(lista))
