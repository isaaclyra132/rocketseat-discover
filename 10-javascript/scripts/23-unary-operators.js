
/* 
    AULA 23 - Operadores unários
        typeof
        delete
    
*/
const person = {
    name: 'Mayk',
    age: 25,
}

console.log(typeof person) // mostra o tipo de dado do objeto

delete person.age // deleta uma propriedade de dentro do objeto

console.log(person)
