// Leetcode Problem: https://leetcode.com/problems/split-a-string-in-balanced-strings/submissions/1703605762/

// Using a simple counter to track balance of 'L' and 'R'
// Time Complexity: O(n)
// Space Complexity: O(1) - since we are only using a few variables
var balancedStringSplit = function (s) {
    let result = 0;
    let countL = countR = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === 'L' ? ++countL : ++countR;
        if (countL === countR) {
            ++result;
            countL = 0;
            countR = 0;
        }
    }
    return result;
};

// Version 2 - using single variable to track balance
// Time Complexity: O(n)
// Space Complexity: O(1) - since we are only using a few variables
var balancedStringSplit = function (s) {
    let result = 0;
    let balance = 0;
    for (let i = 0; i < s.length; i++) {
        balance += s[i] === 'L' ? 1 : -1;
        if (balance === 0) {
            ++result;
        }
    }
    return result;
}