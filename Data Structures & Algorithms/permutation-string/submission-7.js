class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const ALPABET_SIZE = 26;
        const dict1 = this.buildDict(s1);
        
        let l = 0, r = s1.length - 1;
        const dict2 = this.buildDict(s2.slice(0, s1.length));
        let matches = 0;

        for (const letter in dict1) {
            if (dict1[letter] === dict2[letter]) matches++;
        }

        while (r < s2.length) {
            if (matches === ALPABET_SIZE) return true;

            l++;
            r++;
            if (r > s2.length) break;

            const outLetter = s2[l-1];
            const inLetter = s2[r];
            if (dict1[outLetter] === dict2[outLetter]) matches--;
            dict2[outLetter]--;
            if (dict1[outLetter] === dict2[outLetter]) matches++;

            if (dict1[inLetter] === dict2[inLetter]) matches--;
            dict2[inLetter]++;
            if (dict1[inLetter] === dict2[inLetter]) matches++;
            
        }

        return false;
    }

    showDict(dict) {
        for (let letter in dict) {
            if (dict[letter]) console.log(`${letter}: ${dict[letter]}`);
        }

        console.log('\n------');
    }

    buildDict (str) {
        const dict = {};
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';

        for (const letter of alphabet) {
            dict[letter] = 0;
        }

        for (let c of str) {
            dict[c]++;
        }
        return dict;
    }
}
