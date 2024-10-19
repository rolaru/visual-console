import { logMessage } from './logging.js';

let sum = 10 + 5; 
logMessage('Addition (10 + 5): ' + sum);

const user = {
  profile: {
    name: 'John',
    details: {
      age: 25,
    },
  },
};

logMessage('user:');
logMessage(user);