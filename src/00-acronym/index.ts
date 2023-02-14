/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
  const cleanInput = input.replace("'", "").replace(/[\W_]+/g, " ");
  const wordArray = cleanInput.split(" ");
  const res = wordArray.map((word) => {
  return word[0].toUpperCase()});
  return res.join("");
};

export { parse };
