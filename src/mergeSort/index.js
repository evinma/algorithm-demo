const { initList } = require('../utils')
const list = initList(100000, 0, 100000)

const merge = (list, p, q, r) => {
    const left = list.slice(p, q)
    const right = list.slice(q, r)
    left.push(Infinity)
    right.push(Infinity)
    let lIndex = 0
    let rIndex = 0

    while (p < r) {
        list[p++] = left[lIndex] < right[rIndex] ? left[lIndex++] : right[rIndex++]
    }
}
const mergeSort = (list, p = 0, r = list.length) => {
    if (r - p === 1) return

    const q = Math.floor((r + p) / 2)
    mergeSort(list, p, q)
    mergeSort(list, q, r)

    merge(list, p, q, r)
}
// console.log('origin', list)
console.time('sort')
mergeSort(list)
console.timeEnd('sort')
// console.log('newList', list)