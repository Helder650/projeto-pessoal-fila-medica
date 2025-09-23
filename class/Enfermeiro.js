const Atendimento = require("./Atendimento")

class Enfermeiro extends Atendimento {
    constructor(nome) {
        super(`Enfermeiro(a) ${nome}`)
    }

    realizarAtendimento(paciente) {
        return `${this.funcionario} realizou investigação inicial com o paciente ${paciente.nome} (checagem de sinais vitais e sintomas)`
    }
}

module.exports = Enfermeiro