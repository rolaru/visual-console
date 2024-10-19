const consoleElement = document.querySelector('.console');

export const logMessage = (message) => {
  if (message) {
    message = JSON.stringify(message, null, '  ');
    // Remove start and trailing " characters added by Json.stringify()
    if (message[0] === '"' && message[message.length - 1] === '"') {
      message = message.substring(1, message.length - 1);
    }
    message += '<br />';
  } else {
    message = '<br />';
  }

  consoleElement.innerHTML += message;
};
