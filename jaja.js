// task 1
const users = [
  { name: "Timohaaa", age: 15, iq: 2, colorEye: "blue",  gender:"Sigma Boi", isActive: true },
  { name: "barys barys", age: 13, iq: 5000, colorEye: "blue", gender:"Boss",isActive: true },
  { name: "olagagagaga", age: 15, iq: 0, colorEye: "green", gender:"Штани",isActive: false },
];
const saveName = users.map((user) => user.name);
console.log(saveName);
// task 2
const userEye = users.map((user) => ({
    name: user.name,
    colorEye: user.colorEye
}))
console.log(userEye);
// task 3
const userSex = users.map((user) => ({

}))
console.log(userSex);