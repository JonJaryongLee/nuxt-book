const infos = [
  {
    name: "김창수",
    age: 30,
    family: ["할머니", "아내", "아들"],
  },
  {
    name: "이민주",
    age: 24,
    family: ["남편"],
  },
  {
    name: "박종식",
    age: 58,
    family: ["아들", "딸", "손자"],
  },
];

// 문제 1번
// const elderNames = infos
//   .filter((info) => info.age > 25)
//   .map((elder) => elder.name);
// console.log(elderNames); // [김창수, 박종식]

// 문제 2번
// const parentNames = infos
//   .filter((info) => {
//     let hasChild = false;
//     info.family.map((member) => {
//       if (member === "아들" || member === "딸") {
//         hasChild = true;
//       }
//     });
//     return hasChild;
//   })
//   .map((parents) => parents.name);
// console.log(parentNames); // [김창수, 박종식]
