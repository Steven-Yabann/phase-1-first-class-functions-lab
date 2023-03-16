// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
  };

const returnLastTwoDrivers = function(array){
    return array.slice(-2);
}

 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 
 let createFareMultiplier = (fare) => 
 { return (function(fare){ let ans = fare**2; return ans})}

 const fareDoubler = (fare) => {return fare*2}

 const fareTripler = (fare) => {return fare*3}

 const selectDifferentDrivers = (arg1, arg2) => {
    if (arg2 == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arg1)
    }
    else if (arg2 == returnLastTwoDrivers){
        return returnLastTwoDrivers(arg1)
    }
 }



