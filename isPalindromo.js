function isPalindrome(string) {
  var regex = /\s/g
  var nova_string = string.replace(regex, '').toLowerCase()
  var reverse = string.split('').reverse().join('').replace(regex,'').toLowerCase()
  var teste = reverse == nova_string
  console.log(string)
  console.log(reverse)
  console.log(nova_string)
  return teste
  }

console.log("Test case 1:");
console.log(isPalindrome("tacocat"));

console.log("Test case 2:");
console.log(isPalindrome(""));

console.log("Test case 3:");
console.log(isPalindrome("heLLo"));

console.log("Test case 4:");
console.log(isPalindrome("Never odd or even"));