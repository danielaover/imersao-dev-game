// lista com os jogadores
// Função para iniciar o jogo
function iniciarJogo() {
    // Array para armazenar os jogadores
    let personagem = ["", "", ""];

    // Arrays para armazenar os vilões
    let viloes = ["", "", ""];

    // Variáveis para armazenar a força dos jogadores e vilões
    let forcapersonagem = 0;
    let forcaviloes = 0;

    // Loop para obter os nomes dos jogadores
    for (let i = 0; i < 3; i++) {
        let escolhapersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
        personagem[i] = escolhapersonagem;
        forcapersonagem += Math.floor(Math.random() * 10) + 1;
    }

    // Loop para escolher os vilões aleatoriamente
    for (let i = 0; i < 3; i++) {
        let indicealeatorio = Math.floor(Math.random() * 4);
        let viloespossiveis = ["Ryomen Sukuna", "Mahito", "Kenjaku", "Toji Fushiguro"];
        viloes[i] = viloespossiveis[indicealeatorio];
        forcaviloes += Math.floor(Math.random() * 10) + 1;
    }

    // Exibe o resultado do confronto em um alerta
    alert(personagem + " Enfrentará os viloes: " + viloes);

    // Determina o vencedor e exibe o resultado em um alerta
    if (forcapersonagem > forcaviloes) {
        alert("Seu time é muito forte! Você ganhou a disputa de cabo de guerra! Sua força foi " + forcapersonagem + " contra uma força do computador de: " + forcaviloes);
    } else if (forcapersonagem < forcaviloes) {
        alert("Seu time é fraquinho. O computador ganhou o cabo de guerra com força de: " + forcaviloes + " contra sua força de: " + forcapersonagem);
    } else {
        alert("Os dois times tem a mesma força, vocês empataram. força: " + forcaviloes);
    }
}

// Adiciona um ouvinte de evento de clique ao botão
document.getElementById("escolherJogadoresBtn").addEventListener("click", iniciarJogo);