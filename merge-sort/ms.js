const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const firstArr = arr.slice(0, middleIndex);
  const secondArr = arr.slice(middleIndex);
  return merge(mergeSort(firstArr), mergeSort(secondArr));
};

const merge = (arr1, arr2) => {
  let result = [];
  while (arr1.length && arr2.length) {
    let min = 0;
    if (arr1[0] < arr2[0]) {
      min = arr1.shift();
    } else {
      min = arr2.shift();
    }
    result.push(min);
  }
  if (arr1.length) {
    result = result.concat(arr1);
  } else {
    result = result.concat(arr2);
  }
  return result;
};

console.log(mergeSort([2, 5, 6, 3, 5, 3, Infinity, -1]));
