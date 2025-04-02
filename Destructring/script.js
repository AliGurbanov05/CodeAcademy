const user = {
    name1: "Aylin",
    age1: 25,
    city: "Baku"
}

let { name1 } = user;
let { age1 } = user;
let { city } = user;

// console.log(name, age, city);

const numbers = [10, 20, 30, 40, 50]
let [a, b] = numbers;
// console.log(a, b);

const person = {
    name: "Orxan",
    age: "30",
    job: "developer",
    country: "Azerbaijan"
}
let { name, age, ...otherInfo } = person;
console.log(name, age);

const user1 = {
    name: "Leyla",
    age: "22"
}
const user2 = {
    city: "Ganja",
    country: "Azerbaijan",
    ...user1
}
const user3 = {
    ...user1,
    ...user2
}
// console.log(user1, user2, user3);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, ...arr1];
const arr3 = [...arr1, ...arr2];

// console.log(arr1, arr2, arr3);