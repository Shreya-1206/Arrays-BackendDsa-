const items = ["Kaju", "Jeera", "Pens", "Shoes"];
const nums = [89, 23,56,12,22,45,100,1,2,3];
const str = "Jia is Brilliant Student";

console.log(items.toString());
console.log(items.join('|'))
console.log(items.join(' '))
console.log(str.split(" "))

const copyItems =[...items];
delete copyItems[1];
copyItems.pop();

console.log(copyItems);


