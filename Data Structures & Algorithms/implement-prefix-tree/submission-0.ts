class TrieNode {
    letter: string;
    children: Record<string, TrieNode> = {};
    end: boolean;

    constructor(letter: string, end = false) {
        this.letter = letter;
        this.end = end;
    }
}

class PrefixTree {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode('');
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let cur = this.root;
        for (let char of word) {
            if (!cur.children[char]) {
                cur.children[char] = new TrieNode(char);
            }
            cur = cur.children[char];
        }
        cur.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let cur = this.root;
        for (let char of word) {
            if (!cur.children[char]) return false;

            cur = cur.children[char];
        }

        return cur.end;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let cur = this.root;
        for (let char of prefix) {
            if (!cur.children[char]) return false;

            cur = cur.children[char];
        }

        return true;
    }
}
