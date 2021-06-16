const nameKey = "name";

const showGreeting = () => {
  
  let nameInput = document.getElementById("input-name");
  let greetingOutput = document.getElementById("output");
  if (nameInput && greetingOutput) {
    localStorage.setItem(nameKey, nameInput.value)
    greetingOutput.innerHTML = "Hello " + nameInput.value + "!";
  }
}

window.onload = () => {
  let greetingOutput = document.getElementById("output")
  if (!greetingOutput) return;

  let name = localStorage.getItem(nameKey);
  if (name !== "") {
    greetingOutput.innerHTML = "Hello " + name + "!!"
  }
  else {
    let inputDiv = document.getElementById("user-input");
    let inputField = document.createElement("INPUT");
    inputField.id = "input-name"
    inputField.placeholder = "Name";
    inputField.setAttribute("type" , "text");
    inputDiv.appendChild(inputField);
    let submitButton = document.createElement("BUTTON");
    submitButton.addEventListener('click', showGreeting);
    submitButton.innerHTML = "Submit"
    inputDiv.appendChild(submitButton);

  }
  
}
