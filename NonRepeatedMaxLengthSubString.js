let str = "ABCADAADSD";
let strMap = {};
let count = 0;
let maxCount = 0;

function getNonRepeatedMaxLengthSubString() {
  for (let i = 0; i < str.length; i++) {
    if (strMap[str[i]] === undefined || i - count > strMap[str[i]]) {
      count++;
    } else {
      count = i - strMap[str[i]];
    }
    strMap[str[i]] = i;
    if (count > maxCount) maxCount = count;
  }
  return maxCount;
}
console.log(getNonRepeatedMaxLengthSubString(), "max");
