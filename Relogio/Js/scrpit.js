const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Horas iniciais que representam o tempo que você conhece sua namorada
let horasBase = 3472;

// Obtém a hora atual para definir um ponto de partida
let dataInicio = new Date();

const relogio = setInterval(function time() {
    let agora = new Date();

    // Calcula a diferença em horas desde a data de início
    let diferencaHoras = Math.floor((agora - dataInicio) / (1000 * 60 * 60));

    // Atualiza o conteúdo das horas baseadas no incremento
    horas.textContent = horasBase + diferencaHoras;

    // Atualiza os minutos e segundos dinamicamente
    let min = agora.getMinutes();
    let s = agora.getSeconds();
    minutos.textContent = min < 10 ? '0' + min : min;
    segundos.textContent = s < 10 ? '0' + s : s;
}, 1000);
