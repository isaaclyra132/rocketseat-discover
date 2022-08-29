// Alterando estilos
const element = document.querySelector('body')


// style -> possibilita modificar o estilo das coisas
// element.style.backgroundColor = "lightgreen"
// console.log(element.style.backgroundColor)

// classList

element.classList.add('active', 'green') // adiciona estilos
console.log(element.classList)
element.classList.remove('active') // remove estilo
element.classList.toggle('active') // se já estiver com a classe, ele remove, se não, ele adiciona