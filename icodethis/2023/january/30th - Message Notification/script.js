const notificationButton = document.querySelector('#notification');
const notificationsBox = document.querySelector('#notifications-box');

const toggleNotifications = () => {
    if (notificationsBox.classList.contains('hidden')) {
        notificationsBox.classList.remove('animate-slideOut');
        notificationsBox.classList.remove('hidden');
        notificationsBox.classList.add('flex');
        notificationsBox.classList.add('animate-slideIn');
    } else {
        notificationsBox.classList.remove('animate-slideIn');
        notificationsBox.classList.add('animate-slideOut');
        setTimeout(() => {
            notificationsBox.classList.remove('flex');
            notificationsBox.classList.add('hidden');
        }, 1000)
    }
};

notificationButton.addEventListener('click', toggleNotifications);