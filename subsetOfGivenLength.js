let finalSubsetArray = [];
let length = 2;
let data = [];

function subsetOfGivenLength(arr, index, n) {
  let subset = [];
  if (index === length) {
    for (let i = 0; i < length; i++) {
      subset.push(data[i]);
    }
    finalSubsetArray.push(subset);
    return;
  }
  data[index] = arr[n];
  if (n >= arr.length) {
    return;
  }
  subsetOfGivenLength(arr, index + 1, n + 1);
  subsetOfGivenLength(arr, index, n + 1);

  return finalSubsetArray;
}

subsetOfGivenLength([1, 2, 3], 0, 0);
