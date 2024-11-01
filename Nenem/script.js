const mensagens = {
    tristeza: [
        "Morzinho fica trsite naum ta? eu nâo to com vc mas saiba que eu te amo muito e sempre vou estar com vc.",
        "Te amo bebezinha sabia que eu penso em vc em todos os momentos e vc sempre esta sorrindo entao por favor nao fica titi nenem.",
        "Mor eu sempre quero poder esta com vc sempre sempre eu te amo nenem vai ficar tudo bem ta.",
        "Morzinho vc lembra as primeiras coisinhas que a gente fez juntos? se tiver titi naum pensa muito em coisas ruins ta"
    ],
    solidão: [
        "Eu te amo mor eu te amo muito muito cso veja essa daqui eu vou contar um segredo sabia que eu sempre desenho um coraçao na minha mao? todo dia des que vc me ensinou sobre isso hehe.",
        "mesmo que eu nao esteja com vc fique sabendo que eu estou pensando e desejanto estar com vc ao todo momentos eu te amo sua linda.",
        "oq eu mais quero agora e te da um garnde abraço mas se vc se sentir so nao esqueça aquele botao de saudes nenem."
    ],
    carência: [
        "Sinto sua falta e quero te mimar quando precisar.",
        "Cada momento longe de você aumenta minha vontade de estar perto.",
        "Você é especial para mim, e eu sempre estarei aqui para te fazer sorrir.",
        "Mor sabe o quão eu te amo? mas que as estrelas que a no ceu mais que os numeros que possa ser contados e mais do que posso descrever.",
        "Eu te amo eu te amo muito muito tanto que queria correr para te da um abraço agora mesmo"
    ]
};

function virarCartao(cartao) {
    cartao.classList.toggle("virado");
    const situacao = cartao.dataset.situacao;
    const verso = cartao.querySelector(".verso");
    const mensagem = mensagens[situacao][Math.floor(Math.random() * mensagens[situacao].length)];
    verso.innerText = mensagem;
}
