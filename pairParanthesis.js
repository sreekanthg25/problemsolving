/*
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
For example, given n = 3, a solution set is:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

function parnthesisCombi(n) {
  let paranthesisArr = [];
  const genParanthesis = (prefix, left, right) => {
    if(left > right) {
      return;
    }
    if (!left && !right) {
      paranthesisArr = [...paranthesisArr, prefix];
    }
    if (left > 0) {
      genParanthesis(`${prefix}(`, left - 1, right);
    }
    if (right > 0) {
      genParanthesis(`${prefix})`, left, right - 1);
    }
  };
  genParanthesis("", n, n);
  return paranthesisArr;
}

console.log(parnthesisCombi(3));
