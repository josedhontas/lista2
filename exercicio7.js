function cadastrarPet() {
    var pets = [];

    do {
        var nomeTutor = prompt("Nome do tutor ou tutora:");
        var telefoneContato = prompt("Telefone para contato:");
        var nomePet = prompt("Nome do pet:");
        var especie = prompt("Espécie do pet:");
        var cor = prompt("Cor do pet:");

        var pet = {
            nomeTutor: nomeTutor,
            telefoneContato: telefoneContato,
            nome: nomePet,
            especie: especie,
            cor: cor
        };

        pets.push(pet);

        var continuar = prompt("Deseja cadastrar mais um pet? (Sim/Não)").toLowerCase();
    } while (continuar === "sim");

    return pets;
}

var listaDePets = cadastrarPet();

console.log("Lista de pets cadastrados:");
console.log(listaDePets);
