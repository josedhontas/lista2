var letras = [];

for (var i = 0; i < 10; i++) {
    var letra = prompt("Digite uma letra (ou deixe em branco para encerrar):");

    if (letra === null || letra === "") {
        break;
    }

    if (letra.length === 1 && letra.match(/[a-z]/i)) {
        letras.push(letra);
    } else {
        alert("Por favor, digite apenas uma letra válida.");
        i--;
    }
}

console.log("Primeira letra digitada:", letras[0]);
console.log("Quarta letra digitada:", letras[3]);
console.log("Quinta letra digitada:", letras[4]);
console.log("Última letra digitada:", letras[letras.length - 1]);
console.log("Tamanho da lista criada:", letras.length);
