'use strict'

export default function checkThird (bet, result) {
    if (result === 0) {
        return false
    }

    let third

    if (result < 12) {
        third = 1
    } else if (result > 24) {
        third = 3
    } else {
        third = 2
    }

    return bet === third
}
