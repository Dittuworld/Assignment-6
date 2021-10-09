var coinFlip;
window.console.log("Coinflip streak");
do {
    coinFlip = Math.round(Math.random());

    if (coinFlip == 0) 
    {
        window.console.log("Heads");
    } else {
        window. console.log("tails");
    }
} while (coinFlip);