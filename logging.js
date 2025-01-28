const consoleElement = document.querySelector('.console');

const consoleConfig = {
  withLineNumbers: true,
  allowHorizontalScroll: false,
};

let currentLine = 1;
let noLineBreakBefore = false;

if (consoleConfig.allowHorizontalScroll) {
  consoleElement.classList.add('with-horizontal-scroll');
}

export const logMessage = (message, useLineBreak = true) => {
  const spacing = useLineBreak ? '<br />' : ' ';

  if (message) {
    message = JSON.stringify(message, null, '  ');
    // Remove start and trailing " characters added by JSON.stringify()
    if (message[0] === '"' && message[message.length - 1] === '"') {
      message = message.substring(1, message.length - 1);
    }
    message += spacing;
  } else {
    message = spacing;
  }

  let lineNumber = '';
  if (consoleConfig.withLineNumbers) {
    /*
      Replace all new lines from the message formatted with
      JSON.stringify() with <br / > + line number spans.
    */
    while (message.indexOf('\n') > -1) {
      message = message.replace(
        '\n',
        `<br /><span class="line-number">${currentLine++}</span>`
      );
    }

    // Put a line number for each message that starts on a new line
    if (useLineBreak && !noLineBreakBefore) {
      lineNumber = `<span class="line-number">${currentLine++}</span>`;

      // Start in-line logging
    } else if (!useLineBreak && !noLineBreakBefore) {
      noLineBreakBefore = true;
      lineNumber = `<span class="line-number">${currentLine++}</span>`;

      // Finish in-line logging
    } else if (useLineBreak && noLineBreakBefore) {
      noLineBreakBefore = false;
      lineNumber = `<br /><span class="line-number">${currentLine++}</span>`;
    }
  }

  consoleElement.innerHTML += `${lineNumber}${message}`;
};
