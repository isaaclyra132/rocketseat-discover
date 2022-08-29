
/* 
    AULA 21 - Manipulando Dados

    * Prototype
    * prototype-based language
    * prototype chain
    * __proto__
    
*/

/* 
    * Type conversion (typecasting) vs Type coersion
    * Alteração de um tipo de dado para outro tipo  
*/
console.log('9' + 5) // coersion
console.log(Number('9')+5) //conversion

/**
    Manipulando Strings e Números
 */

// Transformar String em Número e Número em String
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

// Transformar um número quebrado 2 casas decimais e trocar ponto por vírgula
let number = 123.1245312904812367
console.log(number.toFixed(2).replace(".", ","))

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também
let word = "Programar é muito bacana!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())


/**
    Manipulando Strings e Arrays
 */

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Verificar se o texto contém a palavra Amor
let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))

// Criar Array com construtor
let myArray = new Array(10)
console.log(myArray)

// Contar elementos de um array
console.log(['a','b','c'].length)

// Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulacao"
console.log(Array.from(word))

/* 
    Manipulando Arrays
*/

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array
console.log(techs.slice(1,2))

// remover 1 ou mais itens em qualquer posição do array
console.splice(1,2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)