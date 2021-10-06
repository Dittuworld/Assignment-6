document.write("<b> Coin Flip problem</b>" + "<br/>")
var coinFlip = Math.round(Math.random());
var choice = prompt("select heads or tails");
if (coinFlip) 
{ 
    if (choice === "heads") 
    {
        document.write("The flip was heads and you chose heads...you win!" + "<br/>");
    } 
    else 
    {
        document.write("The flip was heads and you chose tails...you lose!" + "<br/>");
    }
} 
else 
{ 
    if (choice === "heads") {
        document.write("The flip was tails and you chose heads...you lose!" + "<br/>");
    }
     else 
    {
        document.write("The flip was tails and you chose tails...you win!" + "<br/>");
    }
}