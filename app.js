let val;

//Number to String
val=String(5);
val=String(4+4);
//boolean to string
val=String(true);
//date to string
val=String(new Date());
//array to string
val=String([1,2,3,4,5]);

//toString Method
val=(5).toString();
val=(true).toString();

//Strings to number
val=Number('5');//5 
//boolean to number
val=Number(true);//1
val=Number(false);//0    
val=Number(null);//0
val=Number('hello');//NaN-Not a number
val=Number([1,2,3]);//NaN-Not a Number

val=parseInt('100.23');//100
val=parseFloat('100.23');//100.23


//Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

//Type Coercion
const val1=String(5);
const val2=6;
const sum=val1+val2;//changed val2 into sting then concatinated it

console.log(sum);
console.log(typeof sum);