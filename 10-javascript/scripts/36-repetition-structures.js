
/* 
    AULA 36 - Estrutura de repetição

*/

// for
for(let i = 0; i < 10; i++){
    console.log(i)
}

// break - para a execução do loop
// continue - pula a execução do momento

// while
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

// for...of
let name = "Isaac";
let names = ["Lucas", "João", "Pedro"];

for(let name of names) {
    console.log(name)
}

// for...in
let person = {
    name:"John",
    age:30,
    weight: 88.6,
}

for(let property in person){
    console.log(property);
    console.log(person[property]);
}