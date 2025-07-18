// Leetcode Problem:   https://leetcode.com/problems/jewels-and-stones/description/

// Given two strings jewels and stones, return the number of stones that are jewels.
// jewels is a string representing the types of stones that are jewels.
// stones is a string representing the stones you have.

var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    const jSet = new Set();
    for (let i = 0; i < jewels.length; i++) {
        jSet.add(jewels[i]);
    }

    for (let i = 0; i < stones.length; i++) {
        if (jSet.has(stones[i])) {
            ++count;
        }
    }

    return count;
};

// Time Complexity: O(n) 
// Space Complexity: O(1) since we are using a set to store jewels, which is constant space in terms of the number of unique jewels.
// This solution is efficient and works well for the problem.