// Função para calcular o total do custo da viagem
function calcularTotal(passagens, acomodacao, guia) {
    return passagens + acomodacao + guia;
}

var destino1 = prompt("Informe o primeiro destino:");
var passagens1 = parseFloat(prompt("Informe o custo das passagens para " + destino1 + ":"));
var acomodacao1 = parseFloat(prompt("Informe o custo da acomodação (para 5 dias) para " + destino1 + ":"));
var guia1 = parseFloat(prompt("Informe o custo do guia local para " + destino1 + ":"));

var destino2 = prompt("Informe o segundo destino:");
var passagens2 = parseFloat(prompt("Informe o custo das passagens para " + destino2 + ":"));
var acomodacao2 = parseFloat(prompt("Informe o custo da acomodação (para 5 dias) para " + destino2 + ":"));
var guia2 = parseFloat(prompt("Informe o custo do guia local para " + destino2 + ":"));

var destino3 = prompt("Informe o terceiro destino:");
var passagens3 = parseFloat(prompt("Informe o custo das passagens para " + destino3 + ":"));
var acomodacao3 = parseFloat(prompt("Informe o custo da acomodação (para 5 dias) para " + destino3 + ":"));
var guia3 = parseFloat(prompt("Informe o custo do guia local para " + destino3 + ":"));

var total1 = calcularTotal(passagens1, acomodacao1, guia1);
var total2 = calcularTotal(passagens2, acomodacao2, guia2);
var total3 = calcularTotal(passagens3, acomodacao3, guia3);

var email = "Olá, Fulana! É um prazer termos você como cliente e estamos ansiosos para que sua viagem possa ocorrer em breve!\n";
email += "Estou te encaminhando os orçamentos!\n\n";

email += "* " + destino1 + " *\n";
email += "Passagens: R$ " + passagens1 + "\n";
email += "Acomodação (5 dias): R$ " + acomodacao1 + "\n";
email += "O guia local custará R$ " + guia1 + "\n";
email += "Total: R$ " + total1 + "\n";
email += "---\n";

email += "* " + destino2 + " *\n";
email += "Passagens: R$ " + passagens2 + "\n";
email += "Acomodação (5 dias): R$ " + acomodacao2 + "\n";
email += "O guia local custará R$ " + guia2 + "\n";
email += "Total: R$ " + total2 + "\n";
email += "---\n";

email += "* " + destino3 + " *\n";
email += "Passagens: R$ " + passagens3 + "\n";
email += "Acomodação (5 dias): R$ " + acomodacao3 + "\n";
email += "O guia local custará R$ " + guia3 + "\n";
email += "Total: R$ " + total3 + "\n";

console.log(email); 