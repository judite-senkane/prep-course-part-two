/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */


class Words {
  count(str: string) {
    const words = str.toLowerCase().split(/\s+/g);
    const wordCount: Record<string, number> = {};
    words.forEach((word) => {
      const counterForWord = wordCount[word];
      if (!word) return;
      if (Object.hasOwn(wordCount, word)) {
        wordCount[word] = counterForWord + 1;
      } else {
        wordCount[word] = 1;
      }
    });
    return wordCount;
  }
}

export { Words };
