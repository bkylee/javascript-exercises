const sumAll = function(thing, ...nums) {
    modArray = (thing,nums) => 
    {newArray = [];
        for (i of thing) {
        for (j of nums) {
            if (thing[i] === nums[j]){
                newArray.push(thing[i]);
            }
        }
    }
    return newArray; 
}
    let newArray = modArray(thing,nums);
    total = modArray.reduce((previousValue, currentValue) => {return previousValue + currentValue});
    return total;
});

// Do not edit below this line
module.exports = sumAll;
