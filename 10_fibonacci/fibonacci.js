const fibonacci = function(x) {
    x = Number(x);
    if (x === 0) {
        return 0;
    }
    else if (x < 0) {
        return "OOPS";
    }
    else if (x === 1){
        return 1;
    }
    else result = fibonacci(x-1) + fibonacci(x-2);
    return result; 
};
fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
