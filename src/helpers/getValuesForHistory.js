export function getValuesForHistory(incomes, spents) {
    let obj = {}
    let arr = []

    const giveData = (item) => {
        const { date, quantity } = item
        const getMonth = new Date(date).toLocaleString('es-Es', {
            month: 'numeric'
        })

        return [getMonth, quantity]
    }

    incomes?.forEach((item) => {
        const [getMonth, quantity] = giveData(item)

        obj[getMonth] ??= {}
        obj[getMonth]['incomes'] ??= 0
        obj[getMonth]['incomes'] += Number(quantity)
    })

    spents?.forEach((item) => {
        const [getMonth, quantity] = giveData(item)

        obj[getMonth] ??= {}
        obj[getMonth]['spents'] ??= 0
        obj[getMonth]['spents'] += Number(quantity)
    })

    for (const prop in obj) {
        const formatDate = new Date(prop).toLocaleString('es-Es', {
            month: 'long'
        })
        arr = [
            ...arr,
            {
                month: formatDate,
                incomes: obj[prop].incomes || 0,
                spents: obj[prop].spents || 0
            }
        ]
    }

    return arr.sort()
}
