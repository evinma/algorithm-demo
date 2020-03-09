const { initList, changeNum } = require('../utils')
const list = initList(20)

const selectSort = list => {
    const min = { val: Infinity, index: 0 }

    for (let i = 0; i < list.length - 1; i++) {
        min.val = Infinity
        let j = i
        while (j < list.length) {
            if (list[j] < min.val) {
                min.val = list[j]
                min.index = j
            }
            j++
        }
        changeNum(list, i, min.index)
    }
}
console.log('origin', list)
selectSort(list)
console.log('newList', list)