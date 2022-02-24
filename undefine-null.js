/* 
1. variable value not assigned
2. function but didn't return anything 
3. just wrote return but didn't return anything 
4. parameter that isn't passed
5. property that doesn't exist in an object
6.accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefine
*/

let first
// console.log(first)

function second(x, y) {
    const sum = x + y
}
const result = second(5, 90)
// console.log(result)

function add(a, b) {
    const sum = a + b
    return
}
const fourth = add(2, 6)
// console.log(fourth)

function double(a, b) {
    const result = a * 2
    // console.log(b)
    return result
}
double(81)

const fifth = { name: 'sogir', age: 15, location: 'bandarban' }
// console.log(fifth.phone)

const sixth = [3, 55, 65, 88, 4]
// console.log(sixth[5])
delete sixth[2]
console.log(sixth[2])

const seventh = undefined
// console.log(seventh)

const myObject = { name: 'samad', profession: null }