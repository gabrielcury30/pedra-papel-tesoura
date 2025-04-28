// Inicializar variáveis das pontuações do computador e usuário
let pontuacaoUsuario = 0
let pontuacaoComputador = 0

console.log("Bem-vindo ao jogo pedra, papel e tesoura! Será uma melhor de 5. Divirta-se!")
console.log("\n")

// Função que envolve toda a lógica do jogo
const jogarJogo = () => {
    // Fazer a escolha aleatoria do computador entre pedra, papel e tesoura
    const valorEscolhidoComputador = () => {
        const valorAleatorio = Math.floor((Math.random() * 3)) + 1
        
        if (valorAleatorio === 1) {
            return "Pedra"
        } else if (valorAleatorio === 2) {
            return "Papel"
        } else {
            return "Tesoura"
        }
    }

    // Fazer o usuário escolher entre pedra papel e tesoura
    const valorEscolhidoUsuario = () => {
        const valorUsuario = prompt("Faça a escolha entre Pedra, Papel, ou, Tesoura!")
        return valorUsuario
    }

    // Lógica para a rodada do jogo
    const parametroValorComputador = valorEscolhidoComputador()
    const parametroValorUsuario = valorEscolhidoUsuario()

    const jogarRodada = (parametroValorComputador, parametroValorUsuario) => {
        let valorComputadorPadronizado = parametroValorComputador.toLowerCase()
        let valorUsuarioPadronizado = parametroValorUsuario.toLowerCase()

        console.log(`Computador: ${valorComputadorPadronizado}`)
        console.log(`Você: ${valorUsuarioPadronizado}`)

        if (valorComputadorPadronizado === "pedra" && valorUsuarioPadronizado === "tesoura") {
            pontuacaoComputador++
            console.log("Rodada perdida! Tesoura perde para pedra!")        
        } else if (valorComputadorPadronizado === "pedra" && valorUsuarioPadronizado === "papel") {
            pontuacaoUsuario++
            console.log("Rodada ganha! Papel ganha de pedra!")
        } else if (valorComputadorPadronizado === "tesoura" && valorUsuarioPadronizado === "pedra") {
            pontuacaoUsuario++
            console.log("Rodada ganha! Pedra ganha de tesoura!")
        } else if (valorComputadorPadronizado === "tesoura" && valorUsuarioPadronizado === "papel") {
            pontuacaoComputador++
            console.log("Rodada perdida! Papel perde para tesoura!")
        } else if (valorComputadorPadronizado === "papel" && valorUsuarioPadronizado === "pedra") {
            pontuacaoComputador++
            console.log("Rodada perdida! Pedra perde para papel!")        
        } else if (valorComputadorPadronizado === "papel" && valorUsuarioPadronizado === "tesoura") {
            pontuacaoUsuario++
            console.log("Rodada ganha! Tesoura ganha de papel!")        
        } else if (valorComputadorPadronizado === valorUsuarioPadronizado) {
            console.log("Rodada empatada! Ambas escolhas se anulam!")
        }
    }

    jogarRodada(parametroValorComputador, parametroValorUsuario)
    console.log("\n")
}

// Chamar a função do jogo 5 vezes para ser uma melhor de 5 rodadas
jogarJogo()
jogarJogo()
jogarJogo()
jogarJogo()
jogarJogo()

// Impressão das pontuações e vencedor
console.log(`Pontuação do computador: ${pontuacaoComputador}`)
console.log(`Sua pontuação: ${pontuacaoUsuario}`)
console.log("\n")

if (pontuacaoComputador > pontuacaoUsuario) {
    console.log("Que pena! Infelizmente você perdeu o jogo!")    
} else if (pontuacaoComputador < pontuacaoUsuario) {
    console.log("Parabéns! Você é o grande vencedor!")
} else {
    console.log("Que luta! A partida se configurou em um empate!")
}