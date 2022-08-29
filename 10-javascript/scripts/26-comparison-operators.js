
/* 
    AULA 26 - Operadores de comparação

    Irá comparar valores e retornar um boolean como resposta à comparação
    
*/

let one = 1;
let two = 2;

// igual a ==
console.log(two == 1);
console.log(one == "1");

// diferente de !=
console.log(one != two);
console.log(one != 1);
console.log(one != "1");

// estritamente igual a ===
console.log( one === "1" );
console.log(one === 1);

// estritamente diferente de !==
console.log(two !== "2");
console.log(two !== 2);

// maior que >
console.log(one > two);

// maior igual a >=
console.log(one >= 1);
console.log(two >= 1);

// menor que <
console.log(one < two);

// menor igual a <=
console.log(one <= two);
console.log(one <= 1);
console.log(one <= 0);