document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tracking-form');
    const input = document.getElementById('track-input');
    const loadingMsg = document.getElementById('loading-msg');
    const resultSection = document.getElementById('result-section');
    const displayTrackId = document.getElementById('display-track-id');
    const heroSection = document.querySelector('.hero');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        
        const trackId = input.value.trim();
        if (!trackId) return;

        // Имитация загрузки
        loadingMsg.style.display = 'block';
        
        // Имитация задержки сетевого запроса (1.5 секунды)
        setTimeout(() => {
            loadingMsg.style.display = 'none';
            
            // Скрываем форму поиска, показываем результат
            heroSection.style.display = 'none';
            resultSection.style.display = 'block';
            
            // Подставляем введенный номер
            displayTrackId.textContent = trackId.toUpperCase();
            
        }, 1500);
    });
});

// Функция сброса для поиска нового заказа
function resetSearch() {
    const form = document.getElementById('tracking-form');
    const input = document.getElementById('track-input');
    const resultSection = document.getElementById('result-section');
    const heroSection = document.querySelector('.hero');

    input.value = '';
    resultSection.style.display = 'none';
    heroSection.style.display = 'block';
}
