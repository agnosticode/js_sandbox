//FUNCTION DECLARATIONS

function greet(firstName='John', lastName='Doe'){
    // if(typeof firstName==='undefined'){firstName='John'};//ES5 WAY
    // if(typeof lastName==='undefined'){lastName='Doe'};//ES5 WAY  
    //console.log('Hello');
    return 'Hello '+ firstName +' '+ lastName;
}

console.log(greet('Steve','Smith')); 
console.log(greet());


//Fuction Expressions
const square=function(x=3){
    return x*x;     
};

// console.log(square(6));

//Immediately invokable function expressions- IIFE's
(function(){
    console.log('IIFE RAN....');
})();

//pass arguments
(function(name){
    console.log('Hello '+name);
})('Satinder');

//PROPERTY METHODS
const todo={
    add:function(){
        console.log('Add todo');
    },
    edit:function(id){
        console.log(`Edit todo ${id}`);
    }
};
//call
todo.add();//Add todo
todo.edit(56);//Edit todo 56

//add function to object ouside of it
todo.delete = function(){
    console.log('Delete todo');
};
todo.delete();
