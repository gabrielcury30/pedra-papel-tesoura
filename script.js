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
// 3 - Comparar as escolhas do usuário com a do computador para ver o vencedor
// 4 - Regras: pedra > tesoura, tesoura > papel, papel > pedra
// 5 - Imprimir o vencedor