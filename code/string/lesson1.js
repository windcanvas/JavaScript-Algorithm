// export default (str) => {
//   // 1. 字符串按空格进行分割, 保存数组, 数组的元素的先后顺序就是单词的顺序
//   // 2. 对数组进行遍历, 然后每个元素进行反转
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//     // 1. 字符串按照空格进行分割, 保存数组, 数组 的元素的先后顺序就是单词的顺序
//     // 2. 对数组进行遍历, 然后每个元素进行反转
//     return str.split(' ').map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

// export default (str) => {
//     // 1. 字符串按照空格进行分割, 保存数组, 数组 的元素的先后顺序就是单词的顺序
//     // 2. 对数组进行遍历, 然后每个元素进行反转
//     return str.split(/\s/g).map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

export default (str) => {
  // 1. 字符串按照空格进行分割, 保存数组, 数组 的元素的先后顺序就是单词的顺序
  // 2. 对数组进行遍历, 然后每个元素进行反转
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
