const form = document.getElementById('form');
const email = document.getElementById('email');
const formError = document.querySelector('.form-error');
const fullName = document.getElementById('full-name');
const message = document.getElementById('message');

const objectData = {
  name: '',
  email: '',
  message: '',
} 

function storeData() {
  const data = JSON.stringify(objectData);
  localStorage.setItem(data);
}

function fillInputs() {
  objectData = JSON.parse(localStorage.getItem('data'));
  fullName.value = objectData.name;
  email.value = objectData.email;
  message.innerHTML = objectData.message;
}

fullName.addEventListener()

if(!localStorage.getItem('data')) {
  storeData();
} else {
  fillInputs();
}

//LowerCase Validator
form.addEventListener('submit', (e) => {
  const lowerCaseRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!lowerCaseRegex.test(email.value)) {
    e.preventDefault();
    formError.style.display = 'block';
    formError.innerHTML = `Email should be written in lower case: ${email.value.toLowerCase()}`;
  }
});

