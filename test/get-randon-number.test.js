'use strict'

import getRandomNumber from '../lib/get-random-number'

test('Number less than 37', () => {
    expect(getRandomNumber()).toBeLessThan(37)
})
