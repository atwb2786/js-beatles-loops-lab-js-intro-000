
const musicians = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"
];

const instruments = [
  "Guitar",
  "Bass Guitar",
  "Lead Guitar",
  "Drums"
];

function theBeatlesPlay(musicians, instruments) {
  let beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    for (var i = 0; i < instruments.length; i++) {
      beatles.push(musicians[i] + ' plays ' + instruments[i])
    }
  }
  return beatles;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let johnLennon = [];
  let count = 0;
  while (count < facts.length) {
    johnLennon.push(facts[count] + '!!!');
    count++;
  }
  return johnLennon;
}

function iLoveTheBeatles(number) {
  let beatlesLove = [];
  var i = number;

  function incrementVariable() {
    number = number + 1;
    return number;
  }

  do {
    beatlesLove.push("I love the Beatles!");
  } while (incrementVariable() < 15);
  return beatlesLove;
}
