let tentativas = 0;
let bloqueado = false;

function tentarCompra(senha) {
    if (!bloqueado) {
        if (senha === senhaCorreta) {
            realizarCompra();
        } else {
            tentativas++;
            if (tentativas >= 3) {
                bloquearCartao();
                exibirMensagem("Senha incorreta. Seu cartão foi bloqueado. Se deseja ir a uma agência, digite 'A' ou se deseja desbloquear com sua chave de segurança, digite 'D'.");
                const opcao = capturarOpcao();
                if (opcao === 'A') {
                    exibirMensagem("Será um prazer atendê-la em uma agência.");
                } else if (opcao === 'D') {
                    const chave = capturarChave();
                    if (chave === '9999') {
                        exibirMensagem("Digite uma nova senha para redefinição.");
                    } else {
                        exibirMensagem("Chave incorreta. Por favor, vá a uma agência.");
                    }
                }
            }
        }
    } else {
        exibirMensagem("Seu cartão está bloqueado. Por favor, vá a uma agência.");
    }
}

function bloquearCartao() {
    bloqueado = true;
}

function realizarCompra() {
    exibirMensagem("Compra realizada com sucesso!");
}

function exibirMensagem(mensagem) {
    console.log(mensagem);
}

function capturarOpcao() {
    return prompt("Digite sua opção: ");
}

function capturarChave() {

    return prompt("Digite sua chave de segurança: ");
}

const senhaCorreta = "1234"; 
tentarCompra("senhaIncorreta1");
tentarCompra("senhaIncorreta2");
tentarCompra("senhaIncorreta3");
