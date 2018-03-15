//FOR LOOP

for(let i=0; i<10; i++){
    if(i===2){
        console.log('2 is my favorite number');
        continue; 
    }
    if(i===5){
        console.log('Stop the loop');
        break;
    }
    console.log('Number '+i);
};

//While loop-when you dont know how many time to iterate
let j=0;
while(j<10){
    console.log('Number '+ j);
    j++;
};

//Do while -- always gonna run atleast once
let k=0;
do{
    console.log('Number '+k);
    k++;
}
while(k<5);

//Loop through Arrays
const cars=['Ford','Chevy','Honda','Toyota'];

// for(let i=0;i<cars.length; i++){
//     console.log(cars[i]);
// }

//forEach method to loop through array
cars.forEach(function(car,index,array){
    console.log(`${index} ${car}`);
    console.log(array);
});

//Map
const users=[
    {id:1,name:'John'},
    {id:2,name:'Sara'},
    {id:3,name:'Karen'}
]

const ids=users.map(function(user){
    return user.id;
});

console.log(ids);


//For in loop
const person={
    firstName:'John',
    lastName:'Doe',
    age:'23'
};

for(let x in person){
    console.log(`${x} : ${person[x]}`)
}