const Atendimento = require("./Atendimento")

class Medico extends Atendimento {
    constructor(nome) {
        super(`Dr. ${nome}`)
    }

    realizarAtendimento(paciente) {
        return `${this.funcionario} realizou consulta médica no paciente ${paciente.nome}`
    }
}

module.exports = Medico