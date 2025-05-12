const typingText = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');
const welcomeText = 'WELCOME TO MY WEBSITE';
const nameText = 'HOPE YOU HAVE A WONDERFUL DAY';
const finalText = '';

typingText.classList.add('typing-animation');

function typingWelcome() {
  let i = 0;
  let welcomeArray = welcomeText.split('');
  let interval = setInterval(() => {
    if (i < welcomeArray.length) {
      typingText.textContent += welcomeArray[i];
      i++;
    } else {
      clearInterval(interval);
      setTimeout(hideWelcome, 3500); // wait 3.5 seconds before hiding welcome
    }
  }, 100); // adjust typing speed
}

function hideWelcome() {
  typingText.classList.add('hide');
  setTimeout(typingName, 500); // wait 0.5 seconds before typing name
}

function typingName() {
  typingText.textContent = '';
  typingText.classList.remove('hide');
  let i = 0;
  let nameArray = nameText.split('');
  let interval = setInterval(() => {
    if (i < nameArray.length) {
      typingText.textContent += nameArray[i];
      i++;
    } else {
      clearInterval(interval);
      setTimeout(hideName, 2000); // wait 2 seconds before hiding name
    }
  }, 100); // adjust typing speed
}

function hideName() {
  typingText.classList.add('hide');
  setTimeout(typingFinal, 500); // wait 0.5 seconds before typing final text
}

function typingFinal() {
  typingText.textContent = '';
  typingText.classList.remove('hide');
  let i = 0;
  let finalArray = finalText.split('');
  let interval = setInterval(() => {
    if (i < finalArray.length) {
      typingText.textContent += finalArray[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 100); // adjust typing speed
}

typingWelcome();
