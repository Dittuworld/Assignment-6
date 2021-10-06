var coinFlip;
console.log("Coinflip redux");
for (var i = 1; i <= 10; i++) 
{
    coinFlip = Math.round(Math.random());

    if (coinFlip == 0) 
    {
        console.log("Heads");
    } 
    else
     {
        console.log("Tails");
    }
    
}