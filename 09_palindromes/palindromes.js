const palindromes = function (theThing) {
    opThing = [];
    //array for original argument 
    thing = Array.from(theThing);
    //length of original argument 
    end = thing.length;
    //loop to create opposite of original array 
    for (i = 0; i < end; i ++) {
        opThing.push(thing.pop());
    }
    thing = Array.from(theThing);
    result = opThing.every((element) => {return thing.indexOf(element) !== -1})
    return result;
};
// Do not edit below this line
module.exports = palindromes;
