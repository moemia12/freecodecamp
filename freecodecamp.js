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

// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object // has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must // return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {

    let keys = Object.keys(source);                                     // Find the key of the source by declaring a variable

      return collection.filter(function(obj){                           // Filter through the collection to find the variable 'keys'
        for (let key of keys){                                          // Looking within the key inside 'keys' which is currently the source (last: "capulet")
          if(!obj.hasOwnProperty(key) || obj[key] !== source[key]){     // Checking to see if the obj doesn't have key inside the 'keys' ie (if last: "capulet" isn't inside collection)
            return false
    }
  }

  return true
})

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {

  let replaceWithSpaces = str.replace(/([a-z])([A-Z])/g, "$1 $2");    // Use regex to find areas where lower/uppercase characters meet and replace with a whitespace(the $1$2 is spaced by $1 $2)
  let replaceWithDashes = replaceWithSpaces.replace(/\s|_/g, "-");    // Now that all white spaces have been inpputed, the spaces will be replaced with a dash (-)



  return replaceWithDashes.toLowerCase();                             // replaceWithDashes variable, being the final variable is transformed to lower case
}

spinalCase('This Is Spinal Tap');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before)
// Third argument is what you will be replacing the second argument with (after).

//Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {

  let newString = str.split(" ");                                     // Declare a new variable which holds the 'str' split into individual string values

  for(let i = 0; i < newString.length; i++){                          // Iterate through the 'st' and check to see if 'before' value is present using code below
    if(newString[i] === before){                                      // Check to see if 'before' is present in newString iteration. If present then return newString[i] to = 'after'

      if(newString[i][0] === newString[i][0].toUpperCase()){          // Extra conditionals to check whether the iterated value has a capatalised initial letter
        after = after[0].toUpperCase() + after.slice(1);
        };

      if(newString[i][0] === newString[i][0].toLowerCase()){          // Extra conditionals to check whether the iterated value has a lower cased initial letter
        after = after[0].toLowerCase() + after.slice(1);
        };

       newString[i] = after                                           // Once all conditionals are met, newString at position [i] will be replaced with 'after'
    }   
  }


  return newString.join(" ");                                         // The final string will join together using spaces (" ")
}

let result = myReplace("I think we should look up there", "up", "Down");

console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {

  function calculate(initial){                                        // This is a helper function using base pairs as arguments
    if(initial === "A"){
      return "T"
    } else if (initial === "T"){
      return "A"
    } else if (initial === "G"){
      return "C"
    } else if (initial === "C"){
      return "G"
    } 
  }
  
  let split = str.split("").map(newStr => {                           // The str is split, creating individual strings. It is then passed into a map function which inserts data
    let pair = [newStr, calculate(newStr)]                            // Using the helper function above
    return pair
  });
  
  
  return split
  
  }
  
  pairElement("GCG");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {

  let alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");              // Initialise the alphabet into a string with individual strings
  let startingPosition = alphabet.indexOf(str[0]);                      // Initialise a starting position of the str against the alphabet variable
  let focussedAlphabet = alphabet.slice(startingPosition);              // This will use the alphabet as a reference to the starting position to be iterated below 

  for(let i = 0; i < focussedAlphabet.length; i++){                     // Iterating through focussed alphabet 

    if(str.indexOf(focussedAlphabet[i])=== -1){                         // Using the iterated focussed alphabet and checking which index is the str. If index is -1 it means the letter is absent
      return focussedAlphabet[i];                                       // If the letter is absent, return the absent letter using focussedAlphabet[i]
    } 
  }

  if (str.indexOf(alphabet > 0)){                                       // If all of the alphabet is present then return undefined. (If index is > 0 then all letters are present)
      return undefined
    };

  return focussedAlphabet

}

let result = fearNotLetter("stvwx");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(arr) {

  let finalCollection = [];                                            // Initialise finalCollection array to be the output of the function 
  let values = Object.values(arguments);                               // Initialise the values of the array passed into the uniteUnique function

  values.forEach(groupOfGroups => {                                    // Check to see if the values variable is present within the finalCollection
    groupOfGroups.forEach(individualValues => {
      if(finalCollection.indexOf(individualValues) === -1){
        finalCollection.push(individualValues);                        // If not then final collection will push the individual values
      }
    });
  });
  
  return finalCollection
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////