// Intermediate Algorithm Scripting: Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {

  let minNumber = Math.min(arr[0], arr[1]);       //Find the min number within the array to compute
  let maxNumber = Math.max(arr[0], arr[1]);       // Find the max number within the array to compute 

  let result = 0;                                 // Result initially at 0 which will be returned with the sum of min/ max value of arr

  for (let i = minNumber; i <= maxNumber; i++) {   // For loop to iterate through both min/ max values to find sum up inidivual values for 'result'
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

  for (let i = 0; i < arr1.length; i++) {       // Iterate through arr1 and match against the index of arr2
    if (arr2.indexOf(arr1[i]) === -1) {       // If indexOf arr2 is -1 then that element is not present in arr1
      newArr.push(arr1[i]);                   // newArr will push the element missing from arr1
    }
  }

  for (let j = 0; j < arr2.length; j++) {       // A reverse iteration is performed to match indexOf arr1 to arr2
    if (arr1.indexOf(arr2[j]) === -1) {
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

  for (let i = 0; i < firstArray.length; i++) {             // Iterating through firstArray and setting the iteration to let iteratedArray below
    let iteratedArray = firstArray[i];

    if (forArguments.indexOf(iteratedArray) === -1) {       // If the forArguments variable is not present inside the iteratedArray variable 
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

  return collection.filter(function (obj) {                           // Filter through the collection to find the variable 'keys'
    for (let key of keys) {                                          // Looking within the key inside 'keys' which is currently the source (last: "capulet")
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {     // Checking to see if the obj doesn't have key inside the 'keys' ie (if last: "capulet" isn't inside collection)
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

  for (let i = 0; i < newString.length; i++) {                          // Iterate through the 'st' and check to see if 'before' value is present using code below
    if (newString[i] === before) {                                      // Check to see if 'before' is present in newString iteration. If present then return newString[i] to = 'after'

      if (newString[i][0] === newString[i][0].toUpperCase()) {          // Extra conditionals to check whether the iterated value has a capatalised initial letter
        after = after[0].toUpperCase() + after.slice(1);
      };

      if (newString[i][0] === newString[i][0].toLowerCase()) {          // Extra conditionals to check whether the iterated value has a lower cased initial letter
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

  function calculate(initial) {                                        // This is a helper function using base pairs as arguments
    if (initial === "A") {
      return "T"
    } else if (initial === "T") {
      return "A"
    } else if (initial === "G") {
      return "C"
    } else if (initial === "C") {
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

  for (let i = 0; i < focussedAlphabet.length; i++) {                     // Iterating through focussed alphabet 

    if (str.indexOf(focussedAlphabet[i]) === -1) {                         // Using the iterated focussed alphabet and checking which index is the str. If index is -1 it means the letter is absent
      return focussedAlphabet[i];                                       // If the letter is absent, return the absent letter using focussedAlphabet[i]
    }
  }

  if (str.indexOf(alphabet > 0)) {                                       // If all of the alphabet is present then return undefined. (If index is > 0 then all letters are present)
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
      if (finalCollection.indexOf(individualValues) === -1) {
        finalCollection.push(individualValues);                        // If not then final collection will push the individual values
      }
    });
  });

  return finalCollection
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertedElements(letter) {                                  // Create a function which takes in symbols and returns their HTML entities
  if (letter === "&") {
    return "&amp;"
  } else if (letter === "<") {
    return "&lt;"
  } else if (letter === ">") {
    return "&gt;"
  } else if (letter === "'") {
    return "&apos;"
  } else if (letter === '"') {
    return "&quot;"
  }
}


function convertHTML(str) {

  let convertToCharacters = ["&", "<", ">", '"', "'"];              // Create a variable filled with symbols to lookout for and convert

  for (let i = 0; i < str.length; i++) {                             // Iterate through the str and check to see which index is the symbol within the str
    if (convertToCharacters.indexOf(str[i]) != -1) {                // If indexOf convertToCharacters is NOT -1 (Meaning its present inside the str)
      str = str.slice(0, i) +                                     // Str will slice at index 0 and end at index i (Where the symbol is) creating a new str without the symbol
        convertedElements(str[i]) +                                 // The str will + the function (convertToElements) created earlier and pass in the str at position [i]
        str.slice(i + 1)                                            // The final str will slice the initial str at position (i + 1) which is the next index after position i
    };
  }

  return str;
}

let result = convertHTML("Sixty > twelve");

console.log(result)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and//8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {

  let fibbonacciSequence = [0, 1];                                  // Initialise the fibbonacci sequence into a variable
  let sumOfOddFibbonacciNumbers = 1;                                // Set the sum of all fib numbers (0 + 1 = 1)
  let counter = fibbonacciSequence[fibbonacciSequence.length - 2] + // Counter will include fib sequence at position -2 and -1
    fibbonacciSequence[fibbonacciSequence.length - 1]

  while (counter <= num) {                                           // While counter is below num , fib sequence will push counter
    fibbonacciSequence.push(counter);

    if (counter % 2 != 0) {                                           // If counter is an even number the sum of fib numbers will = counter (which will count the odd numbers)
      sumOfOddFibbonacciNumbers += counter;
    }

    counter = fibbonacciSequence[fibbonacciSequence.length - 2] +  // Counter will sum up all odd numbers
      fibbonacciSequence[fibbonacciSequence.length - 1]

  }
  return sumOfOddFibbonacciNumbers;

}

sumFibs(4);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Sum All Primes
//A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. 
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function isPrime(number) {                                             // Create a function that first finds the odd number using a given number

  let counter = 2;                                                    // Start the counter at 2 and find remainders of numbers using moduler to find odd numbers

  while (counter < number) {                                      // While counter is lower than number look for if statement
    if (number % counter === 0)                                 // If the remainder of counter while dividing into number is 0 then this is false (even number)
    { return false }

    counter += 1                                               // In the meantime the counter will += 1 then return true
  }
  return true
}

function sumPrimes(num) {

  if (num <= 1)                                                // So no negative numbers or 0 is inputted
  { return "Numbers lower than zero invalid" }

  let counter = 2;                                            // Initialise counter again at 2
  let sum = 0;                                                // Initialise sum at 0 - This will be the final output

  while (counter <= num) {                                      // While counter is lower or equal to num inputted by user
    if (isPrime(counter) === true)                               // Using the previously built function above isPrime(number) is true then sum will + counter
    { sum += counter }

    counter += 1;
  }

  return sum;
}



sumPrimes(10);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {

  let lowerNum, higherNum;

  if (arr[0] > arr[1]) {
    lowerNum = arr[1];
    higherNum = arr[0];
  } else {
    lowerNum = arr[0];
    higherNum = arr[1]
  }

  let range = getRange(lowerNum, higherNum);

  let multiple = 1;
  while (multiple < 1000000) {
    let higherCommonMultiple = (lowerNum * multiple) * higherNum;

    let trueCount = 0;
    for (let i = 0; i < range.length; i++) {

      if (higherCommonMultiple % range[i] === 0) {
        trueCount += 1;

        if (trueCount === range.length) {
          return higherCommonMultiple
        }
      }
    }

    multiple += 1;
  }

  return arr;
}

function getRange(lowN, highN) {
  let resultRange = [];
  for (let i = lowN; i <= highN; i++) {
    resultRange.push(i);
  }
  return resultRange;
}

smallestCommons([1, 5]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {

  let result = [];                                                   // Initialise the result with an empty array, so nothing is return if n if not within the array

  for (let i = 0; i < arr.length; i++) {                               // The for loop will iterate through the array and match against the number within the function (n)

    if (func(arr[i])) {                                                // If func(n) is at position arr[i], this means that n is present within the arr 
      return arr.slice(i);                                           // arr.slice will create new array from position i
    }
  }


  return result;                                                     // If nothing else is present, then result will return an empty array
}

dropElements([1, 2, 3], function (n) { return n < 3; });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr, result = []) {

  arr.forEach((item) => {                                            // Loop created for each item being an array
    if (Array.isArray(item)) {                                       // If item is an array, then the loop will open the array to find the item
      steamrollArray(item, result);
    } else {
      result.push(item);                                             // If item is NOT an array, then the loop will push the item onto the result array
    }

  });

  return result;
}

let result = steamrollArray([1, [2], [3, [[4]]]]);

console.log(result)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {

  return str.split(" ").map(binaryDataPoint => {                     // Initially return the str split which splits the str into individual arrays to be mapped out
    let characterCode = parseInt(binaryDataPoint, 2)                 // characterCode will be the binary equivilent of the str with a radix of 2
    let decipheredLetter = String.fromCharCode(characterCode)
    return decipheredLetter;
  }).join("");

}

let binaryData =
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {

  let result = true;                                                // Initialise the result to start at "true" , or If pre is in collection then return true 
  for (let i = 0; i < collection.length; i++) {                    // Iterate through the collection array to be compared against the predicate (pre)
    if (                                                        // The if statement will find all "falsy" values within the collection to return the result as false 
      Number.isNaN(collection[i][pre]) ||
      collection[i][pre] === undefined ||
      collection[i][pre] === 0 ||
      collection[i][pre] === null ||
      collection[i][pre] === ""
    ) {
      return false
    }
  }

  return result;

}
truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {

  let firstArgument = arguments[0];                                   // Initialise the first argument to be the first index as it will always be defined

  if (arguments.length > 1) {                                          // The "arguments" is the arguments or parameters of the function addTogether()
    let secondArgument = arguments[1];                                  // The second argument will be defined only if there is more than 1 argument
    if (argumentCheck(firstArgument) !== undefined &&                   // This will check if the first and second is NOT undefined, meaning that it holds a number each
      argumentCheck(secondArgument) !== undefined) {
      return firstArgument + secondArgument                          // Then both numbers will be summed up
    } else {
      return undefined                                               // If one of the two arguments is undefined then the function will return undefined
    }
  }

  else if (arguments.length === 1) {                                   // // The second argument will be defined only if there is more than 1 argument
    if (argumentCheck(firstArgument) === undefined) {                  // This will use the function below to check if the second argument is a number and if so then return undefined
      return undefined
    } else {
      return function (secondArgument) {                                // Or if the second or first argument is a number then return the sum, if not then return undefined
        if (argumentCheck(firstArgument) !== undefined &&
          argumentCheck(secondArgument) !== undefined) {
          return firstArgument + secondArgument
        }
      }
    }
  }

}

function argumentCheck(argument) {                                    // This function will look to see if the given argument is a number and used above
  if (typeof argument === "number") {
    return argument;
  } else {
    return undefined;
  }
}

console.log(addTogether(2, 3));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

// Run the tests to see the expected output for each method. 
// The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

var Person = function (firstAndLast) {

  this.getFullName = function () {                                      // This will give the full name of the object
    return firstAndLast;
  };

  this.getFirstName = function () {                                      // This will split the array and give the first name only
    return firstAndLast.split(" ")[0];
  };

  this.getLastName = function () {                                       // This will split the array and give the last name only
    return firstAndLast.split(" ")[1]
  };

  this.setFullName = function (newFullName) {                            // This will set the newFullName and replace the previous full name
    return firstAndLast = newFullName
  };

  this.setFirstName = function (newFirstName) {                          // This will set the new first name, replace the previous first name and use the predefined last name
    return firstAndLast = newFirstName + " " + this.getLastName();
  };

  this.setLastName = function (newLastName) {                            // This will set the new first name, replace the previous last name and use the predefined first name
    return firstAndLast = this.getFirstName() + " " + newLastName;
  };

};

var bob = new Person('Bob Ross');
bob.getFullName();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
  var GM = 398600.4418;                                                // Predefined Gravitational Mass
  var earthRadius = 6367.4447;                                         // Predefined Earth Radius

  let orbitalPeriodResults = [];

  arr.forEach(function (dataPoint) {
    let translatedDataPoint = {};
    let twoTimePie = Math.PI * 2;
    let earthRadiusPlusAvgAltitude = 6367.4447 + dataPoint.avgAlt;
    let topOfDivider = Math.pow(earthRadiusPlusAvgAltitude, 3);

    let numberToSquare = topOfDivider / GM;
    let squaredResult = Math.sqrt(numberToSquare);

    let orbitalPeriodResult = twoTimePie * squaredResult;

    translatedDataPoint.name = dataPoint.name;
    translatedDataPoint.orbitalPeriod = Math.round(orbitalPeriodResult);


    orbitalPeriodResults.push(translatedDataPoint)
  });


  return orbitalPeriodResults;
}

orbitalPeriod([
  {
    name: "sputnik",                                                  // DataPoints
    avgAlt: 35873.5553
  }]);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {

  let polishedString = str.replace(/\W+|_/g, "").toLowerCase();       // Initialise a variable by using regex to find all white spaces and underscores globally before lowercase
  let reversedString = polishedString.split("").reverse().join("");   // Split the polished str to be reveresed and rejoined

  if (polishedString != reversedString) {                              // If the polished str is not the same as reversed str then return false
    return false
  }

  return true;
}

palindrome("eye");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {

  let result = ""                                                                               // Initialise an empty variable
  let romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];   // Initialise Roman numerals
  let englishNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]                   // Initialise English numerals


  for (let i = 0; i < englishNumbers.length; i++) {                                               // Iterate through each english number until length complete
    while (num >= englishNumbers[i]) {                                                          // Action to perform for every iteration that num is more than or equal to englishNumber[i]
      result += romanNumbers[i];                                                            // Result is romanNumbers at position [i]
      num -= englishNumbers[i];                                                             // num will decrease until iteration is complete
    }
  }



  return result;
}

convertToRoman(12);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



function rot13(str) {

  let decodedResult = "";                                                     // Initialise an empty string
  let alphabetStart = "ABCDEFGHIJKLM";                                        // Initialise the first 13 characters of alphabet
  let alphabetEnd = "NOPQRSTUVWXYZ";                                          // Initialise the second 13 characters of alphabet

  for (let i = 0; i < str.length; i++) {                                        // For loop to cycle through str
    let letterToDecode = str[i];                                              // Initliase variable for str at position [i]

    if (alphabetStart.indexOf(letterToDecode) >= 0) {                             // If the indexOf letterToDecode is present 
      decodedResult += alphabetEnd[alphabetStart.indexOf(letterToDecode)];      // decodedResult will be the same position in the opposite alphabet varable
    } else if (alphabetEnd.indexOf(letterToDecode) >= 0) {
      decodedResult += alphabetStart[alphabetEnd.indexOf(letterToDecode)];      // Vice Versa
    } else {
      decodedResult += letterToDecode;                                          // Otherwise the decodedResult will be the letterCode
    }
  }

  return decodedResult;
}

console.log(rot13("SERR PBQR PNZC"));                                       // Returns FREE CODE CAMP

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// freeCodeCamp.org JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
//Return true if the passed string looks like a valid US phone number.

// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


function telephoneCheck(str) {

  if (str.indexOf("(") === -1 && str.indexOf(")") > -1) {
    return false;
  }

  if (str[0] === "-") {
    return false;
  }

  if (str.indexOf(")") - str.indexOf("(") >= 5) {
    return false;
  }

  let polishedPhone = str.replace(/-| /g, "");

  if (polishedPhone.indexOf("(") < polishedPhone.indexOf(")")) {
    polishedPhone = polishedPhone.replace(/\(|\)/g, "");
  }

  if (polishedPhone.length === 10) {
    return true;
  } else if (polishedPhone.length === 11 && polishedPhone[0] === "1") {
    return true;
  }



  return false;
}

telephoneCheck("555-555-5555");


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JavaScript Algorithms and Data Structures Projects: Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(
    function (acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle exact change
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function (acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Here is your change, ma'am.
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

// test here
checkCashRegister(19.5, 20.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0]
]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function to calculate Body Mass Index - Using weight & height values and returning a string value
function bmi(weight, height) {

  let result = "";
  let bmi = weight / (height * height);

  if (bmi <= 18.5) { result += "Underweight" }
  else if (bmi <= 25) { result += "Normal" }
  else if (bmi <= 30) { result += "Overweight" }
  else if (bmi > 30) { result += "obese" }





  return result;
}


console.log(bmi(95, 1.77))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////