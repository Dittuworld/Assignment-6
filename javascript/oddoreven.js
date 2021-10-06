document.write("<b>Odd/even problem</b>" + "<br/>")

for (var i = 0; i <= 15; i++)
 {
    if (i % 2 === 0) 
    {
        document.write(i + ' is an even number' + "<br/>");
    } else {
      document.write(i + ' is an odd number' + "<br/>");
    }
}