'use strict'

import checkNumber from '../lib/check-number'

test('1 is not 4', () => {
    expect(checkNumber(1, 4)).toEqual(false)
})

test('22 is 22', () => {
    expect(checkNumber(22, 22)).toEqual(true)
})
