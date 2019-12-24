function getNonRepeatedMaxLengthSubString(str) {
  let strMap = {};
  let count = 0;
  let maxCount = 0;
  let startIndex = 0;
  let chars = "";
  for (let i = 0; i < str.length; i++) {
    const prevIndex = strMap[str[i]];
    if (prevIndex === undefined || i - count > prevIndex) {
      count++;
    } else {
      const subStringCount = i - prevIndex;
      startIndex = prevIndex + 1;
      count = subStringCount;
    }
    strMap[str[i]] = i;
    if (count >= maxCount) {
      maxCount = count;
      chars = str.substr(startIndex, maxCount);
    }
  }
  return { maxCnt: maxCount, NRChars: chars };
}
