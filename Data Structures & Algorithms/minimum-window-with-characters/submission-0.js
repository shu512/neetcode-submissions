class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const dictOriginal = this.buildDict(t);
        const dict = {};
        dict[s[0]] = 1;
        let minString = s;
        let flag = false;

        let l = 0, r = 0;
        while(l < s.length) {
            const res = this.includes(dictOriginal, dict);
            console.log(dictOriginal);
            console.log(dict);
            console.log(res);
            if (r === s.length || res) {
                if (res && ((r - l + 1) <= minString.length)) {
                    minString = s.slice(l, r + 1);
                    flag = true;
                }

                l++;
                this.decrease(dict, s[l-1]);
            } else {
                r++;
                if (r < s.length) this.increase(dict, s[r]);
            }
        }

        return flag ? minString : '';
    }

    includes(dictOriginal, dict) {
        for (let letter in dictOriginal) {
            if (!dict[letter] || dictOriginal[letter] > dict[letter]) return false;
        }

        return true;
    }

    decrease(dict, letter) {
        dict[letter]--;
    }

    increase(dict, letter) {
        if (!dict[letter]) dict[letter] = 0;
        dict[letter]++;
    }

    buildDict(t) {
        const dict = {};
        for (let letter of t) {
            this.increase(dict, letter);
        }

        return dict;
    }
}
