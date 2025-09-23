class Atendimento {
    constructor(funcionario) {
        this.funcionario = funcionario
    }

    realizarAtendimento(paciente) {
        return `${this.funcionario} está atendendo ${paciente.nome}`
    }
}

module.exports = Atendimento