// console.log("Hello world");
// alert("yes!")

// function showAlert() {
//     alert("This is an alert message!");
// }
 
showAlert = () =>{
    alert("This is an alert message!");
}

//ways to print javascrpit
// document.write("Hello this is DOM")
// console.warn("This is Warning");
// console.error("this is error");
// window.alert("yes")

//javascript variables
var num1 = 20;
var num2 = 30;
// console.log(num1+num2)

//Datatypes
//number
var num = 255;

//string
var str1 = "This is a code";
var str2 = "this is second string";

//objects 
var marks ={
    sufi: 25,
    sufiyan: 25,
    waqas: 25,
}
// console.log(marks);

//Booleans
var abool = true;
var bbool = false;

var und;
// console.log(und);

var n = null;
// console.log(n);

// two types of data types
//primitive--  undef, null, number, string, boolean, symbol
//refernce --Arrays and Objects

//array
var arr = [1,2,3,4,5]
// console.log(arr);

//operators in javascript
//arithmetic
var a =20;
var b =30;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

//assignment
var c = b;
// console.log(c);

//comparisons operators
var x = 20;
var y = 25;

// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);

//logical operators
// console.log(true && false);
// console.log(true || false);
// console.log(!true);

//functions
//dry - dont repeat yourself
function avg(a,b){
    return(a+b)/2;
}
// c = avg(4,6);
// console.log(c);

//arrow function
const avg1 = (a, b) => (a + b) / 2;
// const c = avg1(4, 6);
// console.log(c);

//conditional operators
var age = 4;
// if(age>3){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

//array
var arr1 = [1,2,3,4,5,6]
// console.log(arr1);

// for (var i=0; i<arr.length; i++){
//     console.log[i]
// }

arr1.forEach(function(element){
// console.log(element);
})

//dom manipulation
let elem = document.getElementById('click');
elem.style.fontSize = "1rem";
// console.log(elem);


//Events In Javascript
firstcontainer.addEventListener('click', function(){
console.log("clicked!");
})


//arrow functions
add = (a,b) =>{
    return a+b;
}
let res = add(10,15);
// console.log(res);


//settimeout and setinterval
setTimeout(()=>{
    // console.log("ok! after 3 seconds")
}, 3000)

//setinterval ko jitna time do gy itnay time bad continously log huta rhy ga aur is ko khtm krny k liay clearInterval() use krtay
setInterval(()=>{
    // console.log("ok! after 3 seconds continuosly")
}, 3000)

//json
obj = {name:"Sufi"};
// console.log(typeof(obj));
jso =JSON.stringify(obj);
// console.log(typeof(jso));



//Javascript local storage

