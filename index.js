const prompt = require("prompt-sync")()
const Paciente = require("./class/Paciente")
const Medico = require("./class/Medico")
const Enfermeiro = require("./class/Enfermeiro")
const FilaHospital = require("./class/FilaHospital")

const fila = new FilaHospital()

console.log("=== Sistema de Fila Hospitalar ===")

const qtd = parseInt(prompt("Quantos pacientes deseja cadastrar? "))

for (let i = 0; i < qtd; i++) {
    console.log(`\nCadastro do paciente ${i + 1}:`)

    const nome = prompt("Nome do paciente: ")
    const idade = parseInt(prompt("Idade: "))
    const prioridade = prompt("Prioridade (s/n): ").toLowerCase() === "s"

    const paciente = new Paciente(nome, idade, prioridade)
    fila.adicionarPaciente(paciente)
}

console.log("\n📋 Fila de Espera:")
console.log(fila.mostrarFila())

const nomeMedico = prompt("\nNome do médico: ")
const medico = new Medico(nomeMedico)
const nomeEnfermeiro = prompt("Nome do enfermeiro: ")
const enfermeiro = new Enfermeiro(nomeEnfermeiro)

console.log("\n--- Atendimentos ---")

while (fila.fila.length > 0) {
    const paciente = fila.proximoPaciente()
    console.log(enfermeiro.realizarAtendimento(paciente))
    console.log(medico.realizarAtendimento(paciente))
}

console.log("\n" + FilaHospital.mostrarTotalPacientes())
