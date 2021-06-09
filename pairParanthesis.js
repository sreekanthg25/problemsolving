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
  const genParanthesis = (prefix, open, close) => {
    if (open > close) {
      return;
    }
    if (!open && !close) {
      paranthesisArr = [...paranthesisArr, prefix];
    }
    if (open > 0) {
      genParanthesis(`${prefix}(`, open - 1, close);
    }
    if (close > 0) {
      genParanthesis(`${prefix})`, open, close - 1);
    }
  };
  genParanthesis("", n, n);
  return paranthesisArr;
}

console.log(parnthesisCombi(3));
