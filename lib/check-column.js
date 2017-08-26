'use strict'

export default function checkColumn (bet, result) {
    if (result === 0) {
        return false
    }

    const column = result % 3 !== 0 ? result % 3 : 3

    return bet === column
}
