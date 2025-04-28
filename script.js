// 1 - Fazer a escolha aleatoria do computador entre pedra, papel e tesoura
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

// 2 - Fazer o usuário escolher entre pedra papel e tesoura
const valorEscolhidoUsuario = () => {
    const valorUsuario = prompt("Faça a escolha entre Pedra, Papel, ou, Tesoura!")
    return valorUsuario
}

// 3 - Inicializar variáveis das pontuações do computador e usuário
let pontuacaoUsuario = 0
let pontuacaoComputador = 0

// 4 - Lógica para a rodada do jogo
const parametroValorComputador = valorEscolhidoComputador()
const parametroValorUsuario = valorEscolhidoUsuario()

const jogarRodada = (parametroValorComputador, parametroValorUsuario) => {
    let valorComputadorPadronizado = parametroValorComputador.toLowerCase()
    let valorUsuarioPadronizado = parametroValorUsuario.toLowerCase()

    // console.log(valorComputadorPadronizado)
    // console.log(valorUsuarioPadronizado)

    if (valorComputadorPadronizado === "pedra" && valorUsuarioPadronizado === "tesoura") {
        console.log("Você perdeu! Pedra ganha de tesoura!")
        pontuacaoComputador++        
    } else if (valorComputadorPadronizado === "pedra" && valorUsuarioPadronizado === "papel") {
        console.log("Você venceu! Papel ganha de pedra!")
        pontuacaoUsuario++
    } else if (valorComputadorPadronizado === "tesoura" && valorUsuarioPadronizado === "pedra") {
        console.log("Você venceu! Pedra ganha de tesoura!")
        pontuacaoUsuario++
    } else if (valorComputadorPadronizado === "tesoura" && valorUsuarioPadronizado === "papel") {
        console.log("Você perdeu! Tesoura ganha de papel!")
        pontuacaoComputador++
    } else if (valorComputadorPadronizado === "papel" && valorUsuarioPadronizado === "pedra") {
        console.log("Você perdeu! Papel ganha de pedra!")
        pontuacaoComputador++        
    } else if (valorComputadorPadronizado === "papel" && valorUsuarioPadronizado === "tesoura") {
        console.log("Você venceu! Tesoura ganha de papel!")
        pontuacaoUsuario++        
    } else {
        console.log("Os dois colocaram as mesmas coisas! Houve um empate!")
    }
}

// jogarRodada(parametroValorComputador, parametroValorUsuario)
// console.log(pontuacaoComputador)
// console.log(pontuacaoUsuario)

// 4 - Regras: pedra > tesoura, tesoura > papel, papel > pedra
// 5 - Imprimir o vencedor