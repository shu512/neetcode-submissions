class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    /*static*/ delim = ';';
    encode(strs) {
        return strs.reduce((res, cur) => res + cur.length + this.delim + cur, '');
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            const [_i, length] = this.findWordLength(str, i);
            i = _i;
            
            const word = this.takeWord(str, length, i);
            i += length;
            result.push(word);
        }

        return result;
    }

    takeWord(str, length, i) {
        return str.substring(i, i + length);
    }

    findWordLength(str, i) {
        let length = '';
        while (str[i] !== this.delim) {
            length += str[i];
            i++;
        }
        
        return [i + 1, Number(length)];
    }
}
