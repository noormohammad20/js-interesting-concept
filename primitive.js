/* 
Data Types:
primitive

1: number
2: string
3: boolean
4: undefine
5: null
6: symbol

non-primitive
7: object 
*/

let a = 'hello'
let b = a
console.log(a)
a = 'gello'
console.log(a, b)

const x = { job: 'web developer' }
const y = x
console.log(x, y)
// x.job = 'font end developer'
y.job = 'font end developer'

console.log(x, y)