
(function main() {

  Array.prototype.reduce = function (callback, initialValue=undefined) {
    if (this.length === 0 && initialValue === undefined) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumulator = (initialValue === undefined) ? this[0] : initialValue;
    let startIndex = (initialValue === undefined) ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };

  const array1 = [1, 2, 3, 4];

  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );

  console.log(sumWithInitial);


}())