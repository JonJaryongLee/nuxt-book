const addAge = (age) => age + 1;
const ages = [30, 40, 5];
// const newAges = ages.map(addAge);
const newAges = ages.map((age) => age + 1);
console.log(newAges); // [31, 41, 6]
