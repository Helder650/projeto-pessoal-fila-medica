const Paciente = require("./class/Paciente")
const FilaHospital = require("./class/FilaHospital")
const Medico = require("./class/Medico")
const Enfermeiro = require("./class/Enfermeiro")

const fila = new FilaHospital()

const paciente1 = new Paciente("João", 45, true)
const paciente2 = new Paciente("Maria", 30)
const paciente3 = new Paciente("Carlos", 70, true)

fila.adicionarPaciente(paciente1)
fila.adicionarPaciente(paciente2)
fila.adicionarPaciente(paciente3)

console.log("📋 Fila de Espera:")
console.log(fila.mostrarFila())
console.log("\n")

const medico = new Medico("Felipe")
const enfermeiro = new Enfermeiro("Ana")

let pacienteAtendido = fila.proximoPaciente()
console.log(enfermeiro.realizarAtendimento(pacienteAtendido))
console.log(medico.realizarAtendimento(pacienteAtendido))

pacienteAtendido = fila.proximoPaciente()
console.log(enfermeiro.realizarAtendimento(pacienteAtendido))
console.log(medico.realizarAtendimento(pacienteAtendido))


console.log("\n")
console.log(FilaHospital.mostrarTotalPacientes())