/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
  const stringAArray: string[] = stringA
    .toLowerCase()
    .replace(/\W+/g, '')
    .split('')
    .sort();
  console.log(stringAArray);
  const stringBArray: string[] = stringB
    .toLowerCase()
    .replace(/\W+/g, '')
    .split('')
    .sort();
  console.log(stringBArray);
  const stringAModified = stringAArray.join('');
  const stringBModified = stringBArray.join('');
  return stringAModified === stringBModified;
}

export { anagrams };
