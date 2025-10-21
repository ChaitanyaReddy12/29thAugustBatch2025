

/*let file1=['a','b','c','d']
let file2=['d','e','f','g']
Remove the duplicate and print the resultfile ['a','b','c','e','f','g']*/

function removeDuplicatesFromTwoArrays<T>(arr1: T[], arr2: T[]): T[] {
  // Concatenate the two arrays
  const combinedArray = arr1.concat(arr2);

  // Create a Set from the combined array to automatically remove duplicates
  const uniqueSet = new Set(combinedArray);

  // Convert the Set back to an array
  const uniqueArray = Array.from(uniqueSet);

  return uniqueArray;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const result = removeDuplicatesFromTwoArrays(array1, array2);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7]

const stringArray1 = ["apple", "banana", "orange"];
const stringArray2 = ["banana", "grape", "kiwi"];

const stringResult = removeDuplicatesFromTwoArrays(stringArray1, stringArray2);
console.log(stringResult); // Output: ["apple", "banana", "orange", "grape", "kiwi"]

let file1=['a','b','c','d']
let file2=['d','e','f','g']

const result1 = removeDuplicatesFromTwoArrays(file1, file2);
console.log(result1); // Output: ['a','b','c','e','f','g']

/*[
  1, 2, 3, 4,
  5, 6, 7
]
[ 'apple', 'banana', 'orange', 'grape', 'kiwi' ]
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
]*/