let val;

const today=new Date();
let birthday=new Date('7-25-1994 21:30:00');//mmddyyyy
birthday=new Date('July 25 1994');
birthday=new Date('07/25/1994');//mmddyyyy

val=today.getMonth();//2- one less than actual month
val=today.getDate();//good it is actual 15
val=today.getDay();//4 means thursday
val=today.getFullYear();
val=today.getMinutes();
val=today.getSeconds();
val=today.getMilliseconds();
val=today.getTime();//time stamp

//Set all this stuff
birthday.setMonth(2);//march
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(16);



console.log(birthday);   