'use strict'

import checkThird from '../lib/check-third'

test('Is 0', () => {
    expect(checkThird(2, 0)).toEqual(false)
})

test('Is 8 on third 2', () => {
    expect(checkThird(2, 8)).toEqual(false)
})

test('Is 13 on third 2', () => {
    expect(checkThird(2, 13)).toEqual(true)
})

test('Is 22 on third 3', () => {
    expect(checkThird(3, 22)).toEqual(false)
})

test('Is 36 on third 3', () => {
    expect(checkThird(3, 36)).toEqual(true)
})

test('Is 1 on third 1', () => {
    expect(checkThird(1, 1)).toEqual(true)
})
