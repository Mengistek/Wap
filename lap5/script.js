//   ******** 1 find the max *****
function max(num1, num2) {
  if (num1 > num2) return num1;
  else if (num2 > num1) return num2;
  else {
    return "they are equle";
  }
}
console.log("the max is ",max(20, 10));

// ****** number 2 *******
function maxOfThree(num1, num2, num3) {
  let largest = num1;
  if (num2 > largest) return (largest = num2);
  else if (num3 > largest) return (largest = num3);
  else return largest;
}
console.log("the maxOfThree ", maxOfThree(3, 6, 9));

// ********* 3 find if there is a vowel ****
 function  isVowel(vowel){
     let Vowels = "aeiou";
     let find = Vowels.includes(vowel);
     return find; 
 }
 
 console.log("find the vowel : ", isVowel("e"))




// ********* 4 ******

function sum1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  {
    return sum;
  }
}
console.log("the sum of",sum1([1, 2, 3, 4]));

function multiply(arr) {
  let multi = 1;
  for (let i = 0; i < arr.length; i++) multi *= arr[i];
  {
    return multi;
  }
}
console.log('Here is the multiply',multiply([1, 2, 3, 4]));

// ************ test lap 5 *******

// let arr = [3,6,7,9,4];
// arr.reverse()
// console.log("reverse arr:" ,arr)
function reverse(arr){
  let wordsreverse= "";
  for( let i = arr.length -1; i >= 0 ; i--){
        wordsreverse += arr[i];
  }
    
  return wordsreverse
}
 console.log("reverse of Mengs : ", reverse("Mengs"))

 
// ********** 6 ******
function findLongestWordLength(arr) {
  
  let length = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      length = arr[i].length;
    }
  }
  console.log(length);
}
findLongestWordLength(["long", "someOne"]);

// ************* 7 **********
console.log("**Filter words longer than i characters ** ");
function filterLongWords(n, i) {
  return n.filter((f) => f.length > i);
}
let words = ["Mengs", "David", "Silbana"];
console.log("filterLongwords : ", filterLongWords(words, 5));

function isLongerThan(word, length) {
  return word.length > length;
}
 
// **** fiterLongWords using for loop

function filterLongWords(words, i) {
  // Filter words longer than i characters
  var result = [];
  for (var j = 0; j < words.length; j++) {
    if (isLongerThan(words[j], i)) {
      result.push(words[j]);
    }
  }
  return result;
}
var wordArray = ["apple", "banana", "orange", "grape", "kiwi"];
var minLength = 5;

var result = filterLongWords(wordArray, minLength);
console.log(result);

//*********** 8  computeSumOfSquares *********/

function computeSumOfSquares(x) {
  return x.map((m) => m * m).reduce((x, y) => y + x, 0);
}
let compute = [1, 2, 3];
console.log("computeSumOfSquares ;", computeSumOfSquares(compute));

// ******* 9  printOddNumbersOnly *******

function printOddNumbersOnly(x) {
  return x.filter((f) => f % 2 !== 0);
}
let number = [2, 5, 6, 7, 8, 9, 1];
console.log("printOddNumbersOnly :", printOddNumbersOnly(number));

//  ******** 10 computeSumOfSquaresOfEvensOnly******
function computeSumOfSquaresOfEvensOnly(y) {
  return y
    .filter((f) => f % 2 == 0)
    .map((m) => m * m)
    .reduce((x, y) => y + x, 0);
}
let input = [1, 2, 3, 4, 5];
console.log(
  "computeSumOfSquaresOfEvensOnly :",
  computeSumOfSquaresOfEvensOnly(input)
);

// ******** 11  functions, sum(…) and multiply(…) defined in Problem 4
// 4a sum
function sumArray(arr) {
  return arr.reduce((x, y) => x + y, 0);
}
let findsumOf = [1, 2, 3, 4];
console.log("sum using reduce ", sumArray(findsumOf));
// 4b multiply
function multiply(arr) {
  return arr.reduce((x, y) => y * x, 1);
}
let multiplyodArray = [1, 2, 3, 4];
console.log("find Multiply using reduce", multiply(multiplyodArray));

// ******** 12 prints-out the Fibonacci sequen . (e.g. printFibo(n=1, a=0, b=1)

function printFibo(n, a, b) {
  let result = "";
  let temp;
  while (n > 0) {
    result += a + ",";
    temp = a + b;
    a = b;
    b = temp;
    n--;
  }
  result = result.substring(0, result.length - 1);
  return result;
}

console.log("printFibo : ", printFibo(9, 0, 1));
