class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const letters = {};
        let l = 0, r = 0;
        let maxLength = 0;
        this.increaseCount(letters, s[r]);

        while (r < s.length) {
            const curLength = r - l + 1;
            if (curLength - this.maxCount(letters) <= k) {
                maxLength = Math.max(maxLength, curLength);
                r++;
                this.increaseCount(letters, s[r]);
            } else {
                this.decreaseCount(letters, s[l]);
                l++;
            }
        }

        return maxLength;
    }

    increaseCount(letters, char) {
        if (!letters[char]) letters[char] = 0;
        letters[char]++;
    }

    decreaseCount(letters, char) {
        letters[char]--;
    }

    maxCount(letters) {
        let max = 0;
        for (let char in letters) {
            if (letters[char] > max) max = letters[char];
        }

        return max;
    }
}
