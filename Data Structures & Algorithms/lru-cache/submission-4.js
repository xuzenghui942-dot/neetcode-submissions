class Node{
    constructor(key,val){
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map() // key -> Node
        this.left = new Node(0,0)
        this.right = new Node(0,0)
        this.left.next = this.right
        this.right.prev = this.left
    }
    remove(node){
        const prev = node.prev
        const next = node.next
        prev.next = next
        next.prev = prev // 前后连起来 中间的没了
    }
    insert(node){
        const prev = this.right.prev
        const next = this.right
        prev.next = node
        next.prev = node
        node.next = next
        node.prev = prev
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){ // 如果存在
            const node = this.cache.get(key)
            this.remove(node) // 先delete
            this.insert(node) // 在 insert
            return node.val
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
            this.remove(this.cache.get(key)) // 先去掉旧节点
        }
        const node = new Node(key,value)
        this.cache.set(key,node)
        this.insert(node)// 插到最右边
        if(this.cache.size > this.capacity){
            const lru = this.left.next
            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }
}
