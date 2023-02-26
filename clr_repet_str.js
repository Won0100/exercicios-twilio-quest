/*
    junta as strings iguais juntas em 1 só, assim removendo as duplicatas juntas.
*/

function removeDuplicateCharacters(string) {
    var convert = string.split('')
    var novaLista = []
    /*var semRepetidos = convert.filter(function(elemento, index){
        return string.indexOf(elemento) == index;
    })
    var junta = semRepetidos.join('')
    return junta*/
    var anterior = ''
    for(var i = 0;i < convert.length;i++){
        if(convert[i] != anterior){
            anterior = convert[i]
            novaLista.push(anterior)
        }
    }
    var junta = novaLista.join('')
    return junta
  }

  console.log("Test case 1:");
  console.log(removeDuplicateCharacters("aabbcc"));
  
  console.log("Test case 2:");
  console.log(removeDuplicateCharacters("asdfjkl;"));
  
  console.log("Test case 3:");
  console.log(removeDuplicateCharacters("abba"));
  
  console.log("Test case 4:");
  console.log(removeDuplicateCharacters("fffunnn"));

  console.log(removeDuplicateCharacters('asdfjkl'))


