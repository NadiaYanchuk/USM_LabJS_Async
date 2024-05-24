// Логика для получения данных со сторонних ресурсов
export async function getRandomActivity() {
    const response = await fetch('https://catfact.ninja/fact');
    if (!response.ok) {
        throw new Error('Плохое соединение. Нет доступа к данным');
    }
    const data = await response.json();
    return data.fact;
}
