// Assignment 2
// Build a function mergeSort that takes in an array and returns a sorted array,
// using a recursive merge sort methodology. \

// Tips:
// Think about what the base case is and what behavior is happening again and again\
//  and can actually be delegated to someone else (e.g. that same function!).

function mergeSort(arr) {
  //base case single value return this value as Array
  if (arr.length == 1) {
    return arr;
  }
  //  get halfIndex
  const middle = Math.floor(arr.length / 2);
  // split the array in half
  const leftArr = arr.splice(0, middle);

  return merge(mergeSort(leftArr), mergeSort(arr));
  return recursiveMerge(mergeSort(leftArr), mergeSort(arr));
}

function merge(leftArr, rightArr) {
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
  if (lIndex < leftArr.length) {
    return tempArr.concat(leftArr.slice(lIndex, leftArr.length));
  }
  if (rIndex < rightArr.length) {
    return tempArr.concat(rightArr.slice(rIndex, rightArr.length));
  }

  return tempArr;
}

// An input of
console.time("loopSort");
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// should return [0, 1, 1, 2, 3, 5, 8, 13],
console.log(mergeSort([105, 79, 100, 110]));
console.timeEnd("loopSort");
// should return [79, 100, 105, 110].
// =-------------------------------------------------
// it is practical the same as the first one it only uses recursiveMerge()
function mergeRecSort(arr) {
  //base case single value return this value as Array
  if (arr.length == 1) {
    return arr;
  }
  //  get halfIndex
  const middle = Math.floor(arr.length / 2);
  // split the array in half
  const leftArr = arr.splice(0, middle);

  return recursiveMerge(mergeRecSort(leftArr), mergeRecSort(arr));
}

function recursiveMerge(leftArr, rightArr, tempArr = []) {
  // base case would be one of them empty
  // concat the other one and return

  if (leftArr.length == 0) {
    return tempArr.concat(rightArr);
  }
  if (rightArr.length == 0) {
    return tempArr.concat(leftArr);
  }
  if (leftArr[0] < rightArr[0]) {
    tempArr.push(leftArr.shift());
    return recursiveMerge(leftArr, rightArr, tempArr);
  } else {
    tempArr.push(rightArr.shift(0));
    return recursiveMerge(leftArr, rightArr, tempArr);
  }
}
// An input of
console.time("recMerge");
console.log(mergeRecSort([3, 2, 1, 13, 8, 5, 0, 1]));
// should return [0, 1, 1, 2, 3, 5, 8, 13],
console.log(mergeRecSort([105, 79, 100, 110]));
// should return [79, 100, 105, 110].
console.timeEnd("recMerge");
// console.log(merge([1, 6, 7, 9], [2, 3, 4]));
// console.log(recursiveMerge([1, 6, 7, 9], [2, 3, 4]));
