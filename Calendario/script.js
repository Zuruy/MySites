// Função para atualizar a lista de compromissos
function updateEventList() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = ''; // Limpa a lista atual

    const events = JSON.parse(localStorage.getItem('events')) || []; // Recupera os eventos do Local Storage

    events.forEach((event, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'event-item'; // Classe para estilização

        // Cria um checkbox estilizado
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'event-checkbox';
        checkbox.checked = event.completed; // Define o estado do checkbox baseado na propriedade 'completed'
        checkbox.onclick = function() {
            // Adiciona uma classe para a animação de sair
            listItem.classList.add('remove');
            // Define um delay para remover o evento após a animação
            setTimeout(() => {
                events.splice(index, 1); // Remove o evento da lista
                localStorage.setItem('events', JSON.stringify(events)); // Atualiza o Local Storage
                updateEventList(); // Atualiza a lista na tela
            }, 1000); // Aumentado para 1000ms
        };

        const label = document.createElement('label');
        label.textContent = event.text; // Altera para 'event.text'
        label.className = 'event-label'; // Classe para estilização

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = function() {
            events.splice(index, 1); // Remove o evento da lista
            localStorage.setItem('events', JSON.stringify(events)); // Atualiza o Local Storage
            updateEventList(); // Atualiza a lista na tela
        };

        listItem.appendChild(checkbox); // Adiciona o checkbox à lista
        listItem.appendChild(label); // Adiciona o texto do evento
        listItem.appendChild(deleteButton); // Adiciona o botão remover
        eventList.appendChild(listItem);
    });

    // Verifica se existem eventos pendentes
    if (events.length > 0) {
        document.title = `Tarefas pendentes: ${events.length}`; // Altera o título da aba para indicar tarefas pendentes
    } else {
        document.title = 'Minha Agenda'; // Reseta o título se não houver tarefas
    }
}

// Função para adicionar um novo evento
document.getElementById('addButton').addEventListener('click', function() {
    const eventInput = document.getElementById('eventInput');
    const events = JSON.parse(localStorage.getItem('events')) || []; // Recupera os eventos do Local Storage

    if (eventInput.value.trim() === '') {
        alert('Por favor, insira um compromisso!');
        return;
    }

    // Cria um objeto para o evento
    const newEvent = {
        text: eventInput.value,
        completed: false // Inicialmente, o evento não está concluído
    };

    events.push(newEvent); // Adiciona o novo evento
    localStorage.setItem('events', JSON.stringify(events)); // Atualiza o Local Storage
    updateEventList(); // Atualiza a lista na tela

    eventInput.value = ''; // Limpa o campo de entrada
});

// Atualiza a lista de compromissos ao carregar a página
document.addEventListener('DOMContentLoaded', updateEventList);
