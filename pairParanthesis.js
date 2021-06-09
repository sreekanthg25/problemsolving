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
  const genParanthesis = (prefix, openP, closeP) => {
    if (!openP && !closeP) {
      paranthesisArr = [...paranthesisArr, prefix];
    }
    if (openP > 0) {
      genParanthesis(`${prefix}(`, openP - 1, closeP);
    }
    if (closeP > openP) {
      genParanthesis(`${prefix})`, openP, closeP - 1);
    }
  };
  genParanthesis("", n, n);
  return paranthesisArr;
}

console.log(parnthesisCombi(3));
