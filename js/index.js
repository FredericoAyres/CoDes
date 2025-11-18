document.addEventListener('DOMContentLoaded', function() {

    const input = document.querySelector('.campo_nome');
    const botao = document.querySelector('.botao_nome');
    const classe_nome_usuario = document.querySelector('.nome_usuario');

    if (botao && input) {
        botao.addEventListener('click', function() {
            const nomeUsuario = input.value.trim();
            if (nomeUsuario) {
                localStorage.setItem("nomeUsuario", nomeUsuario);
            }
        });
    }

    const nome = localStorage.getItem("nomeUsuario");

    if (nome && classe_nome_usuario) {
        classe_nome_usuario.innerHTML = nome;
    }

    const linkUsuario = document.querySelector('.usuarios');

    if (nome && linkUsuario) {
        linkUsuario.childNodes[0].textContent = `Entrar no aplicativo de ${nome} `;
    }

});