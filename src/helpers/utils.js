export const calculateTotal = (arr) => {
    if (!arr || arr?.length === 0) return 0

    const total = arr.reduce((acc, val) => acc + val, 0)

    return total.toFixed(2)
}

export const imageStrg = (data) => {
    const str = new Buffer.from(data).toString('base64')
    if (str) return `data:image/png;base64,${str}`
}

export function hasEmptyProperty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) if (obj[key].length === 0) return true
    }
    return false
}

export const displayTime = (timestamp) => {
    const date = new Date(timestamp)

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const day = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()
    const hour = date.getHours() + ':' + date.getMinutes()
    return `${monthNames[monthIndex]} ${day}, ${year} at ${hour}`
}
