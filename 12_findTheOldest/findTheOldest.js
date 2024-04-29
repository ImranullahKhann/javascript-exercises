const findTheOldest = function(people) {
  return people.reduce((last, current) => {
    // Giving age if  yearOfDeath is not provided
    currentYear = new Date().getFullYear();
    if (!last.yearOfDeath) last.yearOfDeath = currentYear;
    if (!current.yearOfDeath) current.yearOfDeath = currentYear;
    // if last oldest person is older than the current person
    if (last.yearOfDeath - last.yearOfBirth > current.yearOfDeath - current.yearOfBirth) return last;
    else return current;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
