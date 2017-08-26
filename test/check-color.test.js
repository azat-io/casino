'use strict'

import checkColor from '../lib/check-color'

test('Is 0', () => {
    expect(checkColor('red', 0)).toEqual(false)
})

test('8 is red', () => {
    expect(checkColor('red', 8)).toEqual(false)
})

test('13 is black', () => {
    expect(checkColor('black', 13)).toEqual(true)
})

test('22 is red', () => {
    expect(checkColor('red', 22)).toEqual(false)
})

test('36 is black', () => {
    expect(checkColor('black', 36)).toEqual(false)
})

test('1 is red', () => {
    expect(checkColor('red', 1)).toEqual(true)
})
