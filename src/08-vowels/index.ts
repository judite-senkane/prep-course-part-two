/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
  const stringArray: string[] = s.split('');
  const vowelsArray: string[] = stringArray.filter((letter) =>
    letter.match(/[aeiou]/gi)
  );
  return vowelsArray.length;
}

export { vowels };
