
Array.prototype.even = function () {
  return this.filter((num) => num % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((num) => num % 2 !== 0);
};


const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(inputArray.even()); 
console.log(inputArray.odd());
