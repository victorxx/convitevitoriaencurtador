document.addEventListener('DOMContentLoaded', () => {
  const noticias = [
    {
      "titulo": "Rica Games reaparece após 8 anos",
      "data": "2025-07-19",
      "conteudo": "Famoso por seus vídeos de gameplay no Xbox 360, Rica Games voltou à cena após uma campanha online que arrecadou fundos para lhe dar um novo PC gamer."
    },
    {
      "titulo": "Rica Games reaparece após 8 anos",
      "data": "2025-07-19",
      "conteudo": "Famoso por seus vídeos de gameplay no Xbox 360, Rica Games voltou à cena após uma campanha online que arrecadou fundos para lhe dar um novo PC gamer."
    },
    {
      "titulo": "Campanha arrecada mais de R$ 3 mil para ajudar Rica Games",
      "data": "2025-07-18",
      "conteudo": "Com apoio de youtubers e fãs nostálgicos, uma vaquinha virtual arrecadou dinheiro para que Lee pudesse voltar a produzir conteúdo com um novo computador."
    },
    {
      "titulo": "Rica Games agradece apoio da comunidade em vídeo emocionante",
      "data": "2025-07-20",
      "conteudo": "Em seu primeiro vídeo após anos fora da internet, Lee agradeceu o carinho e apoio dos fãs que o ajudaram a retornar à criação de conteúdo."
    },
    {
      "titulo": "Meme clássico do 'The Last of Us para Xbox 360' volta a circular",
      "data": "2025-07-21",
      "conteudo": "Fãs resgataram o meme sobre Rica Games ter uma suposta cópia de The Last of Us no Xbox 360, reacendendo o humor nostálgico dos seus vídeos."
    },
    {
      "titulo": "Entrevista com Rica Games revela rotina longe da internet",
      "data": "2025-07-17",
      "conteudo": "Lee contou como viveu durante o período longe das redes sociais e como foi reencontrado por fãs que buscavam por ele há anos."
    }
  ];

  let indexAtual = 0;
  const container = document.getElementById('noticias');
  const botao = document.getElementById('carregarMais');

  function carregarNoticia() {
    if (indexAtual < noticias.length) {
      const noticia = noticias[indexAtual];
      const artigo = document.createElement('article');
      artigo.className = 'noticia';
      artigo.innerHTML = `
        <h2>${noticia.titulo}</h2>
        <time datetime="${noticia.data}">${new Date(noticia.data).toLocaleDateString('pt-BR')}</time>
        <p>${noticia.conteudo}</p>
      `;
      container.appendChild(artigo);
      indexAtual++;
    }

    // Oculta o botão se não houver mais notícias
    if (indexAtual >= noticias.length) {
      botao.style.display = 'none';
    }
  }

  botao.addEventListener('click', carregarNoticia);

  // Carrega a primeira notícia automaticamente
  carregarNoticia();
});
