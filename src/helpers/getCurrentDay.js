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
