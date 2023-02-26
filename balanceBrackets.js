function balanceBrackets(array) {
    // TODO: check for balanced brackets!
    let fifo = []
    for(var caractere=0;caractere < array.length;caractere++){
        if(array[caractere] === "{" || array[caractere] === "(" || array[caractere] === "["){
            fifo.push(array[caractere])
            continue
        }
        if(fifo.length === 0){
            return false
        }
        let check;
        switch(array[caractere]){
            case ')':
                check = fifo.pop()
                if(check === '{' || check === '['){
                    return false
                }
                break
            case '}':
                check = fifo.pop()
                if(check === '(' || check === '['){
                    return false
                }
                break
            case ']':
                check = fifo.pop()
                if(check === '{' || check === '('){
                    return false
                }
                break
        }
        }
        return (fifo.length === 0)

    }

  
console.log("Test case 1:");
console.log(balanceBrackets(["{", "}"]).toString());

console.log("Test case 2:");
console.log(balanceBrackets(["[", "(", "]", ")"]).toString());

console.log("Test case 3:");
console.log(balanceBrackets([]).toString());

console.log("Test case 4:");
console.log(balanceBrackets(["{", "[", "}"]).toString());

console.log("Test case 5:");
console.log(balanceBrackets(["]", "(", ")", "["]).toString());

console.log("Test case 6:");
console.log(balanceBrackets(["(", ")", "[", "(", "{", "}", ")", "]"]).toString());