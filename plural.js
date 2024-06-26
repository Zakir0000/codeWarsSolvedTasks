/* 
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.
*/

function plural(n) {
  if (n !== 1) {
    return true;
  } else {
    return false;
  }
}

/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/
function take(arr, n) {
  return arr.slice(0, n);
}
