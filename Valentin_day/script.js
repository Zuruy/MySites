function aumentar() {
    const btn_yes = document.getElementsByClassName("yes")[0];
    let btn_no  = document.getElementsByClassName("no")

    if (btn_yes) {
        // Obtém o tamanho atual da fonte e converte para número
        let tamanhoAtual = parseFloat(window.getComputedStyle(btn_yes).fontSize);

        // Aumenta 5 pixels
        let novoTamanho = tamanhoAtual * 3;

        // Define o novo tamanho
        btn_yes.style.fontSize = novoTamanho + "px";
        if(novoTamanho > 1000){
            btn_yes.style.position = "fized"
            btn_yes.style.zIndex = "1000px"
            btn_yes.style.top = "0%"
            btn_no.style.display = "none"
        }
    }
}
