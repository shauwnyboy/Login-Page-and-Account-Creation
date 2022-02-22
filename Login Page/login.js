const setInputErrorMessage = function (inputField, message) {}

const setInputError = function (inputField, message) {
  inputField.classList.add('form-input-error');
}

const clearInputError = function (inputField) {
  inputField.classList.remove('form-input-error');
}

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('#form-login');
  const createAccountForm = document.querySelector('#form-create-account');

  document.querySelector('#no-account-link').addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.classList.remove('display-hidden');
    createAccountForm.classList.add('display-hidden');
  });

  document.querySelector('#have-account-link').addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.classList.add('display-hidden');
    createAccountForm.classList.remove('display-hidden');
  });

  document.querySelectorAll('.form-input').forEach((inputField) => {
    inputField.addEventListener('blur', e => {
      if (e.target.id === 'form-create-account-username' && e.target.value.length > 0 && e.target.value.length < 6) {
        setInputError(inputField);
        inputField.parentElement.style.marginBottom = '0px';
        document.querySelector('#invalid-username-error').classList.remove('display-hidden');
      } else if (e.target.id === 'form-create-account-email' && e.target.value.length > 0 && !e.target.value.toLowerCase().includes('@gmail.com')) {
        setInputError(inputField);
        inputField.parentElement.style.marginBottom = '0px';
        document.querySelector('#invalid-email-error').classList.remove('display-hidden');
      } else if (e.target.id === 'form-create-account-password' && e.target.value.length > 0 && e.target.value.length < 6) {
        setInputError(inputField);
        inputField.parentElement.style.marginBottom = '0px';
        document.querySelector('#invalid-password-error').classList.remove('display-hidden');
      } else if (e.target.id === 'form-create-account-confirm-password' && e.target.value.length > 0 && e.target.value !== document.querySelector('#form-create-account-password').value) {
        setInputError(inputField);
        inputField.parentElement.style.marginBottom = '0px';
        document.querySelector('#mismatched-password-error').classList.remove('display-hidden');
      }
    });

    inputField.addEventListener('input', e => {
      clearInputError(inputField);
      if (e.target.id === 'form-create-account-username') {
        document.querySelector('#invalid-username-error').classList.add('display-hidden');
        inputField.parentElement.style.marginBottom = '0px';
      } else if (e.target.id === 'form-create-account-email') {
        document.querySelector('#invalid-email-error').classList.add('display-hidden');
        inputField.parentElement.style.marginBottom = '0px';
      } else if (e.target.id === 'form-create-account-password') {
        document.querySelector('#invalid-password-error').classList.add('display-hidden');
        inputField.parentElement.style.marginBottom = '0px';
      } else if (e.target.id === 'form-create-account-confirm-password') {
        document.querySelector('#mismatched-password-error').classList.add('display-hidden');
        inputField.parentElement.style.marginBottom = '0px';
      }
    });
  });
});


let accounts = [];

const Account = class {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

const createNewAccount = function (username, email, password) {
  if (document.querySelector('#form-create-account-password').value === document.querySelector('#form-create-account-confirm-password').value && document.querySelector('#form-create-account-username').value.length > 6 && document.querySelector('#form-create-account-email').value.includes('@gmail.com')) {
    username = document.querySelector('#form-create-account-username').value
    email = document.querySelector('#form-create-account-email').value
    password = document.querySelector('#form-create-account-password').value
    let account = new Account(username, email, password);
    accounts.push(account);
    console.log(accounts);
  }
}

document.querySelector('#button-create-account').addEventListener('click', createNewAccount);