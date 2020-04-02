const { initList, changeNum } = require('../utils')
const list = initList(20)

const partition = (list, p = 0, q = list.length) => {
    const middle = list[q - 1]
    let i = p
    let j = q - 1

    while (i < j) {
        debugger
        let c_l = list[i]

        if (c_l > middle) {
            changeNum(list, i, --j)
        } else {
            i++
        }
    }
    changeNum(list, i, q - 1)
    return i
}
const qSort = (list, p = 0, q = list.length) => {
    if (q - p <= 1) return

    const m = partition(list, p, q)
    qSort(list, p, m)
    qSort(list, m, q)
}
console.log('origin', list)
qSort(list)
console.log('newList', list)