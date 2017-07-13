'use strict'

import chalk from 'chalk'

export default function showTable () {
    function w (num) {
        return chalk.bgHex('#fff').black.bold(num)
    }

    function r (num) {
        return chalk.bgHex('#de0000').white.bold(num)
    }

    function b (num) {
        return chalk.bgHex('#111').white.bold(num)
    }

    function g (num) {
        return chalk.bgHex('#095e2d').white.bold(num)
    }

    /* eslint-disable max-len */
    const rouletteTable = `
  ${ w('    ') }${ r(' 03 ') }${ b(' 06 ') }${ r(' 09 ') }${ r(' 12 ') }${ b(' 15 ') }${ r(' 18 ') }${ r(' 21 ') }${ b(' 24 ') }${ r(' 27 ') }${ r(' 30 ') }${ b(' 33 ') }${ r(' 36 ') }${ g(' col 3 ') }
  ${ w(' 00 ') }${ b(' 02 ') }${ r(' 05 ') }${ b(' 08 ') }${ b(' 11 ') }${ r(' 14 ') }${ b(' 17 ') }${ b(' 20 ') }${ r(' 23 ') }${ b(' 26 ') }${ b(' 29 ') }${ r(' 32 ') }${ b(' 35 ') }${ g(' col 2 ') }
  ${ w('    ') }${ r(' 01 ') }${ b(' 04 ') }${ r(' 07 ') }${ b(' 10 ') }${ b(' 13 ') }${ r(' 16 ') }${ r(' 19 ') }${ b(' 22 ') }${ r(' 25 ') }${ b(' 28 ') }${ b(' 31 ') }${ r(' 34 ') }${ g(' col 1 ') }
      ${ g('     1st 12     ') }${ g('     2nd 12    ') }${ g('      3rd 12     ') }
      ${ g('    01 - 18     ') }${ r('        ') }${ b('        ') }${ g('     19 - 36    ') }
    `

    console.log(rouletteTable)
}
