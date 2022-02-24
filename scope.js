const favNum = 29
console.log(favNum)
function add(first, second) {
    // console.log(mood) //hoisting
    const result = first + second
    if (result > 9) {
        let mood = 'happy'
        mood = 'cranky'
        console.log(mood)
    }
    return result
}
const sum = add(22, 44)
// console.log(sum)
// console.log(mood)

for (let i = 0; i < 10; i++) {
    console.log(i)
}