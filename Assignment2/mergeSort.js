// Assignment 2
// Build a function mergeSort that takes in an array and returns a sorted array,
// using a recursive merge sort methodology. \

// Tips:
// Think about what the base case is and what behavior is happening again and again\
//  and can actually be delegated to someone else (e.g. that same function!).

function mergeSort(arr) {
  //   console.log("mergesort parameter :" + arr);
  //base case single value return this value as Array

  if (arr.length == 1) {
    // console.log("baseCase with:" + arr);
    return arr;
  }
  //  get halfIndex
  const middle = Math.floor(arr.length / 2);

  // split the array in half
  const leftArr = arr.splice(0, middle);
  const rightArr = arr;

  // 2*mergeSort each half

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  // can this be solved with recursion?(try for practice)

  // empty tempArr
  let tempArr = [];
  let lIndex = 0;
  let rIndex = 0;

  // while/do  one of the arrays is not empty
  while (lIndex < leftArr.length && rIndex < rightArr.length) {
    if (leftArr[lIndex] < rightArr[rIndex]) {
      tempArr.push(leftArr[lIndex]);
      lIndex++;
    } else {
      tempArr.push(rightArr[rIndex]);
      rIndex++;
    }
  }

  // if one of the array is empty concat the other one
  while (lIndex < leftArr.length) {
    tempArr.push(leftArr[lIndex]);
    lIndex++;
  }
  while (rIndex < rightArr.length) {
    tempArr.push(rightArr[rIndex]);
    rIndex++;
  }

  // return whole array
  return tempArr;
}

// An input of
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// should return [0, 1, 1, 2, 3, 5, 8, 13],
console.log(mergeSort([105, 79, 100, 110]));
// should return [79, 100, 105, 110].
