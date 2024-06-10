import { HashMap } from "./hashMap.js";

export class HashSet {
    constructor() {
        this.hashMap = new HashMap();
    }

    set(key) {
        this.hashMap.set(key, true);
    }

    get(key) {
        this.hashMap.get(key);
    }

    has(key) {
        return this.hashMap.has(key);
    }

    remove(key) {
        return this.hashMap.remove(key);
    }

    length() {
        return this.hashMap.length();
    }

    clear() {
        this.hashMap.clear();
    }

    keys() {
        return this.hashMap.keys();
    }
}