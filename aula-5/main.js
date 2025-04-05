// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
    pergunta: "1. Qual planeta do Sistema Solar tem o maior número de luas conhecidas?",
    respostas: [
        { opcao: "Terra", correto: false}, 
        { opcao: "Marte", correto: false},
        { opcao: "Júpiter", correto: true},
        { opcao: "Vênus", correto: false}
    ]
},
{
    pergunta: "2. Qual é o menor planeta do Sistema Solar?",
    respostas: [
        { opcao: "Mercúrio", correto: true}, 
        { opcao: "Marte", correto: false},
        { opcao: "Urano", correto: false},
        { opcao: "Netuno", correto: false}
    ]
},
{
    pergunta: "3. O que são estrelas cadentes?",
    respostas: [
        { opcao: "Estrelas que morrem", correto: false}, 
        { opcao: "Meteoros queimando na atmosfera", correto: true},
        { opcao: "Planetas caindo", correto: false},
        { opcao: "Luzes de satélites", correto: false}
    ]
},
{
    pergunta: "4. Qual é o satélite natural da Terra?",
    respostas: [
        { opcao: "Lua", correto: true}, 
        { opcao: "Sol", correto: false},
        { opcao: "Europa", correto: false},
        { opcao: "Fobos", correto: false}
    ]
},
{
    pergunta: "5. Qual é a origem mais aceita para a formação da Lua??",
    respostas: [
        { opcao: "Foi capturada pela gravidade terrestre", correto: false}, 
        { opcao: "Resultado da colisão entre a Terra e um corpo do tamanho de Marte", correto: true},
        { opcao: "Fragmento desprendido da crosta terrestre", correto: false},
        { opcao: "Formação simultânea à da Terra, a partir da mesma nuvem de poeira", correto: false}
    ]
},
{
    pergunta: "6. O que são exoplanetas?",
    respostas: [
        { opcao: "Planetas que orbitam estrelas fora do Sistema Solar", correto: true}, 
        { opcao: "Satélites naturais de planetas gigantes", correto: false},
        { opcao: "Planetas gasosos localizados além de Netuno", correto: false},
        { opcao: "Objetos interestelares não identificados", correto: false}
    ]
},
{
    pergunta: "7. O que caracteriza um buraco negro?",
    respostas: [
        { opcao: "Ser visível apenas no espectro ultravioleta", correto: false}, 
        { opcao: "Ter massa inferior à de uma estrela de nêutrons", correto: false},
        { opcao: "Ter gravidade tão intensa que nem a luz escapa", correto: true},
        { opcao: "Ser composto de matéria escura", correto: false}
    ]
},
{
    pergunta: "8. Qual é o principal processo responsável pela produção de energia noO que é o horizonte de eventos de um buraco negro?",
    respostas: [
        { opcao: "Combustão de hidrogênio", correto: false}, 
        { opcao: "Fusão nuclear de hidrogênio em hélio", correto: true},
        { opcao: "Fissão nuclear do urânio", correto: false},
        { opcao: "Decaimento radioativo de elementos pesados", correto: false}
    ]
},
{
    pergunta: "9. O que é o horizonte de eventos de um buraco negro?",
    respostas: [
        { opcao: "A camada de matéria que o rodeia", correto: false}, 
        { opcao: "A região onde ocorre a fusão de partículas", correto: false},
        { opcao: "O limite além do qual nada pode escapar", correto: true},
        { opcao: "O ponto de máxima radiação emitida", correto: false}
    ]
},
{
    pergunta: "10. Qual é a principal evidência observacional da expansão do universo?",
    respostas: [
        { opcao: "A existência de buracos negros", correto: false}, 
        { opcao: "O movimento retrógrado dos planetas", correto: false},
        { opcao: "O desvio para o vermelho das galáxias distantes", correto: true},
        { opcao: "A formação de novas estrelas", correto: false}
    ]
}
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
    conteudo.style.display = "none";
    conteudoFinal.style.display = "flex";
  
    // Verifica se o botão "Voltar" já existe
    if (!document.querySelector(".botao-voltar")) {
      // Cria o botão "Voltar" apenas se ele não existir
      const botaoVoltar = document.createElement("button");
      botaoVoltar.innerText = "Voltar";
      botaoVoltar.classList.add("botao-voltar");
      botaoVoltar.onclick = reiniciarJogo;
      conteudoFinal.appendChild(botaoVoltar);
    }
  }
  
  // Nova função para reiniciar o jogo
  function reiniciarJogo() {
    indiceAtual = 0;
    acertos = 0;
    conteudo.style.display = "flex";
    conteudoFinal.style.display = "none";
  
    // Remove o botão "Voltar" do conteúdo final
    const botaoVoltar = document.querySelector(".botao-voltar");
    if (botaoVoltar) {
      conteudoFinal.removeChild(botaoVoltar);
    }
  
    carregarPergunta();
  }
  
  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
