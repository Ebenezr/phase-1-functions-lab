// Code your solution in this file!
function distanceFromHqInBlocks(someValue){

    return someValue > 42 ?  someValue - 42 : 42 - someValue;
}

function distanceFromHqInFeet(someValue){
    return someValue > 42 ?  (someValue - 42)*264 : (42 - someValue)*264;
}
function distanceTravelledInFeet(start , destination){
    return destination > start? (destination- start) * 264 : (start - destination) * 264 
  
}
function calculatesFarePrice(start, destination){
    
    return distanceTravelledInFeet(start, destination) < 400 ? 0
    : distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000 ?  (distanceTravelledInFeet(start, destination)-400) * 0.02
    : distanceTravelledInFeet(start, destination) >2000 && distanceTravelledInFeet(start, destination) <= 2500 ? 25
    : 'cannot travel that far'
   

}
console.log(calculatesFarePrice())