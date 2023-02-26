const argumentValue1 = process.argv[2].toLowerCase()
const argumentValue2 = process.argv[3].toLowerCase()
let lista = [argumentValue1, argumentValue2]
lista.sort()

if(lista.indexOf(argumentValue1) < lista.indexOf(argumentValue2)){
    console.log(-1)
}else if (argumentValue1 === argumentValue2){
    console.log(0)
}else {
    console.log(1)
}





/*for(let i=0;i<lista.length;i++){
    if(lista.indexOf(lista[i]) < )
}*/
