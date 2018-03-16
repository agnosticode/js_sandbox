//Global Scope 
var a=1;
let b=2;
const c=3;

// function test(){
// var a=4;
// let b=5;
// const c=6;
// console.log('Fuction Scope: ', a, b, c);
// }
// test();

// if(true){
//     //BLOCK SCOPE
//     var a=4;
//     let b=5;
//     const c=6;
//     console.log('If Scope: ', a, b, c);
// }

//Forloop
for(let a=0; a<10; a++){
    console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);