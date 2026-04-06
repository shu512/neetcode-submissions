class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) return 0;

        const cs = new Map();
        let max = 0;
        let l = 0;
        let r = 0;
        cs[s[l]] = 1;
        while(l < s.length && r < s.length) {
            console.log(l, r)
            if (l === r) {
                cs[s[l]] = 1;
                r++;
                continue;
            }

            if (cs[s[r]] === 1) {
                cs[s[l]] = null;
                l++;
            } else {
                if ((r - l + 1) > max) console.log('new max! = ', r - l + 1);
                max = Math.max(max, r - l + 1);
                cs[s[r]] = 1;
                r++;
            }
            console.log(cs)
        }
        console.log(l, r)
        max = Math.max(max, r - l);
        

        return max;
    }
}

