const palindromes = function (theThing) {
    opThing == [];
    //array for original argument 
    thing = Array.from(theThing);
    //length of original argument 
    end = thing.length;
    //loop to create opposite of original array 
    for (i = 0; i <= end; i ++) {
        opThing = thing.pop();
    }
    thing = Array.from(theThing);
    for (i = 0; i <= end; i ++)
        for (j = end; j >= 0; j++)
        if (opThing[i] === thing[j]) {
            return true;
        }
        else return false;
};


palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
