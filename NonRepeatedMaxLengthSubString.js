function getNonRepeatedMaxLengthSubString(str) {
  let maxCount = 0;
  let startIndex = 0;
  let map = {};
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      startIndex = Math.max(startIndex, map[str[i]] + 1);
    }
    map[str[i]] = i;
    maxCount = Math.max(maxCount, i - startIndex + 1);
  }
  return { maxCnt: maxCount, NRChars: str.substr(startIndex, maxCount) };
}
