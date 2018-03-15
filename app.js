const id=100;

// //Equal to
// if(id==100){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// };

// //Not equal to
// if(id != 101){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// };

// //Test equal to and type
// if(id===100){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// };

// if(id !== 100){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// };


//Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The id is ${id}`);
// }else{
//     console.log('No ID');
// }

//greater of less than
// if(id>100){
//         console.log('Correct');
// }else{
//         console.log('Incorrect');
//     };


//If else
const color='yellow';

// if(color==='red'){
//     console.log('Color is red');
// }else if(color==='blue'){
//     console.log('Color is blue'); 
// }else{
//     console.log('Color is not red and blue');
// };


//Logical operators
const name='Steve';
const age=20;

//AND &&
if(age>0 && age<12){
    console.log(`${name} is a child`);
}else if (age>=13 && age <=19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is and adult`);
};

//OR ||
if(age<16 || age >65){
    console.log(`${name} cannot run in race`);
}else{
    console.log(`${name} is registered for the race`);
}

//TERNARY OPERATORS
console.log(id===100 ? 'Correct' : 'Incorrect');


//curly braces in if statements are optional