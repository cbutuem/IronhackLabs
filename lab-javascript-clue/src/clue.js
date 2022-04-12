// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45
  },
  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 2
  },
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 3
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36
  },
  {
    firstName: 'Jack',
    lastName: 'Mustar',
    occupation: 'Retired Football player',
    age: 62
  }
];

// Rooms Array

const roomsArray = [
  {name: 'Dining Room'},
  {name: 'Conservatory'},
  {name: 'Kitchen'},
  {name: 'Study'},
  {name: 'Library'},
  {name: 'Billiard Room'},
  {name: 'Lounge'},
  {name: 'Ballroom'},
  {name: 'Hall'},
  {name: 'Spa'},
  {name: 'Living Room'},
  {name: 'Observatory'},
  {name: 'Theater'},
  {name: 'Guest House'},
  {name: 'Patio'}
];

// Weapons Array

const weaponsArray = [
{
  name: 'rope',
  weight: 10
},
{
  name: 'knife',
  weight: 8
},
{
  name: 'candlestick',
  weight: 2
},
{
  name: 'dumbbell',
  weight: 30
},
{
  name: 'poison',
  weight: 2
},
{
  name: 'axe',
  weight: 15
},
{
  name: 'bat',
  weight: 13
},
{
  name: 'trophy',
  weight: 25
},
{
  name: 'pistol',
  weight: 2
}
];


// ITERATION 2

function selectRandom(randomObj) {
  return(chooseStack[Math.floor(Math.random() * chooseStack.length)]);
}

function pickMystery() {
  const guilty = [selectRandom(suspectsArray), selectRandom(roomsArray), selectRandom(weaponsArray)]; 
  return guilty
}


// ITERATION 3

function revealMystery(reveal) { 
return `${reveal[0].firstName} ${reveal[0].lastName} killed Mr. Boddy using the ${reveal[2].name} in the ${reveal[1].name}!` 
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
