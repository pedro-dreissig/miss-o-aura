const perfis = [
  {
    id: 1,
    nome: "Explorador",
    categoria: "Aventureiro",
    descricao: "Tu gostas de descobrir coisas novas, experimentar possibilidades e sair da rotina. A curiosidade é uma das tuas maiores qualidades.",
    recomendacao: "Experimenta atividades ao ar livre, esportes e projetos que permitam descobrir coisas diferentes.",
    imagem: "perfil-1.jpg.png"
  },
  {
    id: 2,
    nome: "Criativo",
    categoria: "Imaginativo",
    descricao: "Tu tens facilidade para imaginar ideias, pensar de formas diferentes e encontrar soluções originais para os desafios.",
    recomendacao: "Investe em desenho, música, fotografia, criação de conteúdo ou outros projetos criativos.",
    imagem: "perfil-2.jpg.png"
  },
  {
    id: 3,
    nome: "Estrategista",
    categoria: "Analítico",
    descricao: "Tu gostas de pensar antes de agir, organizar informações e encontrar a melhor maneira de resolver um problema.",
    recomendacao: "Experimenta desafios de lógica, programação, jogos de estratégia e projetos de planejamento.",
    imagem: "perfil-3.jpg.png"
  },
  {
    id: 4,
    nome: "Conector",
    categoria: "Colaborativo",
    descricao: "Tu valorizas as pessoas, gostas de trocar ideias e acreditas que trabalhar em equipe pode tornar tudo melhor.",
    recomendacao: "Participa de atividades em grupo, projetos coletivos e iniciativas em que possas ajudar outras pessoas.",
    imagem: "perfil-4.jpg.png"
  }
];
const perguntas = [
  {
    texto: "1. O que tu mais gostas de fazer no tempo livre?",
    opcoes: [
      ["1", "Explorar lugares e viver aventuras"],
      ["2", "Criar, desenhar ou inventar coisas"],
      ["3", "Resolver desafios e jogar jogos de estratégia"],
      ["4", "Conversar e estar com os amigos"]
    ]
  },
  {
    texto: "2. Quando aparece um desafio, tu preferes...",
    opcoes: [
      ["1", "Experimentar algo novo"],
      ["2", "Encontrar uma solução diferente"],
      ["3", "Analisar as possibilidades com calma"],
      ["4", "Pedir opiniões e trabalhar em equipe"]
    ]
  },
  {
    texto: "3. Qual ambiente combina mais contigo?",
    opcoes: [
      ["1", "Um lugar novo cheio de descobertas"],
      ["2", "Um espaço onde posso criar livremente"],
      ["3", "Um ambiente organizado e tranquilo"],
      ["4", "Um lugar animado, com várias pessoas"]
    ]
  },
  {
    texto: "4. Qual destas qualidades mais te representa?",
    opcoes: [
      ["1", "Coragem para experimentar"],
      ["2", "Imaginação e originalidade"],
      ["3", "Lógica e planejamento"],
      ["4", "Empatia e cooperação"]
    ]
  }
];
function setup() {
  noCanvas();
  criarPagina();
}
function criarPagina() {
  document.title = "Missão Aura";
  document.head.insertAdjacentHTML(
    "beforeend",
    `<style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        min-height: 100vh;
        font-family: Arial, Helvetica, sans-serif;
        background: linear-gradient(180deg, #006b3c 0%, #009739 60%, #ffdf00 100%);
        color: #ffffff;
      }
      #missao-aura-app {
        width: 100%;
        padding: 30px 16px;
      }
      .container {
        max-width: 760px;
        margin: 0 auto;
      }
      .cabecalho {
        text-align: center;
        margin-bottom: 24px;
      }
      .simbolo {
        font-size: 42px;
        margin-bottom: 8px;
      }
      h1 {
        font-size: clamp(30px, 6vw, 44px);
        margin: 0 0 10px;
      }
      .subtitulo {
        color: #ded5f5;
        line-height: 1.6;
      }
      .cartao {
        background: rgba(255, 255, 255, 0.97);
        color: #252039;
        padding: 28px;
        border-radius: 22px;
        box-shadow: 0 16px 45px rgba(0, 0, 0, 0.25);
      }
      h2 {
        margin-top: 0;
      }
      .campo {
        margin: 18px 0;
      }
      .campo > label,
      .pergunta-titulo {
        display: block;
        font-weight: bold;
        margin-bottom: 9px;
      }
      input[type="text"],
      input[type="date"] {
        width: 100%;
        padding: 13px;
        border: 1px solid #c9c4d8;
        border-radius: 10px;
        font-size: 16px;
        background: #ffffff;
        color: #252039;
      }
      fieldset {
        border: 1px solid #ded9eb;
        border-radius: 13px;
        padding: 16px;
        margin: 20px 0;
      }
      legend {
        font-weight: bold;
        padding: 0 5px;
      }
      .opcao {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 11px;
        border-radius: 9px;
        line-height: 1.4;
        cursor: pointer;
      }
      .opcao:hover {
        background: #f0ebfa;
      }
      .opcao input {
        margin-top: 3px;
        accent-color: #7048c6;
        flex-shrink: 0;
      }
      button {
        width: 100%;
        padding: 15px;
        border: none;
        border-radius: 12px;
        background: #7048c6;
        color: white;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.2s;
      }
      button:hover {
        background: #5633a1;
      }
      .mensagem {
        display: none;
        background: #fff0f0;
        color: #a51f35;
        border: 1px solid #efb5bd;
        padding: 12px;
        margin-bottom: 16px;
        border-radius: 10px;
        line-height: 1.5;
      }
      .resultado {
        text-align: center;
      }
      .categoria {
        display: inline-block;
        background: #eee7ff;
        color: #5633a1;
        padding: 7px 14px;
        border-radius: 20px;
        font-weight: bold;
        margin: 4px 0 18px;
      }
      .imagem-perfil {
        display: block;
        width: 100%;
        max-width: 340px;
        height: 230px;
        object-fit: cover;
        margin: 0 auto 22px;
        border-radius: 16px;
        background: #eee7ff;
      }
      .detalhes {
        text-align: left;
        background: #f6f3fc;
        padding: 18px;
        margin: 20px 0;
        border-radius: 12px;
        line-height: 1.7;
        overflow-wrap: anywhere;
      }
      .detalhes p {
        margin: 8px 0;
      }
      .texto-resultado {
        line-height: 1.7;
      }
      .secundario {
        margin-top: 12px;
        background: #e9e4f4;
        color: #38265d;
      }
      .secundario:hover {
        background: #d9cdef;
      }
      footer {
        text-align: center;
        padding: 25px 0 5px;
        color: #ded5f5;
        font-size: 14px;
      }
      @media (max-width: 500px) {
        #missao-aura-app {
          padding: 20px 12px;
        }
        .cartao {
          padding: 19px;
          border-radius: 16px;
        }
        fieldset {
          padding: 12px;
        }
        .opcao {
          padding: 10px 6px;
        }
        .imagem-perfil {
          height: 190px;
        }
      }
    </style>`
  );
  document.getElementById("missao-aura-app")?.remove();
  const app = document.createElement("main");
  app.id = "missao-aura-app";
  app.innerHTML = `
    <div class="container">
      <header class="cabecalho">
        <h1>Missão Aura</h1>
        <p class="subtitulo">
          Descubra teu perfil e conheça melhor tuas preferências!
        </p>
      </header>
      <section class="cartao" id="conteudo">
        <h2>Vamos começar?</h2>
        <p>Preenche teus dados e responde às quatro perguntas.</p>
        <div id="mensagem" class="mensagem" role="alert"></div>
        <form id="formulario">
          <div class="campo">
            <label for="nome">Teu nome completo</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite teu nome"
              maxlength="100"
              required
            >
          </div>
          <div class="campo">
            <label for="nascimento">Data de nascimento</label>
            <input
              id="nascimento"
              name="nascimento"
              type="date"
              required
            >
          </div>
          <div id="perguntas"></div>
          <button type="submit">Descobrir meu perfil</button>
        </form>
      </section>
      <footer>aura67</footer>
    </div>
  `;
  document.body.appendChild(app);
  const hoje = new Date();
  const dataLocal = [
    hoje.getFullYear(),
    String(hoje.getMonth() + 1).padStart(2, "0"),
    String(hoje.getDate()).padStart(2, "0")
  ].join("-");
  document.getElementById("nascimento").max = dataLocal;
  const areaPerguntas = document.getElementById("perguntas");
  perguntas.forEach((pergunta, indice) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = pergunta.texto;
    fieldset.appendChild(legend);
    pergunta.opcoes.forEach(([valor, texto]) => {
      const label = document.createElement("label");
      label.className = "opcao";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `pergunta${indice + 1}`;
      radio.value = valor;
      radio.required = true;
      const span = document.createElement("span");
      span.textContent = texto;
      label.append(radio, span);
      fieldset.appendChild(label);
    });
    areaPerguntas.appendChild(fieldset);
  });
  document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const nascimento = document.getElementById("nascimento").value;
    const mensagem = document.getElementById("mensagem");
    mensagem.style.display = "none";

    if (!nome || !nascimento) {
      mostrarErro("Preenche teu nome e tua data de nascimento.");
      return;
    }
    const dataNascimento = new Date(nascimento + "T00:00:00");
    const agora = new Date();
    const hojeSemHora = new Date(
      agora.getFullYear(),
      agora.getMonth(),
      agora.getDate()
    );
    if (
      Number.isNaN(dataNascimento.getTime()) ||
      dataNascimento > hojeSemHora
    ) {
      mostrarErro("A data de nascimento é inválida ou está no futuro.");
      return;
    }
    let idade = hojeSemHora.getFullYear() - dataNascimento.getFullYear();
    const aindaNaoFezAniversario =
      hojeSemHora.getMonth() < dataNascimento.getMonth() ||
      (
        hojeSemHora.getMonth() === dataNascimento.getMonth() &&
        hojeSemHora.getDate() < dataNascimento.getDate()
      );
    if (aindaNaoFezAniversario) {
      idade--;
    }
    const respostas = perguntas.map((pergunta, indice) => {
      const selecionada = document.querySelector(
        `input[name="pergunta${indice + 1}"]:checked`
      );
      return selecionada ? Number(selecionada.value) : null;
    });
    if (respostas.some(resposta => resposta === null)) {
      mostrarErro("Responde a todas as perguntas antes de continuar.");
      return;
    }
    const pontuacao = [0, 0, 0, 0];
    respostas.forEach(resposta => {
      pontuacao[resposta - 1]++;
    });
    const maiorPontuacao = Math.max(...pontuacao);
    const empatados = perfis.filter(
      perfil => pontuacao[perfil.id - 1] === maiorPontuacao
    );
    const perfil = empatados[
      Math.floor(Math.random() * empatados.length)
    ];
    mostrarResultado(nome, idade, perfil, empatados.length > 1);
  });
  function mostrarErro(texto) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.style.display = "block";
    mensagem.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
function mostrarResultado(nome, idade, perfil, houveEmpate) {
  const conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = `
    <div class="resultado">
      <h2>Teu resultado chegou!</h2>
      <p class="texto-resultado">
        ${houveEmpate
          ? "Tu tiveste uma combinação de respostas! Este é um dos perfis que mais combinam contigo."
          : "Com base nas tuas respostas, descobrimos teu perfil!"}
      </p>
      <img
        id="imagemResultado"
        class="imagem-perfil"
        alt="Imagem do perfil"
      >
      <h2 id="nomePerfil"></h2>
      <div class="categoria" id="categoriaPerfil"></div>
      <div class="detalhes">
        <p><strong>Participante:</strong> <span id="nomeParticipante"></span></p>
        <p><strong>Idade:</strong> <span id="idadeParticipante"></span> anos</p>
        <p><strong>Perfil:</strong> <span id="perfilParticipante"></span></p>
        <p><strong>Descrição:</strong> <span id="descricaoPerfil"></span></p>
        <p><strong>Recomendação:</strong> <span id="recomendacaoPerfil"></span></p>
      </div>
      <button id="refazer">refaça</button>
    </div>
  `;
  document.getElementById("nomeParticipante").textContent = nome;
  document.getElementById("idadeParticipante").textContent = idade;
  document.getElementById("nomePerfil").textContent = perfil.nome;
  document.getElementById("categoriaPerfil").textContent = perfil.categoria;
  document.getElementById("perfilParticipante").textContent = perfil.nome;
  document.getElementById("descricaoPerfil").textContent = perfil.descricao;
  document.getElementById("recomendacaoPerfil").textContent = perfil.recomendacao;
  const imagem = document.getElementById("imagemResultado");
  imagem.src = perfil.imagem;
  imagem.onerror = function() {
    this.style.display = "none";
  };
  document.getElementById("refazer").addEventListener("click", () => {
    criarPagina();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}