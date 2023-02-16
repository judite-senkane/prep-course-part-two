/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number): void {
  if (n > 0) {
    for (let i = 0, j = 1; i < n; i++, j++) {
      let str: string = ' '.repeat(n - j);
      let str2: string = '#'.repeat(i + j);
      console.log(str + str2 + str);
    }
  }
}

export { pyramid };
