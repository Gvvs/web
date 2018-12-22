/*jshint esversion: 6 */
var name= 'Andrew'; // This is a String Literal
/* It's important to note that 'let' and 'var' are not the same,
but they do similar things. */
let nickName=''; // This is a String Literal, too, but it's EMPTY.
let dog='Boo', cat='twing'; // You can declare two variables on one line with a comma.
let age=28; // This is a Number Literal
let favoriteColor=null; // This is called a null and it means 'nothing'. It's used to clear variables
let isReady=false; // Here's a Boolean Literal. Only two choices are possible.
let plansForFriday=undefined; // This is for variables you might not know the value of yet.

const numberOfDaysInAWeek = 7; // If you need a variable that you know won't change, use 'const'
// numberOfDaysInAWeek=4; // This will throw an error, because you can't change a constant's value

console.log(name, nickName, dog, age, favoriteColor, isReady, plansForFriday, numberOfDaysInAWeek);
let grabIt=document.getElementById('feedback');
function putItOnThePage(){
  grabIt.innerHTML=isReady;
}









