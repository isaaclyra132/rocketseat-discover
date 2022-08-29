// Eventos
// const h1 = document.querySelector('h1')

// h1.addEventListener('click', print)

// function print() {
//     console.log('print')
// }

// h1.addEventListener('click', function() {
//     console.log('outro momento')
// })

// argumento event
const input = document.querySelector('input')

input.onkeypress = function(event) {
    console.log(event.currentTarget.value)
}