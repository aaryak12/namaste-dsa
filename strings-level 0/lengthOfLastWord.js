// Leetcode Problem : https://leetcode.com/problems/length-of-last-word/

// Straight forward solution but not for interview
// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(n) for storing the words in an array
// This solution is not optimal for interviews, but it works for the problem.
function lengthOfLastWord(s) {
    // Trim the string to remove leading and trailing spaces
    s = s.trim();
    
    // Split the string into words using space as a delimiter
    const words = s.split(' ');
    
    // Return the length of the last word
    return words[words.length - 1].length;
}


// APPROACH 1 (Using 2 loops)
// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(1) since we are not using any extra space
var lengthOfLastWord = function (s) {
    let n = s.length - 1;
    let count = 0;
    while (n >= 0) {
        if (s[n] !== ' ') break;
        --n;
    }
    while (n >= 0) {
        if (s[n] === ' ') break;
        ++count;
        --n;
    }
    return count;
};

// APPROACH 1 (Using 1 loop)
// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(1) since we are not using any extra space
var lengthOfLastWord = function (s) {
    let n = s.length - 1;
    let count = 0;
    while (n >= 0) {
        if (s[n] !== ' ') ++count;
        else if (count > 0) break;
        --n;
    }
    return count;
};
