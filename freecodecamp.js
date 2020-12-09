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
    
    sumAll([1, 4]);                                 // Any number inside this array will be summed 
    

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Diff Two ArraysPassed
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    var newArr = [];
  
        for(let i = 0; i < arr1.length; i++){       // Iterate through arr1 and match against the index of arr2
            if(arr2.indexOf(arr1[i]) === -1){       // If indexOf arr2 is -1 then that element is not present in arr1
            newArr.push(arr1[i]);                   // newArr will push the element missing from arr1
            }
        }     
  
        for(let j = 0; j < arr2.length; j++){       // A reverse iteration is performed to match indexOf arr1 to arr2
            if(arr1.indexOf(arr2[j]) === -1){
            newArr.push(arr2[j]);
            }
        }
  
    return newArr;
}
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

//Note
//You have to use the arguments object.

  function destroyer(arr) {

    let finalElement = [];                                  // Declaring the final element to be displayed
    let firstArray = Object.values(arr);                    // Initial Array found below is allocated to let firstArray
    let forArguments = Object.values(arguments).splice(1);  // This is the arguments allocated within the function (splicing starts from index 1 to infinity)
    
    for(let i = 0; i < firstArray.length; i++){             // Iterating through firstArray and setting the iteration to let iteratedArray below
      let iteratedArray = firstArray[i];
    
      if(forArguments.indexOf(iteratedArray) === -1){       // If the forArguments variable is not present inside the iteratedArray variable 
        finalElement.push(iteratedArray)                    // Then the finalElement variable will push the iteratedArray variable
      }
    }
    
      return finalElement;
    }
    
    console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////