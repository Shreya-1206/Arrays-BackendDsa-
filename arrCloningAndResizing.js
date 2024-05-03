const users = ["Shreya","Anmol","Faizal","Rahul"];

const usersSpread = [...users, "Geetanjali"];
console.log(usersSpread);

const usersSlice= users.slice();
console.log(`Using slice on an array without start and end point gives back the array - ${usersSlice}`)

const usersConcat = [].concat(users);
console.log(usersConcat.join());

/// resizing 
const usersResizeUsingLength = users
// usersResizeUsingLength.length = 2;
usersResizeUsingLength.length = 6;
console.log(`Using length to resize the array - ${usersResizeUsingLength}`);