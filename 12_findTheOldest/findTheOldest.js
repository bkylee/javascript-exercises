const findTheOldest = function(people) {
    const oldPerson =  people.reduce((a, b) => {
        const date = new Date();
        const current = date.getFullYear();
        let oldest = a;
        if (oldest.yearOfDeath === undefined) {
            oldest.yearOfDeath = current;
        }
        let nextPerson = b;
        if (nextPerson.yearOfDeath === undefined) {
            nextPerson.yearOfDeath = current;
        }
        if ((oldest.yearOfDeath-oldest.yearOfBirth) > (nextPerson.yearOfDeath - nextPerson.yearOfBirth)){
            // console.log(oldest);
            return oldest; 
        }
        else 
        // console.log(nextPerson);
        return nextPerson;
    }, {});
    return oldPerson;
}

// findTheOldest(people);


// Do not edit below this line
module.exports = findTheOldest;
