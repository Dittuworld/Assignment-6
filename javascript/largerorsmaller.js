document.write("<b>Find larger number problem</b>" + "<br/>")
var a =parseInt(window.prompt("enter the first number"));
var b =parseInt(window.prompt("enter the second number"));

if(isNaN(a) || isNaN(b)){
    alert("enter the appropriate number");
}
else if(a == b){
    document.write("two numbers are equal");
}
else if(a> b){
    document.write(a +  " is larger");
}else{
    document.write(b +  " is larger");
}