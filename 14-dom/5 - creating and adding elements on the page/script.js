// Criando e adicionando elementos

// createElement -> Cria elemento
const div = document.createElement('div')
div.innerText = "Olá Devs!"

// append prepend -> Adiciona na página
// const body = document.querySelector('body')
// body.append(div) // -> adiciona depois
// body.prepend(div) // -> adiciona antes

// Adicionando elementos

// insertBefore -> usado para adicionar entre elementos
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)