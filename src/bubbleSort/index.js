const { initList, changeNum } = require('../utils')
const list = initList(20)

const bubbleSort = list => {
    let r = list.length - 1

    while (r >= 0) {
        let c = 0
        while (c <= r) {
            if (list[c] > list[c + 1]) {
                changeNum(list, c, c + 1)
            }
            c++
        }
        r--
    }
}
console.log('origin', list)
bubbleSort(list)
console.log('newList', list)