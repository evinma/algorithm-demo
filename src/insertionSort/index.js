const { initList, changeNum } = require('../utils')
const list = initList(21)

const insertionSort = list => {

    for (let i = 1; i < list.length; i++) {
        const c = list[i]
        let j = i - 1
        while(j >= 0) {
            if (list[j] > c) {
                changeNum(list, j, j + 1)
            }
            j--
        }
    }
}
console.log('origin', list)
insertionSort(list)
console.log('newList', list)