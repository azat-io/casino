'use strict'

import checkColumn from '../lib/check-column'

test('Is 0', () => {
    expect(checkColumn(2, 0)).toEqual(false)
})

test('Is 8 on column 2', () => {
    expect(checkColumn(2, 8)).toEqual(true)
})

test('Is 13 on column 2', () => {
    expect(checkColumn(2, 13)).toEqual(false)
})

test('Is 22 on column 3', () => {
    expect(checkColumn(3, 22)).toEqual(false)
})

test('Is 36 on column 3', () => {
    expect(checkColumn(3, 36)).toEqual(true)
})

test('Is 1 on column 1', () => {
    expect(checkColumn(1, 1)).toEqual(true)
})
