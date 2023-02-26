const argumentValue = process.argv[2];
const num = Number(argumentValue)
let output = '';

if (num % 3 == 0){
    output += "Java"
}

else if (num % 5 == 0){
    output += "Script"
}

else {
    output = argumentValue
}

if (num % 3 == 0 &&  num % 5 == 0){
    output = "JavaScript"
}

console.log(output)