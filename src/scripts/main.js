function createClickEffect(button) {
            button.classList.remove('click-effect');
            
            button.offsetHeight;
            
            button.classList.add('click-effect');
            
            setTimeout(() => {
                button.classList.remove('click-effect');
            }, 600);

            if (navigator.vibrate) {
                navigator.vibrate(50);
            }

            console.log('Botão épico clicado! 🚀');
        }