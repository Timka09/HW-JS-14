// task 1
const users = [
  { name: "barys barys", age: 13, iq: 5000, colorEye: "blue", gender: "male", isActive: true, email: "brother@gmail.com" },
  { name: "oleg", age: 12, iq: 5, colorEye: "red", gender: "female", isActive: true, email: "chto@gmail.com" },
  { name: "petro", age: 14, iq: 6, colorEye: "purple", gender: "male", isActive: false, email: "chel@gmail.com" },
  { name: "Timohaaa", age: 15, iq: 2, colorEye: "blue",  gender:"male", isActive: true, email: "bro@gmail.com" },
  { name: "olagagagaga", age: 16, iq: 0, colorEye: "green", gender: "female", isActive: false, email: "sista@gmail.com" },
];
const saveName = users.map((user) => user.name);
console.log(saveName);
// task 2
const userEye = users.map((user) => ({
  name: user.name,
  colorEye: user.colorEye
  })
);
console.log(userEye);
// task 3
const userSex = users.map((user) => {
return user.name + " " + user.gender
})
console.log(userSex);
// task 4
const userStatus = users.filter((user) => user.isActive === false).map((user) => user.name)
console.log(userStatus)
// task 5
const findEmail = users.find((user) => user.email === "bro@gmail.com")
console.log(findEmail)
// task 6
const getUsersByAgeRange = (users, min, max) =>
  users.filter((user) => user.age >= min && user.age <= max);

const minAge = 13;
const maxAge = 16;

console.log(getUsersByAgeRange(users, minAge, maxAge));
