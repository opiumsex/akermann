function loadPosts(type) {
    const folder = type === 'assembly' ? 'assembly' : 'redesign';
    const contentDiv = document.getElementById('content');
    
    // В реальном приложении здесь будет запрос к серверу или GitHub API
    // Для демонстрации используем моковые данные
    
    // Пример структуры папки assembly или redesign на GitHub:
    // /assembly/
    //   post1.zip (внутри: file.zip, banner.png, zag.txt, post.txt)
    //   post2.zip
    // /redesign/
    //   design1.zip
    //   design2.zip
    
    // Моковые данные (в реальном приложении замените на запрос к GitHub API)
    const mockPosts = {
        'assembly': [
            {
                banner: 'https://via.placeholder.com/600x300/222/fff?text=Сборка+1',
                title: 'Сборка Windows 10 Pro',
                description: 'Оптимизированная сборка Windows 10 Pro с предустановленными программами',
                file: 'https://example.com/download/assembly1.zip'
            },
            {
                banner: 'https://via.placeholder.com/600x300/222/fff?text=Сборка+2',
                title: 'Сборка Android ROM',
                description: 'Кастомная прошивка для устройств Xiaomi с улучшениями',
                file: 'https://example.com/download/assembly2.zip'
            }
        ],
        'redesign': [
            {
                banner: 'https://via.placeholder.com/600x300/222/fff?text=Редизайн+1',
                title: 'Редизайн интерфейса Telegram',
                description: 'Темная тема с акцентами в синих тонах',
                file: 'https://example.com/download/redesign1.zip'
            },
            {
                banner: 'https://via.placeholder.com/600x300/222/fff?text=Редизайн+2',
                title: 'Редизайн панели управления Windows',
                description: 'Современный плоский дизайн для панели управления',
                file: 'https://example.com/download/redesign2.zip'
            }
        ]
    };
    
    // Очищаем контент (кроме заголовка)
    const h2 = contentDiv.querySelector('h2');
    contentDiv.innerHTML = '';
    if (h2) contentDiv.appendChild(h2);
    
    // Добавляем посты
    mockPosts[folder].forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <img src="${post.banner}" alt="Баннер" class="post-image">
            <h3 class="post-title">${post.title}</h3>
            <p class="post-description">${post.description}</p>
            <button class="download-btn" onclick="window.open('${post.file}', '_blank')">Скачать</button>
        `;
        contentDiv.appendChild(postElement);
    });
    
    // В реальном приложении используйте GitHub API для получения списка ZIP-архивов
    // и их содержимого (banner.png, zag.txt, post.txt)
}

// Функция для реального приложения (работа с GitHub API)
async function loadPostsFromGitHub(folder) {
    try {
        const response = await fetch(`https://api.github.com/repos/akermansex-team/website-builds/contents/${folder}`);
        const files = await response.json();
        
        // Фильтруем только ZIP-архивы
        const zipFiles = files.filter(file => file.name.endsWith('.zip'));
        
        // Для каждого ZIP-архива получаем содержимое
        for (const zipFile of zipFiles) {
            // Здесь нужно реализовать получение содержимого архива
            // Это может потребовать дополнительного серверного кода,
            // так как GitHub API не позволяет читать содержимое архивов напрямую
        }
    } catch (error) {
        console.error('Ошибка при загрузке постов:', error);
    }
}