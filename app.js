//Create some arrays
const numbers=[42,43,54,65,81,28,71,25];
const numbers2=new Array(22,44,64,34,64,23,89);
const fruits=['Apple','Mango','Orange','Banana'];
const mixed=[22,'Hello',true,undefined,null,{a:1,b:1},new Date];

let val;

//Get array length
val=numbers.length;//8

//check if is array
val=Array.isArray(numbers);//true

//get single value
val=numbers[3];//65

//insert into arrays
numbers[3]=56;
val=numbers[3];//56

//Find index of value
val=numbers.indexOf(28);

//MUTATING ARRAYS
//Add on to end
numbers.push(250);

//Add on to front
numbers.unshift(120);

//take off from end
numbers.pop();

//take of form front
numbers.shift();

//splice values
numbers.splice(1,2);

//reverse array
numbers.reverse(); 

//CONCATENATE ARRAYS  
val=numbers.concat(numbers2);

//Sort
val=fruits.sort();//alphabetical order
// val=numbers.sort();//not always right so use compare fuction

// //use Compare Function
// val=numbers.sort(function(x,y){
//     return x-y;
// });

// //reverse sort compare function
// val=numbers.sort(function(x,y){
//     return y-x;
// });

//Find
function under50(num){
    return num<50;
}
val=numbers.find(under50);

console.log(numbers);
console.log(val);