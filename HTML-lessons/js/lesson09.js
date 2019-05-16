/*jshint esversion: 6 */
// This is a Javascript object
var person = {
  name: "Andrew",
  age: 25,
  likesPizza: true
};

var putItHere = document.getElementById("thisTag");
putItHere.innerHTML = "person.likesPizza: " + person.likesPizza; // This way of accessing property is called 'dot notation'
console.log("person['likesPizza']: " + person["likesPizza"]); // This way is called 'bracket notation'.

// This is a Javascript array
let colorsILike = ["red", "blue", "purple", "green", "orange"];
colorsILike.push("gold");
colorsILike.unshift("silver");
colorsILike[3] = "pink";

// These are Javascript function
function greet(name) {
  console.log("Hello " + name);
}
greet("John");
