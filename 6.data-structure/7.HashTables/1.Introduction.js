/*
    Hash table or Hash Map

    Most of languages has a hash table implemented by default.

    Hash tables are used to store key-value pairs.

    Different from array doesn't has order.

    Fast for finding, adding and removing.

    Hash function are almost every time given advantages from prime numbers.
    For this that is dangerous discovery a great equation for prime numbers.

    Examples:
    1. Objects
    2. Maps - (JS, Java, go )
    3. Dictionaries - Python


    Hash function - On this case convert key to array indices
        Input any length -> Output fixed length.
        Need to be fast - O(1).
        Doesn't cluster outputs at specific indices, but distibute uniformly.
        Deterministic (Same inputs = Same outputs)

    Deal with collisions (exist many ways to do this).
        1. Separate chaining
            storage nested arrays and loop to see colisions
            index[10] - storage infinite information
        2. Linear Probing
            Storage item in next index available
            array[10] storage only 10 items

    BigO - Ideal case, not the implement below.
    1.Insert: O(1)
    2.Deletion: O(1)
    3.Access: O(1)

    *Crypto hash functions have different rules.
*/

// Basic, only to learning propose.
function hash(key, arrayLen) {
  let total = 0;
  // prime number are great to avoid colision
  // *search why ?
  // Large better
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const indexKey = this._hash(key);
    if (!this.keyMap[indexKey]) {
      this.keyMap[indexKey] = [];
    }
    this.keyMap[indexKey].push([key, value]);
  }
  get(key) {
    const indexKey = this._hash(key);
    if (!this.keyMap[indexKey]) return undefined;
    if (this.keyMap[indexKey].length === 1) return this.keyMap[indexKey][0][1];
    const arrayValues = this.keyMap[indexKey];
    for (let i = 0; i < arrayValues.length; i++) {
      if (arrayValues[i][0] === key) return arrayValues[i][1];
    }
    return undefined;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

const hashTable = new HashTable(11);

hashTable.set("test1", "testasjkdhajk");
hashTable.set("asdas", "testasjkdhajk");
hashTable.set("asd", "testasjkdhajk");
hashTable.set("asder", "testasjkdhajk");
hashTable.set("teasdst1", "testasjkdhajk");
hashTable.set("errr", "testasjkdhajk");

console.log(hashTable.get("asdas"));
