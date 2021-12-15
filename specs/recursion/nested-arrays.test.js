/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

function nestedAdd(array) {
  // write code here
  // declare the sum var
  let sum = 0;
  // loop through the whole array and add the elements to sum var
  for (let i = 0; i < array.length; i++) {
    // declare the "current" variable and let it have the value of current array element
    const current = array[i];
    // base case
    // if the "current" variable is an array, then recurse, if not just add to sum
    if (Array.isArray(current)) {
      // Array.isArray(variable) return 'true' if the variable is an array
      // if it's an array, then we recurse the whole function and adding to the sum
      sum += nestedAdd(current);
    }
    else{
      // if it's not an array just add the element to sum directly
      sum += current;
    }
  }
    // for loop ended.
    // return the sum
    return sum;
}
//console.log(nestedAdd([1, 2, 3]));
console.log(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11]));
/*
test.skip("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});
*/