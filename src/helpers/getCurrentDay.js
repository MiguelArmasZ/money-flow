export function getCurrentDay() {
    const currentDate = {
        year: () => new Date().getFullYear(),
        month: () => new Date().getMonth() + 1,
        day: () => new Date().getDate()
    }

    const { day, month, year } = currentDate

    const today = `${year()}-0${month()}-${day()}`

    return today
}

export function getMinDate() {
    const minDate = {
        year: () => new Date().getFullYear(),
        month: () => 1,
        day: () => 1
    }

    const { day, month, year } = minDate

    const minDay = `${year()}-0${month()}-0${day()}`

    return minDay
}
