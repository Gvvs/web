var oldColor="";
var color="";
function shawn(){
    tBox=document.getElementById("88888888");
    color=tBox.value;
    if(color===oldColor){tBox.reset();}
console.log(color);






   document.body.style.backgroundColor=color;

    oldColor=color;


}