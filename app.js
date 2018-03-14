const firstName='William';
const lastName='johnson';
const age=23;
const str='Hello there my name is Satinder';
const tag='web design, web development, programming';

let val;

val=firstName+lastName;
//concatination
val=firstName+' '+lastName;

//Append
val='Satinder ';
val+='Singh';
val='Hello my name is '+firstName+' and I am '+age;

//Escaping
val='That\'s awesome, I can\'t wait'

//Properties and methods associated with string

//Length(property)
val=firstName.length;

//concat(method)
val=firstName.concat(' ',lastName);

//Change case
val=firstName.toUpperCase();
val=firstName.toLocaleLowerCase();

val=firstName[0];//W

//indexOf()
val=firstName.indexOf('l');//2
val=firstName.lastIndexOf('l');//3

//charAt()
val=firstName.charAt(4);//i

//Get last Char
val=firstName.charAt(firstName.length-1);

//substring()
val=firstName.substring(0,4);//Will

//slice()
val=firstName.slice(0,4);//Will
val=firstName.slice(-3);//iam

//split()
val=str.split(' ');//Array splited at space
val=tag.split(',');//Array slplited at ,

//replace()
val=str.replace('Satinder','jack');

//includes()
val=str.includes('Hello');//true
val=str.includes('foo');//false


console.log(val);