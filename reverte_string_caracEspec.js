function reverseSentence(sentence){
    var teste = sentence.split(' ')
    if(teste.length > 1){
        //isola o ultimo caractere se for caracter especial
        var ultimo = '';
        var especial = false
    if(sentence.includes("?") || sentence.includes("!") || sentence.includes(".")){
        ultimo = sentence.split('').slice(-1)
        especial = true
    };

    //transforma em lista
    var separa = sentence.split(' ')
    var primeira = separa[0].toLowerCase()
    var primeira = primeira.split()
    var array = primeira.concat(separa.slice(1))

    //agora tem que tirar o ultimo caractere da ultima palavra
    if(especial){
        var ultima_palavra_sem_ponto = array[array.length -1].slice(0, -1)
        var ultima_palavra_sem_ponto = ultima_palavra_sem_ponto[0].toUpperCase() + ultima_palavra_sem_ponto.substring(1)
    }else{
        var ultima_palavra_sem_ponto = array[array.length -1]
        var ultima_palavra_sem_ponto = ultima_palavra_sem_ponto[0].toUpperCase() + ultima_palavra_sem_ponto.substring(1)
    }
    
    //reorganiza as palavras e deixa tudo em minusculo
    var organiza = array.slice(0,-1).reverse()
    //junta tudo
    var junta_tudo = organiza.join(' ')
    var resposta = ultima_palavra_sem_ponto + ' ' + junta_tudo + ultimo

    return resposta
    }else{
        return sentence
    }
    
}
console.log("Test case 1:");
console.log(reverseSentence("How are you today?"));

console.log("Test case 2:");
console.log(reverseSentence("I visited Ethiopia last year."));

console.log("Test case 3:");
console.log(reverseSentence("Hurray!"));

console.log("Test case 4:");
console.log(reverseSentence("Teste aqui a frase"));

console.log("Test case 5:");
console.log(reverseSentence("Tacos in Mexico are tasty."));



/*
var tornaLista = sentence.split(' ')
var ultima = tornaLista.pop()
var splitada = ultima.split('')
var ponto = splitada.pop()
var reverteLista = tornaLista.reverse()
var primeiraPalavra = reverteLista[0].toUpperCase()

console.log(tornaLista)
console.log(ultima)
console.log(splitada)
console.log(ponto)
console.log(reverteLista)
console.log(primeiraPalavra)
*/