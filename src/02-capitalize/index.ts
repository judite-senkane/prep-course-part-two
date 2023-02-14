/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */
//1. sadalīt vārdus array
//- uztaisīt mainīgo kur ir atlikušais vārds
//3. atdalīt pirmo burtu un padarīt to par uppercase
//4. Savienot pirmo burtu ar pārējo vārdu
//5. savienot atkal visu vienā string
function capitalize(str: string) {
  let stringArray: string[] = str.split(" ");
  stringArray = stringArray.map((word: string) => {
    const firstLetter: string = word[0].toUpperCase();
    const restOfWord: string = word.slice(1);
    return firstLetter + restOfWord;
  })
  return stringArray.join(" ");
  
}

export { capitalize };
