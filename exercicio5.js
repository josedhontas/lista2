let pessoas = [
    {
        nome: "Roberto",
        idade: 30,
        cpf: "08879520438",
        altura: 1.81,
        maior_idade: true
    },
    {
        nome: "Maria",
        idade: 25,
        cpf: "12345678901",
        altura: 1.65,
        maior_idade: true
    },
    {
        nome: "João",
        idade: 17,
        cpf: "98765432109",
        altura: 1.75,
        maior_idade: false
    }
];

console.log("Primeiro elemento:");
console.log(pessoas[0]);
console.log("Tamanho da lista: " + pessoas.length);
console.log("Último elemento:");
console.log(pessoas[pessoas.length - 1]);
