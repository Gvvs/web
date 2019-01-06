var slider = document.getElementById("myRange");
var output = document.getElementById("demo");


output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  document.body.style.backgroundColor="rgb(this.value,this.value,this.value)";
}