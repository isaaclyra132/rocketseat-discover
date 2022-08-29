
/* 
    AULA 35 - throw / try catch

*/

// throw
function sayMyName (name = '') {
    if (name === '') {
        throw new Error("Nome é necesário")
    }

    console.log('Depois do erro')
}

//try... catch
try {
    sayMyName('')
} catch(e) {
    console.log(e)
}