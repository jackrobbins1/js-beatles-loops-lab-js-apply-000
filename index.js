// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
let newArr = [];

function theBeatlesPlay(musician, instrument) {
  for (i=0; i<musician.length; i++) {
    newArr.push(
      `${musicians[i]} plays ${instrument[i]}`
    );
  }
}

function johnLennonFacts(facts) {
  for (i=0; i<facts.length; i++) {
    let arr = [];
    arr[i] = `${facts[i]} !!!`;
  }
  return arr;
}
