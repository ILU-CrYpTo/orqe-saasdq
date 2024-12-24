(function() {
    console.log("Скрипт для проверки консоли запущен.");
    let opened = false;

    // Создаем объект Image для отслеживания консоли через console.log
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            if (!opened) {
                console.warn('Открытие консоли браузера зафиксировано!');
                opened = true;
                showErrorPage();  // Показываем сообщение об ошибке
            }
        }
    });

    // Функция для проверки открытия консоли через console.log
    function checkConsole() {
        console.log(element);  // Печатаем объект, чтобы активировать консоль
        if (opened) {
            // Если консоль открыта, продолжаем показывать сообщение
            setTimeout(checkConsole, 1000);  // Периодическая проверка
        } else {
            setTimeout(checkConsole, 1000);  // Периодическая проверка
        }
    }

    // Функция для показа страницы с ошибкой (сообщение о закрытии консоли)
    function showErrorPage() {
        // Если консоль открыта, показываем сообщение
        document.body.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100vh; text-align: center; font-family: Arial, sans-serif; background-color: #000;">
                <div>
                    <h1 style="font-size: 48px; color: #C5B5FE;">Error 404</h1>
                    <p style="font-size: 20px; color: #fff;">Close the console and reload the page</p>
                </div>
            </div>
        `;
    }

    // Обработчик для клавиши F12
    function detectF12(event) {
        if (event.key === "F12" || event.keyCode === 123) {
            if (!opened) {
                console.warn("Консоль может быть открыта через F12!");
                opened = true;
                showErrorPage();  // Показываем сообщение об ошибке
            }
        }
    }

    // Добавляем обработчик для нажатия клавиши F12
    window.addEventListener("keydown", detectF12);

    // Начинаем проверку консоли
    checkConsole();
})();
