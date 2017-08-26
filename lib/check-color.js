'use strict'

export default function checkColor (bet, result) {
    if (result === 0) {
        return false
    }

    const red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32,
        34, 36]

    let color = red.indexOf(result) >= 0 ? 'red' : 'black'

    return bet === color
}
