class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const ALPHABET_SIZE = 52;
        const dictOriginal = this.buildDict(t);
        const dict = this.buildDict('');
        dict[s[0]] = 1;
        let minString = s;
        let flag = false;
        let matches = this.calcMatches(dictOriginal, dict);

        let l = 0, r = 0;
        while(l < s.length) {
            const ok = matches === ALPHABET_SIZE;
            if (r === s.length || ok) {
                if (ok && ((r - l + 1) <= minString.length)) {
                    minString = s.slice(l, r + 1);
                    flag = true;
                }

                l++;
                if (dict[s[l-1]] === dictOriginal[s[l-1]]) matches--;
                dict[s[l-1]]--;
            } else {
                r++;
                if (r < s.length) {
                    dict[s[r]]++;
                    if (dict[s[r]] === dictOriginal[s[r]]) matches++;
                }
            }
        }

        return flag ? minString : '';
    }


    calcMatches(dictOriginal, dict) {
        let res = 0;
        for (let letter in dictOriginal) {
            if (dict[letter] >= dictOriginal[letter]) res++;
        }

        return res;
    }

    buildDict(t) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const dict = {};
        for (let letter of alphabet) {
            dict[letter] = 0;
        }

        for (let letter of t) {
            dict[letter]++;
        }

        return dict;
    }
}
