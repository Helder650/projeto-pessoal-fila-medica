class Paciente {
    #nome
    #idade
    #prioridade

    constructor(nome, idade, prioridade = false) {
        this.#nome = nome
        this.#idade = idade
        this.#prioridade = prioridade
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    get prioridade() {
        return this.#prioridade
    }

    set idade(novaIdade) {
        if (novaIdade > 0) {
            this.#idade = novaIdade
        }
    }

    set prioridade(valor) {
        this.#prioridade = valor
    }

    mostrarInfo() {
        return `${this.#nome} (${this.#idade} anos) - Prioridade: ${this.#prioridade ? "Sim" : "Não"}`
    }
}

module.exports = Paciente