/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
  const intAsString: string = int.toString().replace("-", "");
  const numberArray: string[] = intAsString.split("");
  const numberArrayReversed: string[] = numberArray.reverse();
  const reversedString = numberArrayReversed.join("");
  return Number(reversedString) * Math.sign(int);
}

export { reverse };
