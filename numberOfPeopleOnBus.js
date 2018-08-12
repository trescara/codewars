//7 Kata Problem This was to calculate the number of people on the bus after a certain number of stops.
// I found this one difficult at the time when I was just getting into Javascript. Might try and refactor this later.

var number = function(busStops){
let peopleCount = 0;
for (let i=0;i<busStops.length;i++){
let currentStop = busStops[i];
let peopleOn = currentStop[0];
let peopleOff = currentStop[1];

  peopleCount +=peopleOn;
  peopleCount -=peopleOff;
  }

  return peopleCount;
}
