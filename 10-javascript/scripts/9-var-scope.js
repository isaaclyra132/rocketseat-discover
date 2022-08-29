
/* 
    AULA 9 - var scope

    var é global e, também local

*/

// var é global e poderá funcionar fora de um escopo de bloco
// hoisting
console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco?', x)

