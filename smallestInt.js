//for this test you are given a set of arrays (not empty) and
//must return the smallest value. Values can go negative.
//I used the Math.min method for this and a spread operator in the arugment.
//Passed all tests and submitted.

class SmallestIntegerFinder {
  findSmallestInt(args) {
  return Math.min(...args);
  }
}
