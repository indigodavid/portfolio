const form = document.getElementById('form');
const email = document.getElementById('email');
const formError = document.querySelector('.form-error');
const fullName = document.getElementById('full-name');
const message = document.getElementById('message');

let objectData = {};

function storeData() {
  const data = JSON.stringify(objectData);
  localStorage.setItem('data', data);
}

function fillInputs() {
  fullName.value = objectData.name;
  email.value = objectData.email;
  message.value = objectData.message;
}

form.addEventListener('keyup', (e) => {
  if (fullName.value) {
    objectData.name = fullName.value;
  }
  if (email.value) {
    objectData.email = email.value;
  }
  if (message.value) {
    objectData.message = message.value;
  }
  storeData();
});

form.addEventListener('load', (e) => {
  let objectData = JSON.parse(localStorage.getItem('data'));
  if(objectData) {
    fillInputs();
  }
});

//LowerCase Validator
form.addEventListener('submit', (e) => {
  const lowerCaseRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!lowerCaseRegex.test(email.value)) {
    e.preventDefault();
    formError.style.display = 'block';
    formError.innerHTML = `Email should be written in lower case: ${email.value.toLowerCase()}`;
  }
});

