const form = document.getElementById('form');
const email = document.getElementById('email');
const formError = document.querySelector('.form-error');
const fullName = document.getElementById('full-name');
const message = document.getElementById('message');

const objectData = {};

function storeData() {
  const data = JSON.stringify(objectData);
  localStorage.setItem('data', data);
}

function fillInputs() {
  const storagedData = JSON.parse(localStorage.getItem('data'));
  if (storagedData) {
    fullName.value = storagedData.name;
    email.value = storagedData.email;
    message.value = storagedData.message;
  }
}

form.addEventListener('keyup', () => {
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

fillInputs();

form.addEventListener('submit', (e) => {
  const lowerCaseRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!lowerCaseRegex.test(email.value)) {
    e.preventDefault();
    formError.style.display = 'block';
    formError.innerHTML = `Email should be written in lower case: ${email.value.toLowerCase()}`;
  }
});