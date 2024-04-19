function inserirNotas(nomeEstudante, disciplina, notaProva, notaTrabalho) {
    var mediaBimestral = (notaProva + notaTrabalho) / 2;

    if (mediaBimestral < 7.0) {
        var mensagem = "O aluno(a) " + nomeEstudante + " não atingiu a média no bimestre na disciplina de " + disciplina + ". Média do bimestre: " + mediaBimestral.toFixed(1);
        enviarEmailDiretoria(mensagem);
    }
}

function enviarEmailDiretoria(mensagem) {
    console.log("E-mail enviado para a diretoria: " + mensagem);
}

var nome = prompt("Nome do estudante: ");
var disciplina = prompt("Disciplina: ");
var notaProva = parseFloat(prompt("Nota da prova: "));
var notaTrabalho = parseFloat(prompt("Nota do trabalho: "));

inserirNotas(nome, disciplina, notaProva, notaTrabalho);
