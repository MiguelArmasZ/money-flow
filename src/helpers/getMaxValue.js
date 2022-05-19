export function getMaxCategoryValue(array) {
    const obj = {}
    let categoryName = ''
    let maxValue = 0

    array?.forEach((item) => {
        const { category, quantity } = item
        obj[category] ??= 0
        obj[category] += Number(quantity)
    })

    const values = Object.values(obj)

    if (values.length !== 0) {
        maxValue = Math.max(...values)
    } else {
        maxValue = 0
    }

    for (const prop in obj) {
        obj[prop] === maxValue ? (categoryName = prop) : ''
    }

    return [maxValue, categoryName]
}

export function getMaxRecord(array) {
    const obj = {}
    let result = {}
    array?.forEach((item) => {
        const { concept, quantity } = item
        obj[concept] ??= 0
        obj[concept] = Number(quantity)
    })

    for (const prop in obj) {
        const maxValue = Math.max(...Object.values(obj))
        if (obj[prop] === maxValue) {
            result = { concept: prop, quantity: maxValue }
        }
    }

    return [result]
}

export function getTotalRecords(array) {
    let arrBuild = []
    let result = 0
    array?.map((item) => {
        const { quantity } = item

        arrBuild = [...arrBuild, Number(quantity)]
    })

    for (let i = 0; i < arrBuild.length; i++) {
        result += arrBuild[i]
    }

    return result
}
