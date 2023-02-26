// soma os valores do array, mas é melhor fazer com reduce
function sumArray(numbers) {
    var total = 0;
    for(var i = 0; i < numbers.length;i++){
      total += numbers[i];
    }
    return total;
    
  }
  
  console.log("Test case 1:");
  console.log(sumArray([1, 2, 3]));
  
  console.log("Test case 2:");
  console.log(sumArray([-1, 0, 1]));
  
  console.log("Test case 3:");
  console.log(sumArray([100, 12.0, -4.5]));
  