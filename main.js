/*console.log("hello world");
console.error('this is an error');
console.warn('this is a warning');
// var,let,const
// string, numbers, boolean, null, undefined
const name='alok';
const age=30;
const rating=4.5;
const isCool=true;
const x=null;

let z;
console.log(typeof x);

console.log(age);
//concatenation

console.log('my name is '+ name +' and age is '+age);
// twmplate string

const hello= 'my name is '+ name +' and i am '+age;

console.log(hello);
const s='hello world';
console.log(s.substring(0,5).toUpperCase());
const ss='technology, computer, it, code';
console.log(ss.split(','));
//arrays holding multiple in line

/*multilines
comment
const numbers=new Array(1,2,3,4,5);
const fruits=['apples','oranges','pears'];
console.log(numbers);
fruits[3]='grapes';
fruits.push('mangos');

fruits.unshift('strawberry');
console.log(fruits);
fruits.pop();
console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));
console.log(fruits);*/
const person={
    firstname:'alok',
    lastnname:'oraon',
    age:30,
    hobbies:['sports', 'music', 'new'],
    address:{street: 'IIT Kharagpur',
city:'Kharagpur',country:'India'}
}

person.email='alokora42@gmail.com'
console.log(person.address.city);

const{firstname, lastname,address:{city}} = person;

console.log(person);

const todos=[{
    id:1,
    text:'take out trash',
    isCompleted:true
},
{
    id:2,
    text:'meeting with boss',
    isCompleted:true
},
{
    id:3,
    text:'girlfriend appt',
    isCompleted:false
}];
console.log(todos[1].text);
//jason
const todoJSON=JSON.stringify(todos);
console.log(todoJSON);
//format
for(let i=0;i<10;i++){
    console.log(i);
}
//while 
let i=0;
while(i<10){
    console.log('while loop:',i);
    i++;
}
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text);
}

const todoCompleted=todos.map(function(todo){
    return todo.isCompleted==true;;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);

const x=9;

if(x==10){
    console.log('x is 10');
}else if(x>10){
    console.log('x is greater than 10');
}
else{
    console.log('x is less than 10');
}
const xx=4;
const y=10;

if(xx>5 || y>10){
    console.log('x is more than 5 or y is more than 10');
}

const color= x>10 ? 'red':'blue';

console.log(color);

switch (color) {
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('color is not red nor blue');  
}

function addNums(num1=1,num2=1){
    return num1+num2;
}
const addnum=(num1=1,num2=1)=>num1+num2;
const add=(num1=1)=>num1+5;
console.log(addNums(5,5));
console.log(addnum(5,5));
console.log(add(3));

// constructor function
function Person(firstname, lastname,dob){
this.firstname = firstname;
this.lastname = lastname;
this.dob = new Date(dob);
this.getBirthYear=function(){
    return this.dob.getFullYear();

}
this.getFullName=function(){
    return (this.firstname+' '+this.lastname);
}


}


Person.prototype.getBirthYear=function(){
    return (this.dob.getFullYear());
}
Person.prototype.getFullName=function(){
    return (this.firstname+' '+this.lastname);
}


// class Person
class Persona{
    constructor(firstname, lastname,dob){
        this.firstname = firstname;
this.lastname = lastname;
this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName=function(){
        return (this.firstname+' '+this.lastname);
    }
    
    
}

// instantiate object
const person1= new Person('Alok','oraon','12-17-2002');
const person2= new Person('Alok','oraon','5-17-2000');
const person3=new Persona('life','is different for all',12-6-22);
console.log(person2.dob.getFullYear());
console.log(person2.dob);
console.log(person2.getBirthYear());
console.log(person2.getFullName());

console.log(person1);
console.log(person1.dob.getFullYear());
console.log(person1.dob);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

console.log(person3);//object persona implement here
//Single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

//multiple elements
//console.log(document.querySelectorAll('.item'))
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'))

//const items= document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));

/*const ul =document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent ='alok';
ul.children[1].innerText='Brad';
ul.lastElementChild.innerHTML='<h2>hell0</h2>';

const btn=document.querySelector('.btn');
btn.style.background='green';

btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    console.log(e.target.className);
    document.querySelector('#my-form').style.background='#ccc';
document.querySelector('body').classList.add('bg-dark');

});*/

const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value==''|| emailInput.value==''){
       // alert('Please enter fields');
       msg.classList.add('error');
       msg.innerHTML='please enter all fields';

       setTimeout(()=> msg.remove(),3000);
    }
        else{
      // console.log('successfully');

      const li=document.createElement('li');
      li.appendChild(document.createTextNode(nameInput.value+ ':' +emailInput.value));
        
      userList.appendChild(li);

      nameInput.value='';
      emailInput.value='';
    }
        
    
}




















































































