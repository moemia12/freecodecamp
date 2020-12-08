// Intermediate Algorithm Scripting: Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {

    let minNumber = Math.min(arr[0], arr[1]);       //Find the min number within the array to compute
    let maxNumber = Math.max(arr[0], arr[1]);       // Find the max number within the array to compute 
    
    let result = 0;                                 // Result initially at 0 which will be returned with the sum of min/ max value of arr
    
    for (let i = minNumber; i <= maxNumber; i++){   // For loop to iterate through both min/ max values to find sum up inidivual values for 'result'
      result += i;
    }
    
    return result
    
    }
    
    sumAll([1, 4]);
    

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////