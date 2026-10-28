class Node{
    /**
     * @param {number} key
     * @param {number} val
     */
    constructor(key,val){
        this.key = key
        this.value = val
        this.prev = null
        this.next = null
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity
        this.cache = new Map()
        this.left = new Node(0,0)
        this.right = new Node(0,0)
        this.left.next = this.right
        this.right.prev = this.left // 初始化双向链表
    }
    remove(node){
        const pre = node.prev
        const nxt = node.next
        pre.next = nxt
        nxt.prev = pre
    }
    insert(node){
       const preNode = this.right.prev
       const nxtNode = this.right
       preNode.next = node 
       nxtNode.prev = node

       node.next = nxtNode
       node.prev = preNode
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            this.remove(this.cache.get(key))
            this.insert(this.cache.get(key))
            return this.cache.get(key).val
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            const node = this.cache.get(key)
            this.remove(node)
            this.cache.delete(key)
        }
           const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.cap) {
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
