let notas = [];
let nota;
let soma = 0;
let contador = 0;

alert("Insira as notas de seus alunos. Quando acabar digite 'SAIR'");

while (true) {
    nota = prompt("Insira a nota do aluno (ou digite 'SAIR' para finalizar):");
    
    if (nota.toUpperCase() === 'SAIR') {
        break;
    }
    
    nota = parseFloat(nota);
    
    if (!isNaN(nota)) {
        notas.push(nota);
        soma += nota;
        contador++;
    } else {
        alert("Por favor, insira uma nota válida.");
    }
}

if (contador > 0) {
    let media = soma / contador;
    alert("A média da turma em Matemática é: " + media.toFixed(2));
} else {
    alert("Nenhuma nota foi inserida.");
}
