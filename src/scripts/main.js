function createClickEffect(button) {
            // Remove efeito anterior se existir
            button.classList.remove('click-effect');
            
            // Força reflow
            button.offsetHeight;
            
            // Adiciona novo efeito
            button.classList.add('click-effect');
            
            // Remove após animação
            setTimeout(() => {
                button.classList.remove('click-effect');
            }, 600);

            // Efeito de vibração no dispositivo (se suportado)
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }

            console.log('Botão épico clicado! 🚀');
        }