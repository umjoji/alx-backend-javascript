# 0x01-ES6_promise README

This README file provides an overview of the tasks and functions included in this project.

## Task 1: Return a Promise using getResponseFromAPI()

```javascript
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Add your code here
  });
}
```

## Task 2: Return a Promise using getFullResponseFromAPI(success)

```javascript
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // Add your code here
  });
}
```

## Task 3: handleResponseFromAPI(promise)

```javascript
function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      // Add your code here
    })
    .catch((error) => {
      // Add your code here
    });
}
```

## Task 4: Importing functions from utils.js and using handleProfileSignup()

```javascript
import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  // Add your code here
}
```

## Task 5: signUpUser(firstName, lastName)

```javascript
function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}
```

## Task 6: uploadPhoto(filename)

```javascript
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
```

## Task 7: Importing functions and using handleProfileSignup()

```javascript
import { signUpUser } from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

function handleProfileSignup(firstName, lastName, fileName) {
  // Add your code here
}
```

## Task 8: loadBalancer(chinaDownload, USDownload)

```javascript
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
```

## Task 9: divideFunction(numerator, denominator)

```javascript
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  }
  return numerator / denominator;
}
```

## Task 10: guardrail(mathFunction)

```javascript
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
```

