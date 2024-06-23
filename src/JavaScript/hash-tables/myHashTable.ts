class myHashTable {
  table;
  size;
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      bucket = [[key, value]];
      this.table[index] = bucket;
    } else {
      const sameItemKey = bucket.find((item) => item[0] === key);
      if (sameItemKey) {
        sameItemKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameItemKey = bucket.find((item) => item[0] === key);
      if (sameItemKey) {
        return sameItemKey[1];
      }
    }
    return "Key Not found";
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameItemKey = bucket.find((item) => item[0] === key);
      if (sameItemKey) {
        bucket.splice(bucket.indexOf(sameItemKey), 1);
      }
    }
  }

  printHashTable() {
    for (let i = 0; i < this.table.length; i++) {
      const bucket = this.table[i];
      if (bucket) {
        console.log(
          `Bucket ${i}: ${bucket.map(([k, v]) => `${k}=${v}`).join(", ")}`
        );
      } else {
        console.log(`Bucket ${i}: Empty`);
      }
    }
  }
}

(function main() {
  const hs = new myHashTable(11);

  hs.set("apple", 42);
  hs.set("banana", 17);
  hs.set("cherry", 99);

  console.log("Initial Hash Table:");
  hs.printHashTable();

  console.log("\nGet 'banana':", hs.get("banana"));
  console.log("Get 'orange':", hs.get("orange"));
  hs.set("apple", 55);
  console.log("\nUpdated 'apple' to 55:");
  hs.printHashTable();

  hs.set("grape", 12);
  hs.set("lemon", 30);
  hs.set("pear", 67);

  console.log("\nHash Table after additions:");
  hs.printHashTable();

  hs.remove("cherry");
  console.log("\nHash Table after removing 'cherry':");
  hs.printHashTable();

  console.log("\nGet 'cherry' after removal:", hs.get("cherry"));
})();
