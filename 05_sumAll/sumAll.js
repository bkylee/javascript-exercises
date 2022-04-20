const sumAll = function(thing, ...nums) {
    let modArray = thing.filter(x => !nums.includes(x));
    total = modArray.reduce((previousValue, currentValue) => {return previousValue + currentValue});
    return total;
};

// Do not edit below this line
module.exports = sumAll;
