const sumAll = function(x,y) {
    //create a function to make a new array that has the common elements between the array enetered in the parameter and the arguments passed
    if (typeof(x) != "number" || typeof(y) != "number") {
        return "ERROR";
    }
        else if (x < 0 || y < 0) {
            return "ERROR";
        }
    if (y > x) {
    let sum = x; 
    for (i = x + 1; i <= y; i++){
        sum = sum + i;
    }
    return sum; 
}
    else if (x > y) {
            let sum = y; 
            for (i = y + 1; i <= x; i++){
                sum = sum + i;
            }
            return sum; 
        
    }
};

sumAll(1,4);
// Do not edit below this line
module.exports = sumAll;

