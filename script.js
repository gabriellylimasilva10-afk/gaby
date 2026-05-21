// Elementos da Interface
const btnToggleLed = document.getElementById('toggle-led');
const ledStatus = document.getElementById('led-status');
const ledIcon = document.querySelector('.icon-led');

const tempVal = document.getElementById('temp-val');
const umiVal = document.getElementById('umi-val');
const co2Val = document.getElementById('co2-val');

// 1. Controle do Botão do LED Violeta
btnToggleLed.addEventListener('click', () => {
    if (ledStatus.classList.contains('state-on')) {
        // Desliga o LED
        ledStatus.textContent = 'DESLIGADO';
        ledStatus.classList.replace('state-on', 'state-off');
        ledIcon.style.color = '#555';
        ledIcon.style.textShadow = 'none';
    } else {
        // Liga o LED
        ledStatus.textContent = 'LIGADO';
        ledStatus.classList.replace('state-off', 'state-on');
        ledIcon.style.color = 'var(--purple-glow)';
        ledIcon.style.textShadow = '0 0 15px var(--purple-glow)';
    }
});

// 2. Simulação de oscilação dos sensores (para parecer um sistema vivo)
setInterval(() => {
    // Oscilação de Temperatura (+- 0.2°C)
    let currentTemp = parseFloat(tempVal.textContent);
    let changeTemp = (Math.random() - 0.5) * 0.4;
    tempVal.textContent = (currentTemp + changeTemp).toFixed(1);

    // Oscilação de Umidade (+- 1%)
    let currentUmi = parseInt(umiVal.textContent);
    let changeUmi = Math.random() > 0.5 ? 1 : -1;
    // Mantém entre 60 e 70%
    if (currentUmi > 68) currentUmi--;
    if (currentUmi < 62) currentUmi++;
    umiVal.textContent = currentUmi + changeUmi;

    // Oscilação de CO2
    let currentCo2 = parseInt(co2Val.textContent);
    let changeCo2 = Math.floor((Math.random() - 0.5) * 10);
    co2Val.textContent = currentCo2 + changeCo2;

}, 3000); // Atualiza a cada 3 segundos
