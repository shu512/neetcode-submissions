class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    /*static*/ delim = ';';
    encode(strs) {
        const str = strs.reduce((acc, cur) => acc + cur.length + this.delim + cur, '');
        console.log(str);
        return str;
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
        while (this.isDigit(str[i])) {
            length += str[i];
            i++;
        }
        if (str[i] !== this.delim) {
            throw Error(`str[i] !== this.delim;\nstr = ${str}; \ni = ${i}`);
        }
        
        return [i + 1, Number(length)];
    }

    isDigit(ch) {
        return (ch >= '0' && ch <= '9');
    }
}
