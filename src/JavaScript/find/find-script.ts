
(function main() {

  Array.prototype.find = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };

  const numberArray = [5, 12, 8, 130, 44];
  const responseNumberArray = numberArray.find((element) => element > 10);

  console.log("responseNumberArray", responseNumberArray);

}())