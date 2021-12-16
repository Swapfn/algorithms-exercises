/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

// old code, not optimized
/* function insertionSort(nums) {
  // code goes here
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > nums[i+1]){
      const low = nums[i+1];
      nums[i+1] = nums[i];
      nums[i] = low;
      if (i === 0 || (nums[i+1] > nums[i] && nums[i] > nums[i-1])){
        continue;
      }else{
      for(let j=i; j>0; j--)
      {
      if (nums[j-1]>nums[j]){
      const low = nums[j];
      nums[j] = nums[j-1];
      nums[j-1] = low;
      }else{
        break;
          }
      }
      }
      }
    }
  return nums;
}
*/ 
function insertionSort(nums){
  // main loop to iterate over the whole array of nums
  for (let i = 1; i < nums.length; i++) {
      // sorting loop, from current position of i to 0
      for (let j = i; j >= 0; j--) {
          // if the current number is bigger than the one before it, sort them
          if (nums[j-1] > nums[j]) {
              let low = nums[j];
              nums[j] = nums [j-1];
              nums[j-1] = low;
          }
      }
  }
  return nums;
}
const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log(insertionSort(nums));
// unit tests
// do not modify the below code
/*test.skip("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});*/
