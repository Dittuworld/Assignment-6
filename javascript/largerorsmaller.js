document.write("<b>Find larger number problem</b>" + "<br/>")
var a = parseInt(prompt("Enter the first number"));
var b = parseInt(prompt("Enter the second number"));
if (a > b)
 {
    document.write("The larger number is " + a + "<br/>");
} else if (b > a) {
    document.write("The larger number is " + b + "<br/>");
} 
else {
    document.write("Both numbers are equal." + "<br/>");
}
