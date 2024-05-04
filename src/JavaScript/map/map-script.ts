
(function main() {

  Array.prototype.map = function (callback) {
    console.log("hello from map function.");
    const response = [];
    for (let index = 0; index < this.length; index++) {
      response.push(callback(this[index], index, this))
    }
    return response;
  }

  const input = [1, 2, 3, 4, 5];

  const response = input.map((el) => el * el);
  console.log("response", response);

  let input2 = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];

  const agesRes = input2.map((person) => person.age);
  const minAge = Math.min(...agesRes);
  const maxAge = Math.max(...agesRes);
  const ageRange = maxAge - minAge;

  console.log("Minimum Age:", minAge);
  console.log("Maximum Age:", maxAge);
  console.log("Age Range:", ageRange);
}())