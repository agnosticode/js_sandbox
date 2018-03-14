const num1=50;
const num2=100;

let val;

//Simple math with numbers
val=num1+num2;
val=num1*num2;
val=num1-num2;
val=num1/num2;
val=num1%num2;//50
val=num2%num1;//0

//Math Object
val=Math.PI;
val=Math.E;
val=Math.round(6.596);
val=Math.ceil(2.4);//3
val=Math.floor(2.4);//2
val=Math.sqrt(225);//15
val=Math.abs(-3.65);//3.65
val=Math.pow(8,2);//64
val=Math.min(2,33,4,1,55,6,3);//1
val=Math.max(2,33,4,1,55,6,3);//55
val=Math.random();//decimal number 0<1
val=Math.random()*20;//decimal number 0<20
val=Math.floor(Math.random()*20);//whole number 0<20 

console.log(val);