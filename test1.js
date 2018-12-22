
var x = document.getElementsByTagName("p");
x[0].addEventListener("click", function () {
    document.body.style.backgroundColor = 'aqua';
    x[0].innerText = "Hello World!"
});
po = 34;
document.write(po % 7);
