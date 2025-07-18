// Leetcode Problem: https://leetcode.com/problems/find-words-containing-character/description/

var findWordsContaining = function (words, x) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            result.push(i);
        }
    }
    return result;
};