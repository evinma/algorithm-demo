const initList = (num, start = 0, end = 100) => {
    const list = Array(num)
    for (let i = 0; i < num; i++) {
        list[i] = Math.round(Math.random() * (end - start) + start)
    }
    return list
}
const changeNum = (list, l, r) => {
    const tmp = list[l]
    list[l] = list[r]
    list[r] = tmp
}

module.exports = {
    initList,
    changeNum
}