/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/
/*
function bubbleSort(nums) {
  // code goes here
  let loop = true;
  let max_loop = (nums.length * nums.length);
  let count = 0;
  while (loop){
    for (let i = 0;i < nums.length;i++){
      count ++;
      if (count > max_loop){
        loop = false;
      }
      else if (nums[i] > nums[i+1]){
        let small = nums[i+1];
        let large = nums[i];
        nums[i+1] = large;
        nums[i] = small;
      }
    }
  }
}
*/
function bubbleSort(nums){
  // code goes here
  let swapped = false;
  do{
    swapped = false;
    for (let i = 0; i < nums.length; i++){
      if (nums[i] > nums[i+1]){
        const smaller = nums [i + 1];
        nums [i + 1] = nums[i];
        nums[i] = smaller;
        swapped = true;
      }
    }
  } while (swapped);
}
const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
bubbleSort(nums);
console.log(nums);
// unit tests
// do not modify the below code
test.skip("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
