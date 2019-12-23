let str = "BADDAFGDGEDADE";
let strMap = {};
let count = 0;
let maxCount = 0;
let startIndex = 0;
let chars = "";

function getNonRepeatedMaxLengthSubString() {
  for (let i = 0; i < str.length; i++) {
    const prevIndex = strMap[str[i]];
    if (prevIndex === undefined || i - count > prevIndex) {
      count++;
      chars = str.substr(startIndex, maxCount);
    } else {
      const subStringCount = i - prevIndex;
      if (subStringCount >= maxCount) {
        startIndex = prevIndex + 1;
      }
      count = subStringCount;
    }
    strMap[str[i]] = i;
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return { maxCnt: maxCount, NRChars: chars };
}
const { maxCnt, NRChars } = getNonRepeatedMaxLengthSubString();
console.log(
  "Max non repeated count is `%d`, and the string is %s",
  maxCnt,
  NRChars
);
