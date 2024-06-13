/*Instraction:

solution: You need to return a string that looks like a diamond shape when printed on the screen, using asterisk
(*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
 */

function diamond(n) {
  if (n % 2 === 0 || n <= 0) {
    return null;
  }

  let result = '';

  const middle = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    const stars = n - Math.abs(i - middle) * 2;
    const spaces = (n - stars) / 2;
    result += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
  }

  return result;
}
