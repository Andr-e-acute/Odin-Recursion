// Assignment 2
// Build a function mergeSort that takes in an array and returns a sorted array,
// using a recursive merge sort methodology. \

// Tips:
// Think about what the base case is and what behavior is happening again and again\
//  and can actually be delegated to someone else (e.g. that same function!).

function mergeSort(arr) {
  console.log("mergesort parameter :" + arr);
  //base case single value return this value as Array

  if (arr.length == 1) {
    return arr;
  }
  //  get halfIndex
  // split the array in half

  // 2*mergeSort each half

  // return merge(left,right)

  // when first baseCase strat to merge call merge.
}

function merge(leftArr, rightArr) {
  // empty tempArr
  // can this be solved with recursion?(try for practice)
  // while/do  one of the arrays is not empty
  //check which one is smaller push it to the return arr
  // if one of the array is empty concat the other one
  // return whole array
}

// An input of
// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// should return [0, 1, 1, 2, 3, 5, 8, 13],
// and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
console.log(mergeSort([1]));
