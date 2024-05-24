import {getRandomActivity} from './activity.js';

/**
 * Обновление информации
 * @returns {Promise<void>}
 */
async function updateActivity() {
    const activityElement = document.getElementById('activity');
    try {
        activityElement.textContent = await getRandomActivity();
    } catch (error) {
        activityElement.textContent = 'Произошла ошибка, перезагрузите страницу';
    }
}

/**
 * Обновление каждую минуту
 */
function init() {
    updateActivity();
    setInterval(updateActivity, 60000);
}

init();
