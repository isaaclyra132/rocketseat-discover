
/* 
    AULA 10 - let and const scope
*/

// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco?', y)

{
    let y = 0
}

console.log('> existe y depois do bloco?', y)
