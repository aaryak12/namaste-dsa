// Leetcode Problem: https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/

// Using hashMap to count frequency of vowels and consonants
// Time Complexity: O(n)
// Space Complexity: O(1) - since we are only storing a fixed number of characters
var maxFreqSum = function (s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            ++map[s[i]];
        } else {
            map[s[i]] = 1;
        }
    }

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConsonant = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            maxVowel = Math.max(maxVowel, map[s[i]]);
        } else {
            maxConsonant = Math.max(maxConsonant, map[s[i]]);
        }
    }

    return maxVowel + maxConsonant;
};

// Optimized version using a single loop
var maxFreqSumOptimized = function (s) {
    let map = {};
    let maxVowel = 0;
    let maxConsonant = 0;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            ++map[s[i]];
        } else {
            map[s[i]] = 1;
        }

        if (vowels.has(s[i])) {
            maxVowel = Math.max(maxVowel, map[s[i]]);
        } else {
            maxConsonant = Math.max(maxConsonant, map[s[i]]);
        }
    }

    return maxVowel + maxConsonant;
}