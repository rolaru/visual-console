const consoleElement = document.querySelector('.console');

const consoleConfig = {
  withLineNumbers: true,
  allowHorizontalScroll: false,
};

let currentLine = 1;

if (consoleConfig.allowHorizontalScroll) {
  consoleElement.classList.add('with-horizontal-scroll');
}

export const logMessage = (message) => {
  if (message) {
    message = JSON.stringify(message, null, '  ');
    // Remove start and trailing " characters added by JSON.stringify()
    if (message[0] === '"' && message[message.length - 1] === '"') {
      message = message.substring(1, message.length - 1);
    }
    message += '<br />';
  } else {
    message = '<br />';
  }

  const lineNumber = consoleConfig.withLineNumbers
    ? `<span class="line-number">${currentLine++}</span>`
    : '';

  consoleElement.innerHTML += `${lineNumber}${message}`;
};
