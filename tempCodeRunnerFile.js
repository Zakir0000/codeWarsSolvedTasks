function gimme(triplet) {
  let min = Math.min(...triplet);
  let max = Math.max(...triplet);
  let middle = triplet.filter((item) => item > min && item < max);
  return triplet.indexOf(Number(middle.join('')));
}