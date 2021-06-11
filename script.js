// Get elements
const localStorage = window.localStorage;
const inputField = document.getElementById('input-field');
const loginButton = document.getElementById('login-button');

const hasName = () => {
  if (localStorage.getItem('username')) {
    return true
  }
  return false
}

const getName = () => {
  if (inputField.value.length == 0) {
    alert("You need to enter a name!");
  } else {
    localStorage.clear();
    localStorage.setItem('username', inputField.value);
    renderName();
  }
}

function renderName() {
  let name = localStorage.getItem('username');
  let para = document.createElement('p');
  let text = document.createTextNode("Welcome, " + name);
  para.appendChild(text);

  let body = document.getElementsByTagName('body')[0];
  body.appendChild(para);

  inputField.remove();
  loginButton.remove();
}


if (hasName()) {
  renderName();
}



loginButton.addEventListener('click', getName);
