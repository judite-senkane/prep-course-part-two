/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
  const stringArray = str.toLowerCase().replace(/\s+/g, '').split('');
  let result: Record<string, number> = {};
  stringArray.forEach((char) => {
    result[char] = (result[char] || 0) + 1;
  });
  const maxValue = Math.max(...Object.values(result));
  return Object.keys(result).filter((char) => result[char] === maxValue)[0];
}

export { maxChar };
