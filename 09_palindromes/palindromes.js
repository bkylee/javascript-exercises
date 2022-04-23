const palindromes = function (theThing) {
    const punctation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' ;
    opThing = [];
    //array for original argument 
    thing = theThing.split('').filter((letter) => {return punctation.indexOf(letter) === -1;});
    //length of original argument 
    let end = thing.length  ;
    //loop to create opposite of original array 
    let counter = 0;


    for (i = 0; i < end; i ++) {
        opThing.push(thing.pop());
    }
    thing = Array.from(theThing);
    
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

palindromes('ZZZZ car, a man, a maracaz.');
// Do not edit below this line
module.exports = palindromes;
