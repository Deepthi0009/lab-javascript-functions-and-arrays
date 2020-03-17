// Progression #1: Greatest of the two numbers
function greatestOfTwoNumber(a,b) {
  if (a > b) 

  return a;
  
 else if (b> a) 
   
   return b;
   else 
  
   return a,b;
  
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord (strArr) {
  if(strArr.length == 0)
    return null;

  var idx = 0, len = 0;
  for(var i=0; i<strArr.length; i++) {
      if (len < strArr[i].length) {
          len = strArr[i].length;
          idx = i;
      }
  }
  return strArr[idx];
}


// Progression #3: Net Price
var sum=0;
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netprice(numbers){
for(var i=0;i<numbers.length;i++)
{
 sum+=numbers[i];
}
return sum;
}


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
function averageNumbers (numArr) {
  if(numArr.length == 0)
    return null;

  return sumArray(numArr) / numArr.length;
}
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength (strArr) {
  if(strArr.length == 0)
    return null;

  var totalLen = 0;
  totalLen = strArr.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.length
    }, 0);
  return totalLen / strArr.length;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray (strArr) {
  var uniqStrArr = [];
  var count = 0;
  for(var i=0; i<strArr.length; i++) {
      if(uniqStrArr.indexOf(strArr[i]) == -1) {
          uniqStrArr[count] = strArr[i];
          count++;
      }
  }
  return uniqStrArr;
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(strArr, word) {
  for(var i=0; i<strArr.length; i++) {
      if(word === strArr[i])
          return true;
  }
  return false;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated (strArr, word) {
  var count = 0;
  strArr.forEach(function(element){
      if(element == word)
          count++;
  });
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];