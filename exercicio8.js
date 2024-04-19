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

console.log("Letras inseridas:");
console.log(letras);
