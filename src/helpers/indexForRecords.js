export function indexForRecords() {
    const indexs = document.querySelectorAll(
        '.Card-record-point--index'
    )

    indexs.forEach((index, i) => {
        index.textContent = `${i + 1}`
    })
}
