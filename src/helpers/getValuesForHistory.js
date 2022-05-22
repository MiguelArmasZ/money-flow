export function getValuesForHistory(incomes, spents) {
  let obj = {}
  let arr = []

  const giveData = (item) => {
    const { date, quantity } = item
    const getMonth = Number(date.split('-').slice(1, 2).join(''))

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
    const monthsOfYear = {
      1: 'enero',
      2: 'febrero',
      3: 'marzo',
      4: 'abril',
      5: 'mayo',
      6: 'junio',
      7: 'julio',
      8: 'agosto',
      9: 'septiembre',
      10: 'octubre',
      11: 'novembre',
      12: 'diciembre'
    }

    arr = [
      ...arr,
      {
        month: monthsOfYear[prop],
        incomes: obj[prop].incomes || 0,
        spents: obj[prop].spents || 0
      }
    ]
  }

  return arr.sort()
}
