const sumAll = function(thing, ...nums) {
    //create a function to make a new array that has the common elements between the array enetered in the parameter and the arguments passed
    let newArray = (thing,nums) => 
    {for (i= 0; i<thing.length; i++) {
        for (j=0; i<nums.length; i++) {
            if (thing[i] === nums[j]){
                newArray.push(thing[i]);
            }
        }
    }
    return newArray; 
}
    newArray(thing, nums); 
    total = Array.from(newArray);
    total = total.map(Number);
    total = total.reduce((previousValue, currentValue) => {return previousValue + currentValue});
    return total;
};

// Do not edit below this line
module.exports = sumAll;
