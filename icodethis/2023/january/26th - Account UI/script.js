const buttons = {
  user: document.querySelector('#user-button'),
  screen: document.querySelector('#screen-button'),
  notifications: document.querySelector('#notifications-button'),
  settings: document.querySelector('#settings-button'),
};

const windows = {
  user: document.querySelector('#user-window'),
  screen: document.querySelector('#screen-window'),
  notifications: document.querySelector('#notifications-window'),
  settings: document.querySelector('#settings-window'),
};

const notificationElements = {
  description: document.querySelector('#notifications-description'),
  notifications: document.querySelector('#notifications'),
  icons: document.querySelectorAll('.notification-icon'),
  dismiss: document.querySelector('#dismiss-notifications'),
};

const actionButtons = {
  saveSettings: document.querySelector('#save-settings'),
};

const confirmationBox = document.querySelector('#confirmation');

let userName = 'Jenn Elodie';

const resetButton = (button) => {
  if (!button.classList.contains('opacity-50')) {
    button.classList.add('opacity-50', 'hover:opacity-75');
  }
};

const setButtonActive = (button) => {
  if (button.classList.contains('opacity-50')) {
    button.classList.remove('opacity-50', 'hover:opacity-75');
  }
};

const loadName = () => {
  const nameInput = document.querySelector('#name-input');
  const profileName = document.querySelector('#profile-name');
  nameInput.value = userName;
  profileName.textContent = userName;
};

const displayWindow = (window) => {
  if (window.classList.contains('hidden')) {
    window.classList.remove('hidden');
    window.classList.add('flex');
  }
};

const hideWindow = (window) => {
  if (window.classList.contains('flex')) {
    window.classList.remove('flex');
    window.classList.add('hidden');
  }
};

const handleButtonClick = (targetWindow, activeButton, resetButtons) => {
  displayWindow(targetWindow);
  Object.values(windows).forEach((window) => {
    if (window !== targetWindow) hideWindow(window);
  });

  setButtonActive(activeButton);
  Object.values(buttons).forEach((button) => {
    if (button !== activeButton) resetButtons(button);
  });
};

buttons.user.addEventListener('click', () => {
  handleButtonClick(windows.user, buttons.user, resetButton);
  console.log('user button clicked');
});

buttons.screen.addEventListener('click', () => {
  handleButtonClick(windows.screen, buttons.screen, resetButton);
  console.log('screen button clicked');
});

buttons.notifications.addEventListener('click', () => {
  handleButtonClick(windows.notifications, buttons.notifications, resetButton);
  console.log('notifications button clicked');
});

buttons.settings.addEventListener('click', () => {
  loadName();
  handleButtonClick(windows.settings, buttons.settings, resetButton);
  console.log('settings button clicked');
});

const displayConfirmation = () => {
  confirmationBox.classList.remove('hidden');
  confirmationBox.classList.add('flex');
  setTimeout(() => {
    confirmationBox.classList.add('hidden');
    confirmationBox.classList.remove('flex');
  }, 2000);
};

const dismissNotifications = () => {
  const {notifications, icons, description, dismiss} = notificationElements;
  if (!notifications.classList.contains('hidden')) {
    notifications.classList.add('hidden');
    dismiss.classList.remove('bg-gray-700');
    dismiss.classList.add('bg-gray-300');
    dismiss.classList.remove('hover:bg-gray-800');
    dismiss.setAttribute('disabled', true);
    description.textContent = 'You have no notifications';
    icons.forEach(element => element.classList.add('hidden'));
  }
};

const handleSettingsSave = () => {
  const nameInput = document.querySelector('#name-input');
  if (nameInput.value === '') {
    nameInput.classList.remove('border-black');
    nameInput.classList.add('border-red-500');
    return;
  }

  userName = nameInput.value;
  loadName();
  displayConfirmation();
};

actionButtons.saveSettings.addEventListener('click', handleSettingsSave);
notificationElements.dismiss.addEventListener('click', dismissNotifications);