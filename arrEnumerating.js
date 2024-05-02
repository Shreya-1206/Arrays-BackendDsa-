const items = ["Kaju", "Jeera", "Pens", "Shoes"];
const nums = [89, 23,56,12,22,45,100,1,2,3]


const itemsIterate = items.forEach(forEachItem);
const itemsChangeArr = items.map(mapItem);
const itemsFilter = nums.filter(numsFilter);
console.log(itemsFilter)
const itemsReduce = nums.reduce(reduceValue);
console.log(itemsReduce);


function forEachItem(value, index, arr){
    console.log(`Item value - ${value}`);
}

function mapItem(value, index, arr){
     console.log(`${value} is Bought 😃`)
}

function numsFilter(value, index, arr){
   return value < 90;
}

function reduceValue(total,value, index, arr) {
    return total + value;
}


