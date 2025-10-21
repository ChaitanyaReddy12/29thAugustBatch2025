

/*2nd question
let a=[1,2,3,4]
let b=[5,6,7]
add the values as per index value from a& b 
Result is [6,8,10,4]*/

const array11: number[] = [1, 2, 3, 4, 5];
const array21: number[] = [6, 7, 8, 9,10];
const sumArray: number[] = [];

// Ensure arrays have the same length before performing index-based addition
if (array11.length === array21.length) {
    for (let i = 0; i < array11.length; i++) {
        sumArray.push(array11[i] + array21[i]);
    }
    console.log("Sum of arrays by index:", sumArray); //Sum of arrays by index: [ 7, 9, 11, 13, 15 ]
} else {
    console.log("Arrays must have the same length for index-based addition.");
}