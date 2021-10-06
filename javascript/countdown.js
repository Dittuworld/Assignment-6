document.write("<b>Count down </b>" + "<br/>")

var num = parseInt(prompt("Enter a number to count down from"), 10);

for (var i = num; i >= 0; i -= 1) 
{
    document.write(i + "<br/>");
}