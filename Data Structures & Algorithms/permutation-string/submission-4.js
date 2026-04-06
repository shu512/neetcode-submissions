class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const dict = this.buildDict(s1);
        const curDict = {};

        let l = 0, r = 0;

        while (l < s2.length) {
            console.log(curDict);
            if (this.areDictEqual(dict, curDict)) return true;

            if (l === r || this.shouldMove(dict, curDict, s2, r) === 'right') {
                console.log('move right');
                this.increase(curDict, s2[r]);
                r++;
            } else {
                if (this.shouldMove(dict, curDict, s2, r) === 'debug') {
                    console.log(`${JSON.stringify(dict, null, 2)}, ${JSON.stringify(curDict, null, 2)}`);
                }
                console.log('move left');
                this.decrease(curDict, s2[l]);
                l++;
            }
        }

        return false;
    }
// kfykx
    shouldMove(dict, curDict, s2, r) {
        if (r >= s2.length) return 'left';

        for (let c in dict) {
            if (!curDict[c]) return 'right';
            if (dict[c] > curDict[c]) return 'right';
            if (dict[c] < curDict[c]) return 'left';
        }

        for (let c in curDict) {
            if (!dict[c]) return 'left';
        }

        return 'debug';
    }

    areDictEqual(dict, curDict) {
        for (let c in dict) {
            if (dict[c] != (curDict[c] || 0)) return false;
        }
        for (let c in curDict) {
            if (curDict[c] !== 0 && dict[c] != curDict[c]) return false;
        }

        return true;
    }

    increase (dict, c) {
        if (!dict[c]) dict[c] = 0;
        dict[c]++;
    }

    decrease (dict, c) {
        dict[c]--;
    }

    buildDict (str) {
        const dict = {};
        for (let c of str) {
            this.increase(dict, c);
        }
        return dict;
    }
}
