class MySet {
  items;
  constructor(itemArray = []) {
    this.items = [];
    // Initialize the set with unique values
    itemArray.forEach((item) => {
      if (!this.items.includes(item)) {
        this.items.push(item);
      }
    });
  }

  has(value) {
    // Check if the value exists in the set
    return this.items.includes(value);
  }

  add(value) {
    // Add the value to the set if it doesn't already exist
    if (!this.has(value)) {
      this.items.push(value);
      return true;
    }
    return false;
  }

  clear() {
    // Remove all items from the set
    this.items = [];
  }

  delete(value) {
    // Remove the specified value from the set if it exists
    const index = this.items.indexOf(value);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  values() {
    // Return all values in the set
    return this.items;
  }

  difference(otherSet) {
    // Compute the difference between this set and another set
    const differenceSet = new MySet();
    this.items.forEach(function (el) {
      if (!otherSet.has(el)) {
        differenceSet.add(el);
      }
    });
    return differenceSet;
  }

  intersection(otherSet) {
    // Compute the intersection between this set and another set
    const intersectionSet = new MySet();
    this.items.forEach(function (el) {
      if (otherSet.has(el)) {
        intersectionSet.add(el);
      }
    });
    return intersectionSet;
  }

  isSubsetOf(otherSet) {
    // Check if this set is a subset of another set
    if (this.size === 0) return true; // Empty set is always a subset
    return this.items.every(function (el) {
  
      return otherSet.has(el);
    });
  }

  isSupersetOf(otherSet) {

    return otherSet.isSubsetOf(this); // Reuse isSubsetOf method
  }

  union(otherSet) {
    // Compute the union of this set and another set
    const unionSet = new MySet([...this.items, ...otherSet.values()]);
    return unionSet;
  }

  get size() {
    // Return the number of elements in the set
    return this.items.length;
  }
}

(function main() {
  const setA = new MySet();
  setA.add("a");
  setA.add("b");
  setA.add("a");

  const setB = new MySet(["1", "A", "a"]);
  const setc = new MySet(["1", "A", "a", "c", "b"]);

  const unionSet = setA.union(setB).union(setc);

  const differenceSet = unionSet.difference(setB);

  const intersectionSet = setB.intersection(setc);

  const evens = new MySet([2, 4, 6, 8, 10, 12, 14, 16, 18]);
  const fours = new MySet([4, 8, 12, 16]);
  const superSet = evens.isSupersetOf(fours);
})();
