document.addEventListener("DOMContentLoaded", () => {
    // Получаем текущий URL
    let currentUrl = window.location.href;

    // Проверяем, содержит ли URL расширение .html
    if (currentUrl.includes(".html")) {
        // Убираем .html из URL
        let newUrl = currentUrl.replace(".html", "");
        window.history.replaceState(null, "", newUrl);
    }
});
