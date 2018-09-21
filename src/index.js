class Sorter {
  constructor(storage = []) {
    // your implementation
    this.storage = storage;
    this.compare = (a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    };
  }

  add(element) {
    // your implementation
    this.storage.push(element);
    console.log(this.storage);
  }

  at(index) {
    // your implementation
    return this.storage[index];
  }

  get length() {
    // your implementation
    return this.storage.length;
  }

  toArray() {
    // your implementation
    const result = this.storage;
    return result.slice();
  }

  sort(indices) {
    // your implementation
    indices.sort((a, b) => a - b);
    for (let i = 0; i < indices.length; i += 1) {
      for (let j = 0; j < indices.length; j += 1) {
        const indexI = indices[i];
        const indexJ = indices[j];

        if (this.compare(this.at(indexI), this.at(indexJ)) < 0) {
          const tmp = this.at(indexI);
          this.storage[indexI] = this.at(indexJ);
          this.storage[indexJ] = tmp;
        }
      }
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compare = compareFunction;
  }
}


module.exports = Sorter;
