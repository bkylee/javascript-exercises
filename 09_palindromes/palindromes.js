const palindromes = function (theThing) {
    //var for opposite of theThing
    oppThing ="";
    //array for original argument 
    thing = Array.from(theThing);
    //length of original argument 
    end = thing.length;
    //loop to create opposite of original array 
    for (i = 0; i <= end; i ++) {
        opThing = thing.pop();
    }
    return opThing;
};


palindromes("hello");

// Do not edit below this line
module.exports = palindromes;
