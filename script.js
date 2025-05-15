alert("Bem-vindo ao jogo pedra, papel e tesoura! O jogo será uma melhor de 5!")
alert("Regras: pedra quebra tesoura, tesoura corta papel, e papel embrulha pedra. Se os jogadores escolherem o mesmo símbolo, é empate.")
alert("Caso queira jogar um novo jogo, recarregue a página do navegador. Divirta-se!")

// Inicializar variáveis das pontuações do computador e usuário
let pontuacaoUsuario = 0
let pontuacaoComputador = 0

// Fazer a escolha aleatoria do computador entre pedra, papel e tesoura
const valorEscolhidoComputador = () => {
    const valorAleatorio = Math.floor((Math.random() * 3)) + 1
        
    if (valorAleatorio === 1) {
        return "pedra"
    } else if (valorAleatorio === 2) {
        return "papel"
    } else {
        return "tesoura"
    }
}

const jogarRodada = (valorUsuario) => {
    valorComputador = valorEscolhidoComputador()

    let infoRodada = document.querySelector("#info-rodada")
    
    let escolhas = document.createElement("p")
    escolhas.textContent = `Você escolheu: ${valorUsuario} | Computador escolheu: ${valorComputador}`

    let explicacao = document.createElement("p")

    let pontuacao = document.createElement("p")

    if (valorComputador === "pedra" && valorUsuario === "tesoura") {
        pontuacaoComputador++
        explicacao.textContent = "Rodada perdida! Tesoura perde para pedra!"        
    } else if (valorComputador === "pedra" && valorUsuario === "papel") {
        pontuacaoUsuario++
        explicacao.textContent = "Rodada vencida! Papel ganha de pedra!"
    } else if (valorComputador === "tesoura" && valorUsuario === "pedra") {
        pontuacaoUsuario++
        explicacao.textContent = "Rodada vencida! Pedra ganha de tesoura!"
    } else if (valorComputador === "tesoura" && valorUsuario === "papel") {
        pontuacaoComputador++
        explicacao.textContent = "Rodada perdida! Papel perde para tesoura!"
    } else if (valorComputador === "papel" && valorUsuario === "pedra") {
        pontuacaoComputador++
        explicacao.textContent = "Rodada perdida! Pedra perde para papel!"        
    } else if (valorComputador === "papel" && valorUsuario === "tesoura") {
        pontuacaoUsuario++
        explicacao.textContent = "Rodada vencida! Tesoura ganha de papel!"        
    } else if (valorComputador === valorUsuario) {
        explicacao.textContent = "Rodada empatada! Ambas as escolhas se anulam!"
    }

    pontuacao.textContent = `Sua pontuação: ${pontuacaoUsuario} | Pontuação do computador: ${pontuacaoComputador}`

    let vencedor = document.createElement("p")

    if (pontuacaoUsuario === 5) {
        vencedor.textContent = "Parabéns! Você foi o vencedor!"

        pedraBtn.disabled = true
        papelBtn.disabled = true
        tesouraBtn.disabled = true
    } else if (pontuacaoComputador === 5) {
        vencedor.textContent = "Que pena! O computador foi o vencedor! Tente novamente!"
        
        pedraBtn.disabled = true
        papelBtn.disabled = true
        tesouraBtn.disabled = true
    }

    let espaco = document.createElement("br")

    infoRodada.appendChild(escolhas)
    infoRodada.appendChild(explicacao)
    infoRodada.appendChild(pontuacao)
    infoRodada.appendChild(vencedor)
    infoRodada.appendChild(espaco)
}

// Lógica do usuário entre pedra papel e tesoura
let pedraBtn = document.querySelector("#pedra-btn")
let papelBtn = document.querySelector("#papel-btn")
let tesouraBtn = document.querySelector("#tesoura-btn")

pedraBtn.addEventListener("click", () => {
    jogarRodada("pedra")
})

papelBtn.addEventListener("click", () => {
    jogarRodada("papel")
})

tesouraBtn.addEventListener("click", () => {
    jogarRodada("tesoura")
})
