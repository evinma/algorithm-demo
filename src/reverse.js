const { initList, changeNum } = require('./utils')
/**
 * 反转数组
 * 空间复杂度 O(n)
 * @returns {Array}
 */
function reverse (list) {
    const tmp = []
    const size = list.length
    while (tmp.length < size) {
        tmp.push(list.pop())
    }
    return tmp
}

// const list = initList(5)
// console.log(list)
// console.log(reverse(list))

/**
 * 反转数组
 * 空间复杂度 O(1)
 */
function reverse1 (list) {
    let l = 0
    let r = list.length - 1

    while (l < r) {
        changeNum(list, l, r)
        l++
        r--
    }
}
const list1 = initList(5)
console.log(list1)
reverse1(list1)
console.log(list1)
