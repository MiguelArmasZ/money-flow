export function formatMoney(money) {
    const formatMoney = Number(money).toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
    })

    return formatMoney
}

export function formatDate(date) {
    const formatDate = new Date(date).toLocaleString('es-ES', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    })

    return formatDate
}
