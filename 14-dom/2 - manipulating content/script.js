// Manipulando conteúdo

// textContent -> Altera conteúdo interno
// const element = document.querySelector('h1')
// element.textContent = "Olá Devs"


// innerText -> Altera texto interno
// const element = document.querySelector('h1')
// element.innerText = "Olá Devs"

// innerHTML -> Adiciona ou altera código HTML
// const element = document.querySelector('h1')
// element.innerHTML = "Olá Devs <small>!!!</small>"

// value -> Adiciona ou altera value
// const element = document.querySelector('input')
// element.value = "Manipulei legal"

// Atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header') // .setAttribute() -> seta atributos

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class')) // .getAttribute() -> pega atributos

header.removeAttribute('id') // .removeAttribute() -> remove atributos
header.removeAttribute('class')