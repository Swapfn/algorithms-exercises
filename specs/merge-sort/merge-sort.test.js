/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/


// arrow function
const mergeSort = (nums) => {
  // code goes here
  // mergeSort to divide the array until it's a single sorted array
  // if array of [1] return the array
  if (nums.length == 1) {
    return nums;
  }

  // split the array 
  let arrayOne = nums.slice(0, nums.length/2);
  let arrayTwo = nums.slice(nums.length/2, nums.length);

  // recursion part
  arrayOne = mergeSort(arrayOne);
  arrayTwo = mergeSort(arrayTwo);

  // return to the merge function to sort&merge
  return merge(arrayOne, arrayTwo);
};


// merge function
function merge (arrayOne, arrayTwo){
  let arrayFinal = [];

  // compare the two arrays
  while (arrayOne.length > 0 && arrayTwo.length > 0){
    if (arrayOne[0] > arrayTwo[0]) {
      arrayFinal.push(arrayTwo.shift());
    } else {
      arrayFinal.push(arrayOne.shift());
    }
  }

  // if one array is empty, enter the rest of the sorted items into the end of the final list
  while (arrayOne.length > 0) {
    arrayFinal.push(arrayOne.shift());
  }

  while (arrayTwo.length > 0) {
    arrayFinal.push(arrayTwo.shift());
  }

  return arrayFinal;
}



const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
const ans = mergeSort(nums);
console.log(ans);

// unit tests
// do not modify the below code
/* test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}); */
