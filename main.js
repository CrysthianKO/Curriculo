function MostrarConteudo(seletorConteudo) {

    const conteudo = document.querySelector(seletorConteudo);

    for (let i = 0; i < listaConteudo.length; i++) {

        listaConteudo[i].style.display = 'none'

    }

    conteudo.style.display = 'block';
}

const listaConteudo = document.querySelectorAll('.conteudo')
const listaBotoes = document.querySelectorAll('.botoes');

for (let i = 0; i < listaBotoes.length; i++) {

    const botao = listaBotoes[i]; 
    const assunto = botao.classList[1]
    const classAssunto = `.conteudo__${assunto}`; 

    botao.onclick = function () {
        MostrarConteudo(classAssunto);
    }
}