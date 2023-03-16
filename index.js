// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
  };

const returnLastTwoDrivers = function(array){
    return array.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult){
    return (function(fare){
        return fare* mult
    })
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arg1, arg2) => {
    if (arg2 == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arg1)
    }
    else if (arg2 == returnLastTwoDrivers){
        return returnLastTwoDrivers(arg1)
    }
 }



