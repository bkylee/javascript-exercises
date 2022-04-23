const palindromes = function (theString) {
    opThing = [];
    //modify theString to remove punctuation, force lowercase, and to make an array. 
    //unModThing = theString.toString().toLowerCase().split('').filter((letter) => {return punctation.indexOf(letter) === -1;});
    unModThing = theString.replace(/[^\w\s]|_/g, "")
    unModThing = unModThing.toLowerCase().replace(/\s/g, '');
    thing = Array.from(unModThing);

    //length of original argument 
    let end = thing.length ;
    //counter that will be compared to "end" to make sure if all elements match for both arrays 
    let counter = 0;

    //loop to create array of opposite from original 
    for (i = 0; i < end; i ++) {
        opThing.push(thing.pop());
    }

    thing = Array.from(unModThing);
    
    for (i=end -1; i >= 0; i --){
        if (thing[i] === opThing[i]) {
            counter = counter +1;
        }
    }
    if (counter === end) {
        return true;
    }
    else return false;
    //result = opThing.every((element) => {return thing.indexOf(element) !== -1})
    //return result;
};

palindromes('A car, a man, a maraca.');
// Do not edit below this line
module.exports = palindromes;
