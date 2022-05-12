const form = document.getElementById('form');
const email = document.getElementById('email');
const formError = document.querySelector('.form-error');

form.addEventListener('submit', (e) => {
  const lowerCaseRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!lowerCaseRegex.test(email.value)) {
    e.preventDefault();
    formError.style.display = 'block';
    formError.innerHTML = `Email should be written in lower case: ${email.value.toLowerCase()}`;
  }
});
