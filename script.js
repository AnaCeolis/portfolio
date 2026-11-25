// ====================================
// 1. MODO CLARO E MODO ESCURO
// ====================================

const botaoTema = document.getElementById("botaoTema");

// Verifica se existe um tema salvo no navegador
const temaSalvo = localStorage.getItem("tema");

// Aplica o tema salvo, caso exista
if (temaSalvo === "escuro") {
    document.body.classList.add("tema-escuro");
    botaoTema.textContent = "☾⋆";
    botaoTema.setAttribute("aria-label", "Ativar tema claro");
}else {
    botaoTema.textContent = "☀︎";
    botaoTema.setAttribute("aria-label", "Ativar tema escuro");
}

// Alterna o tema ao clicar no botão
botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");

    const temaEscuro = document.body.classList.contains("tema-escuro");

    if (temaEscuro) {
        botaoTema.textContent = "☾⋆";
        localStorage.setItem("tema", "escuro");
        botaoTema.setAttribute("aria-label", "Ativar tema claro");
    } else {
        botaoTema.textContent = "☀︎";
        localStorage.setItem("tema", "claro");
        botaoTema.setAttribute("aria-label", "Ativar tema escuro");
    }
});

// =================================
// 2. MENU RESPONSIVO
// =================================

const botaoMenu = document.getElementById("botaoMenu");
const listaMenu = document.getElementById("listaMenu");

// Abre e fecha o menu
botaoMenu.addEventListener("click", function () {
    listaMenu.classList.toggle("ativo");

    const menuAberto = listaMenu.classList.contains("ativo");

    botaoMenu.textContent = menuAberto ? "X" : "=";
    botaoMenu.setAttribute("aria-expanded", menuAberto);
    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
});

// Fecha o menu após clicar em um link

const linksMenu = listaMenu.querySelectorAll("a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        listaMenu.classList.remove("ativo");
        botaoMenu.textContent = "=";
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
});

// ==================================
// 3. BOTÃO VOLTAR AO TOPO
// ==================================

// Criar o botão pelo JavaScript
const botaoTopo = document.createElement("button");

botaoTopo.textContent = "↑";
botaoTopo.classList.add("botao-topo");
botaoTopo.setAttribute("aria-label", "Voltar ao topo");
botaoTopo.type = "button";

document.body.appendChild(botaoTopo);

// Mostrar o botão quando a página é rolada
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        botaoTopo.classList.add("visivel");
    }else {
        botaoTopo.classList.remove("visivel");
    }
});

// Voltar ao início da página
botaoTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
