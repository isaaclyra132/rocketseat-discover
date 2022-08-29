
/* 
    AULA 20 - Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
    
*/

// declarar funções construtoras com letra maiúscula é uma boa prática
function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const isaac = new Person("Isaac")
const lucas = new Person("Lucas")
console.log(isaac.walk())
console.log(lucas.walk())