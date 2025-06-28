document.addEventListener('DOMContentLoaded', function() {
    // Загрузка начального контента (Сборки)
    loadTabContent('assembly');
    
    // Обработчики для вкладок
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Удаляем активный класс у всех вкладок
            tabs.forEach(t => t.classList.remove('active'));
            // Добавляем активный класс текущей вкладке
            this.classList.add('active');
            // Загружаем контент для выбранной вкладки
            loadTabContent(this.getAttribute('data-tab'));
        });
    });
    
    // Обработчик поиска
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const posts = document.querySelectorAll('.post');
        
        posts.forEach(post => {
            const title = post.querySelector('.post-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

function loadTabContent(tabName) {
    const contentDiv = document.getElementById('content');
    
    switch(tabName) {
        case 'assembly':
            contentDiv.innerHTML = '<h2 style="margin-bottom: 20px; text-align: center;">Сборки</h2>';
            loadPosts('assembly');
            break;
        case 'redesign':
            contentDiv.innerHTML = '<h2 style="margin-bottom: 20px; text-align: center;">Редизайны</h2>';
            loadPosts('redesign');
            break;
        case 'about':
            contentDiv.innerHTML = `
                <div class="about-content">
                    <h2 style="margin-bottom: 20px;">О приложении</h2>
                    <p class="about-text">
                        Akermansex Team - это платформа для обмена сборками и редизайнами. 
                        Здесь вы можете найти интересные решения и поделиться своими работами.
                    </p>
                    <button class="link-btn" onclick="window.open('https://t.me/akermansex_team', '_blank')">Наш Telegram</button>
                    <button class="link-btn" onclick="window.open('https://github.com/akermansex-team', '_blank')">Наш GitHub</button>
                </div>
            `;
            break;
    }
}