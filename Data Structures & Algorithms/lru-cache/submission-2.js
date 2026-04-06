class LRUCache {
    capacity;
    store;
    head = null;
    tail = null;
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.store = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.store.has(key)) return -1;

        const node = this.store.get(key);
        this.moveNode(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const newNode = new MyNode(key, value, this.tail);
        if (this.tail) this.tail.next = newNode;
        this.tail = newNode;

        if (this.store.size === 0) this.head = newNode;
        if (this.store.has(key)) this.removeNode(this.store.get(key));

        this.store.set(key, newNode);
        if (this.store.size > this.capacity) {
            this.store.delete(this.head.key)
            this.removeNode(this.head);
        }
    }

    removeNode(node) {
        if (node === this.head) {
            this.head = node.next;
            this.head.prev = null;
        }
        else node.prev.next = node.next;
        
        if (node === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        else node.next.prev = node.prev;
    }

    // to tail
    moveNode(node) {
        if (node === this.tail) return;
        if (node === this.head) {
            this.head = node.next;
            this.head.prev = null;
        }
        else node.prev.next = node.next;

        node.next.prev = node.prev;

        this.tail.next = node;
        node.prev = this.tail;
        node.next = null;
        this.tail = node;
    }
}

class MyNode {
    key;
    val;
    prev;
    next;
    constructor(key, val, prev = null, next = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
