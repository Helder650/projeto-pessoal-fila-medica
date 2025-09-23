class FilaHospital {
    static totalPacientes = 0

    constructor() {
        this.fila = []
    }

    adicionarPaciente(paciente) {
        if (paciente.prioridade) {
            this.fila.unshift(paciente)
        } else {
            this.fila.push(paciente)
        }
        FilaHospital.totalPacientes++
    }

    proximoPaciente() {
        return this.fila.shift()
    }

    mostrarFila() {
        return this.fila.map(p => p.mostrarInfo()).join("\n")
    }

    static mostrarTotalPacientes() {
        return `Total de pacientes cadastrados até agora: ${FilaHospital.totalPacientes}`
    }
}

module.exports = FilaHospital
