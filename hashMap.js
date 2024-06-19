import { Node } from "./node.js";

export class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.8;
        this.buckets = new Array(this.capacity).fill(null)
    }

    getIndex(key) {
        let hashCode = this.hash(key);
        return Math.abs(hashCode) % this.capacity;
      }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    } 
     
    set(key, value) {
        this.resize()

        let index = this.getIndex(key)

        if (index < 0 || index >= this.buckets.length) throw new Error("Trying to access index out of bound");

        if (this.buckets[index]) {
            let currentNode = this.buckets[index]
            while (currentNode) {
                if (currentNode.key === key) {
                    currentNode.value = value
                    return
                }
                if (!currentNode.nextNode) {
                    currentNode.nextNode = new Node(key, value)
                    return
                }
                currentNode = currentNode.nextNode
            }
        } else {
            this.buckets[index] = new Node(key, value)
        }
    }
    
    get(key) {
        let index = this.getIndex(key)

        if (index < 0 || index >= this.buckets.length) throw new Error("Trying to access index out of bound");

        let currentNode = this.buckets[index]
        while (currentNode) {
            if (currentNode.key === key) return currentNode.value
            currentNode = currentNode.nextNode
        }

        return null
    }
    
    has(key) {
        let index = this.getIndex(key)

        if (index < 0 || index >= this.buckets.length) throw new Error("Trying to access index out of bound");

        let currentNode = this.buckets[index]
        while (currentNode) {
            if (currentNode.key === key) return true
            currentNode = currentNode.nextNode
        }

        return false
    }

    remove(key) {
        let index = this.getIndex(key)

        if (index < 0 || index >= this.buckets.length) throw new Error("Trying to access index out of bound");

        let currentNode = this.buckets[index]
        let prevNode = null
        while (currentNode) {
            if (currentNode.key === key) {
                if (prevNode) prevNode.nextNode = currentNode.nextNode
                else this.buckets[index] = currentNode.nextNode
                return true
            }
            prevNode = currentNode
            currentNode = currentNode.nextNode
        }

        return false
    }

    length() {
        let count = 0
        this.buckets.forEach(bucket => {
            let currentNode = bucket;
            while (currentNode) {
                count++;
                currentNode = currentNode.nextNode;
            }
        })
        return count
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null)
    }

    keys() {
        const keys = []
        this.buckets.forEach(bucket => {
            let currentNode = bucket
            while (currentNode) {
                keys.push(currentNode.key)
                currentNode = currentNode.nextNode
            }
        })

        return keys
    }

    values() {
        const values = []
        this.buckets.forEach(bucket => {
            let currentNode = bucket
            while (currentNode) {
                values.push(currentNode.value)
                currentNode = currentNode.nextNode
            }
        })

        return values
    }

    entries() {
        const entry = []
        this.buckets.forEach(bucket => {
            let currentNode = bucket
            while (currentNode) {
                entry.push([currentNode.key, currentNode.value])
                currentNode = currentNode.nextNode
            }
        })

        return entry
    }

    resize() {
        if (this.length() <= Math.ceil(this.capacity * this.loadFactor) return
        this.capacity = this.capacity * 2
        let newBuckets = this.buckets
        this.buckets = new Array(this.capacity).fill(null)

        newBuckets.forEach(bucket => {
            let currentNode = bucket
            while (currentNode) {
                this.set(currentNode.key, currentNode.value)
                currentNode = currentNode.nextNode
            }
        })
    }
}
