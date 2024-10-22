// Função para gerar um código de cor aleatório
function generateRandomColor() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Função para criar a paleta de cores
  function generatePalette() {
    const paletteContainer = document.getElementById('palette-container');
    paletteContainer.innerHTML = ''; // Limpa a paleta anterior
  
    for (let i = 0; i < 4; i++) {
      const color = generateRandomColor();
  
      const colorBox = document.createElement('div');
      colorBox.className = 'color-box';
      colorBox.style.backgroundColor = color;
  
      const colorCode = document.createElement('div');
      colorCode.className = 'color-code';
      colorCode.innerHTML = `
        <span>${color}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      `;
  
      // Copiar código ao clicar
      colorCode.addEventListener('click', () => {
        navigator.clipboard.writeText(color);
        alert(`Cor ${color} copiada para a área de transferência!`);
      });
  
      colorBox.appendChild(colorCode);
      paletteContainer.appendChild(colorBox);
    }
  }
  
  // Alternar entre temas claro e escuro
  document.getElementById('theme-toggle').addEventListener('change', (e) => {
    document.body.classList.toggle('dark-theme', e.target.checked);
  });
  
  // Gera uma paleta ao carregar a página e ao clicar no botão
  document.getElementById('generate-btn').addEventListener('click', generatePalette);
  generatePalette();
  