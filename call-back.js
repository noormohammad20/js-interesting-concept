function wellComeMessage(name, greetHandler) {
    // console.log(greetHandler)
    greetHandler(name)
}
// const names = ['tom-hanks', 'tom-brady', 'tom-cruise']
const myObject = { name: 'tom-chinko', age: 11 }
function greetMorning(name) {
    console.log('good-morning', name)
}
function greetEvening(name) {
    console.log('good-evening', name)
}
function greetAfternoon(name) {
    console.log('good-afternoon', name)
}

wellComeMessage('tom-hankes', greetMorning)
wellComeMessage('sakib-hankes', greetAfternoon)
wellComeMessage('bapparaj', greetEvening)


function handleClick() {
    console.log('button is clicked')
}
document.getElementById('my-btn').addEventListener('click', handleClick)

document.getElementById('btn').addEventListener('click', function () {
    console.log('btn is clicked')
})