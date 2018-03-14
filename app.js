const name='john';
const age=30;
const job='web developer';
const city='toronto';
let html;

function hello(){
    return 'hello';
}

//without template strings(es5)
html='<ul><li>Name: '+name+'</li> <li>Age: '+age+'</li> <li>Job: '+job+'</li> <li>City: '+city+'</li></ul>';

html='<ul>'+
    '<li>Name: '+name+'</li>'+
    '<li>Age: '+age+'</li>'+
    '<li>Job: '+job+'</li>'+
    '<li>City: '+city+'</li>'+
    '</ul>';    

//with template strings(es6)
html=`
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age>30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = html;