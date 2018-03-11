//var, let and const    

var name="agnosticode";//declaring a variable
console.log(name);
name="Sani";//reassign name in case of var and let
console.log(name);

//Initializaiton of variable
var greeting;
console.log(greeting);
greeting="Hello";
console.log(greeting);

/*variable name can include:
* letters, numbers, _ , $
* cannot start with a number
*/

// Multi word variables 
var firstName="Satinder"; // Camel Case **
var first_name="Satinder" // Underscore Method (used in oop)
var FirstName="Satinder" // Pascal case

//LET : It is identical on the global scope so here you wont find any changes
let name2="agnosticode";//declaring a variable
console.log(name2);
name2="Sani";//reassign name in case of var and let
console.log(name2);

//CONST : It can't change or It can't be reassigned
const name3="john";
console.log(name3);
//** name3="Mark"; // can't do , gives error
//We have to assign value
//** const greeting1;//Syntax error

/* In using const with objects and arrays, we can change the key value pair inside it
 but we can't reassing objects name to something else */

 const person={
     name:"james",
     age:30
 }
 console.log(person);
 person.name="shawn";
 person.age=32;
 console.log(person);//can change the value of what is inside the object