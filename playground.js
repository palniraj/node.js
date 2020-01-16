//regular function vs arrow function
//regular function
let fun = function() {      //let vs var
    console.log('hello world')
}
fun();

//arrow function
let foo = () => {
    console.log('hello world np');
}
foo();
/*
// var vs let
var a= 20;
var b= 10;
if (a==20) {
   // console.log('run');
   var a = 12;
   let b = 30;          //only work here but 
   console.log('inside if block a, b', a, b);
}
console.log('outsite if block a, b', a,b);
*/

// temlate string
//let str = 'Niraj';
//console.log(`hello! frm ${str}`);

//map function
let arr = [1,3,4,5];
for (let i=0; i<arr.length;i++){
    console.log(arr[i]*2)

}

//use map
//arr.map((a, index)=>){
  //  console.log(a*2, index);
//})

//arr.map(a=> {
  //  console.log('helo');
//})
arr.map(a=>console.log('hello'))
