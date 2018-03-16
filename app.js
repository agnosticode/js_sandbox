//WINDOW METHODS /OBJECTS /POPERTIES
window.console.log(123);

//Alert()
//alert('Hello World');

//Prompt
//const input=prompt();

//Confirm
// if(confirm('Are you sure?')){
//     console.log('Yes');
// }else{
//     console.log('No');
// }

let val;

//Outer height and width
val=window.outerHeight;
val=window.outerWidth

//Inner height and width
val=window.innerHeight;
val=window.innerWidth

//Scroll
val=window.scrollY;
val=window.scrollX;

//Location object
val=window.location;
val=window.location.hostname;
val=window.location.port;
val=window.location.href;
val=window.location.search;

//REDIRECT
//val=window.location.href='http://www.google.com';

//RELOAD
//val=window.location.reload();

//History Object
//window.history.go(0);//-1,-2
val=window.history.length;

//Navigator Object
val=window.navigator;
val=window.navigator.appCodeName;//Mozilla
val=window.navigator.appName;//Netscape
val=window.navigator.appVersion;//5.0+gibrish


console.log(val);

