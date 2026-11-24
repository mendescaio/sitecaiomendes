// 1. FILTRO DO MENU (Filmes, Viagens, Flamengo ou Todos)
const botoesMenu = document.querySelectorAll('.menu-btn');
const secoes = document.querySelectorAll('.categoria-secao');

botoesMenu.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove a classe 'ativo' de todos os botões e adiciona no clicado
        botoesMenu.forEach(btn => btn.classList.remove('ativo'));
        botao.classList.add('ativo');

        const filtro = botao.getAttribute('data-filtro');

        secoes.forEach(secao => {
            const categoria = secao.getAttribute('data-categoria');

            if (filtro === 'todos' || filtro === categoria) {
                secao.style.display = 'block';
            } else {
                secao.style.display = 'none';
            }
        });
    });
});

// 2. ALTERNAR MODO CLARO / ESCURO
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');

    if (document.body.classList.contains('modo-escuro')) {
        btnTema.textContent = '☀️ Modo Claro';
    } else {
        btnTema.textContent = '🌙 Modo Escuro';
    }
});

// 3. GERADOR DE CURIOSIDADES ALEATÓRIAS
const btnCuriosidade = document.getElementById('btn-curiosidade');
const textoCuriosidade = document.getElementById('texto-curiosidade');

// Edite esta lista com curiosidades reais sobre você!
const curiosidades = [
    "Meu filme favorito de todos os tempos é [Nome do Filme].",
    "Já assisti a um jogo do Flamengo ao vivo e foi inesquecível!",
    "Meu maior sonho de viagem é conhecer [Nome do Lugar].",
    "Sempre prefiro assistir filmes legendados com pipoca.",
    "Em dia de jogo do Mengão, não marco compromisso com ninguém!"
];

btnCuriosidade.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    textoCuriosidade.textContent = curiosidades[indiceAleatorio];
});

// 4. BOTÃO DE CURTIR NOS CARDS
function curtirCard(botao) {
    const contadorSpan = botao.querySelector('span');
    let curtidas = parseInt(contadorSpan.textContent);

    if (botao.classList.contains('curtido')) {
        curtidas--;
        botao.classList.remove('curtido');
        botao.innerHTML = `🤍 Curtir (<span>${curtidas}</span>)`;
    } else {
        curtidas++;
        botao.classList.add('curtido');
        botao.innerHTML = `❤️ Curtido (<span>${curtidas}</span>)`;
    }
}

// 5. BOTÃO FLUTUANTE "VOLTAR AO TOPO"
const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});