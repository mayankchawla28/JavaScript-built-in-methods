class myHashTable {
  table;
  size;
  constructor() {
    this.table = new Array(11);
    this.size = 0;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {      
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
}

(function main() {
  const hs = new myHashTable();
  console.log("hs", hs);
})();
