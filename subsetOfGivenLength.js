let finalSubsetArray = [];
let length = 2;
let data = [];
let arr = [1, 2, 3, 4];

function subsetOfGivenLength(index = 0, n = 0) {
  let subset = [];
  if (index === length) {
    for (let i = 0; i < length; i++) {
      subset.push(data[i]);
    }
    finalSubsetArray.push(subset);
    console.log(subset.join(" "));
    return;
  }
  //1st solution
  //if (n >= arr.length) return;
  //data[index] = arr[n];
  //subsetOfGivenLength(index + 1, n + 1);
  //subsetOfGivenLength(index, n + 1);
  
  //2nd solution
  for(; n < arr.length; n++){
    data[index] = arr[n];
    subsetOfGivenLength(index + 1, n + 1);
  }
  return finalSubsetArray;
}

subsetOfGivenLength(0, 0);
