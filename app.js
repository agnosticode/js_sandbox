const person={
    firstName:'Steve',
    lastName:'Smith',
    age:23,
    email:'steve@gmail.com',
    hobbies:['music','sports'],
    address:{
        city:'toronto',
        state:'Ontario'
    },
    getBirthYear:function(){
        return 2018-this.age;
    }       
};

let val;

val=person;//object

//Get specific value
val=person.firstName;//Steve
val=person['lastName'];//Another way
val=person.age;
val=person.hobbies[1];//sports
val=person.address.city;//Toronto
val=person.getBirthYear();

console.log(val);

const people=[
    {name:'john',age:30},
    {name:'smith',age:54}
];

for(let i=0;i<people.length;i++){
    console.log(people[i].name);
    console.log(people[i].age);
};