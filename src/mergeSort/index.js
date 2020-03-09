const { initList } = require('../utils')
const list = initList(20)
const list1 = initList(5)
const list2 = initList(5)

const merge = (left, right) => {
    const total = left.length + right.length
    left.push(Infinity)
    right.push(Infinity)
    const temp = []
    let lIndex = 0
    let rIndex = 0

    while (temp.length < total) {
        if (left[lIndex] < right[rIndex]) {
            temp.push(left[lIndex++])
        } else {
            temp.push(right[rIndex++])
        }
    }
    return temp
}
const mergeSort = list => {
    if (list.length === 1) return list

    const middle = Math.floor(list.length / 2)
    const left = mergeSort(list.slice(0, middle))
    const right = mergeSort(list.slice(middle))

    return merge(left, right)
}
console.log('origin', list)
console.log(mergeSort(list))
// console.log('newList', list)
// console.log(merge(list1, list2))