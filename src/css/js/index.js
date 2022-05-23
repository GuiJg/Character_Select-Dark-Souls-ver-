/*
    OBJETIVO 1 - quando passar o mouse em cima do personagem tenho que: 

        - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele.
        
        - retirar a classe selecionado do personagem que está selecionado.

*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'soul-of-cinder') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        // OBJETIVO 2 - quando passar o mouse em cima do personagem em cima da listagem, trocar a imagem e o nome do personagem maior

        // - alterar a imagem do player 1
        // - alterar o nome do player 1

        console.log('idSelecionado', idSelecionado);
    
        const imagemPlayer1 = document.getElementById('personagem-jogador-1');
        imagemPlayer1.src = `./src/css/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name')
    
        nomeJogador1.innerHTML = nomeSelecionado;
    })
})

