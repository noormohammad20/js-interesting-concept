/* 
Falsy :
false
0
empty string
undefine
null
NaN

----------------------------
truthy:
true
any number (positive or negative)
any string including single whitespace, '0','false'
[]
{}
anything else that is not falsy will be truthy.
*/

const x = 4
if (x) {
    console.log('variable is truthy')
}
else {
    console.log('variable is falsy')
}