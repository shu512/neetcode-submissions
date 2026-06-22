class TrieNode {
    children: Record<string, TrieNode>;
    letter: string;
    end: boolean;

    constructor(letter: string, end = false) {
        this.children = {};
        this.letter = letter;
        this.end = end;
    }
}

class WordDictionary {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode('');
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let cur = this.root;
        for (let char of word) {
            if (!cur.children[char]) cur.children[char] = new TrieNode(char);
            cur = cur.children[char];
        }
        cur.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string, start = this.root): boolean {
        let cur = start;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (char == '.') {
                for (let key in cur.children) {
                    if (this.search(word.slice(i+1), cur.children[key])) return true;
                }
                return false;
            }

            if (!cur.children[char]) return false;
            cur = cur.children[char];
        }

        return cur.end;
    }
}
