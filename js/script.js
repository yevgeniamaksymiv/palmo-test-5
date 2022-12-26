// 1
const btnTask1 = document.getElementById('btn-task1');
btnTask1.onclick = () => alert('Hello, Palmo');

// 2
const inputChangeText = document.getElementById('input-task2');
const btnTask2 = document.getElementById('btn-task2');
btnTask2.onclick = () => {
  inputChangeText.value = 'Hello, World!';
};

// 3
const btnTask3 = document.getElementById('btn-task3');
btnTask3.onclick = () => {
  const inputGetValue = document.getElementById('input-task3').value;
  console.log(inputGetValue);
};

// 4
const btnTask4 = document.getElementById('btn-task4');
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
btnTask4.onclick = () => {
  if (title1.innerHTML === 'Hello, World!') {
    title2.innerHTML = 'Hello, World!';
    title1.innerHTML = 'Hello, Palmo!';
  } else {
    title1.innerHTML = 'Hello, World!';
    title2.innerHTML = 'Hello, Palmo!';
  }
};

// 5
const btnTask5 = document.getElementById('btn-task5');
const colorText = document.getElementById('color-text');
btnTask5.onclick = () => {
  if (colorText.className === 'default-color') {
    colorText.classList.add('new-color');
    colorText.classList.remove('default-color');
  } else {
    colorText.classList.add('default-color');
    colorText.classList.remove('new-color');
  }
};

// 6
const btnTask6 = document.getElementById('btn-task6');
const inputToDisable = document.getElementById('input-task6');
btnTask6.onclick = () => {
  if (inputToDisable.disabled === true) {
    inputToDisable.disabled = false;
  } else {
    inputToDisable.disabled = true;
  }
};

// 7
const squareRed = document.getElementById('square-red');
squareRed.style.background = 'red';
const squareGreen = document.getElementById('square-green');
squareGreen.style.background = 'green';

const changeSquareBackground = (id, color) => {
  const square = document.getElementById(`${id}`);
  square.style.background = color;
};

squareRed.onclick = () => {
  if (squareRed.style.background === 'red') {
    changeSquareBackground('square-red', 'green');
    changeSquareBackground('square-green', 'red');
  } else {
    changeSquareBackground('square-red', 'red');
    changeSquareBackground('square-green', 'green');
  }
};

squareGreen.onclick = () => {
  if (squareGreen.style.background === 'green') {
    changeSquareBackground('square-red', 'green');
    changeSquareBackground('square-green', 'red');
  } else {
    changeSquareBackground('square-red', 'red');
    changeSquareBackground('square-green', 'green');
  }
};

// 8
const btnTask8 = document.getElementById('btn-task8');
const list = document.getElementById('list');
let i = 1;
btnTask8.onclick = () => {
  list.innerHTML += `<li>Item ${i++}</li>`;
};

// 9
const btnTask9 = document.getElementById('btn-task9');

btnTask9.onclick = () => {
  const textAreaList = document.getElementById('textarea-list');
  const textarea = document.getElementById('textarea').value;
  const arrOfVal = textarea.split(', ');
  for (const i in arrOfVal) {
    textAreaList.innerHTML += `<li>${arrOfVal[i]}</li>`;
  }
};

// 10
const form = document.getElementById('form');
const login = document.getElementById('login');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

const validLength = (length, min, max) =>
  length < min || length > max ? false : true;

const validLogin = (str) => {
  const regex = /[_|,.\\\/]/g;
  return !regex.test(str);
};

const validEmail = (str) => {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(str);
};

const validPassword = (str) => {
  const regex = /(?=.*\d)(?=.*[A-ZА-Ь])/g;
  return regex.test(str);
};

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.add('error');

  const errMessage = formField.querySelector('span');
  const errInput = formField.querySelector('input');
  errMessage.textContent = message;
  errInput.style.border = '1px solid red';
};

const hideError = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');

  const errMessage = formField.querySelector('span');
  const errInput = formField.querySelector('input');
  errMessage.textContent = '';
  errInput.style.border = '';
};

const checkLogin = () => {
  let valid = false;
  const [min, max] = [4, 20];
  const loginVal = login.value.trim();

  if (!validLength(loginVal.length, min, max) || !validLogin(loginVal)) {
    showError(
      login,
      `Login must be between ${min} and ${max} characters not include ,./\|_`
    );
  } else {
    hideError(login);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const emailVal = email.value.trim();

  if (!validEmail(emailVal)) {
    showError(email, 'Email is not valid.');
  } else {
    hideError(email);
    valid = true;
  }
  return valid;
};

const checkAge = () => {
  let valid = false;
  const ageVal = age.value.trim();

  if (ageVal < 0) {
    showError(age, 'Age must be a positive number');
  } else {
    hideError(age);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const passwordVal = password.value.trim();

  if (!validPassword(passwordVal)) {
    showError(
      password,
      `Password must has at least 6 characters that include at least 1 uppercase characters and 1 number`
    );
  } else {
    hideError(password);
    valid = true;
  }
  return valid;
};

const checkPasswordConfirm = () => {
  let valid = false;
  const passwordConfirmVal = passwordConfirm.value.trim();
  const passwordVal = password.value.trim();

  if (passwordVal !== passwordConfirmVal) {
    showError(passwordConfirm, 'The password does not match');
  } else {
    hideError(passwordConfirm);
    valid = true;
  }
  return valid;
};

form.onsubmit = (e) => {
  e.preventDefault();

  const isLoginValid = checkLogin();
  const isEmailValid = checkEmail();
  const isAgeValid = checkAge();
  const isPasswordValid = checkPassword();
  const isPasswordConfirmValid = checkPasswordConfirm();

  const isFormValid =
    isLoginValid &&
    isEmailValid &&
    isAgeValid &&
    isPasswordValid &&
    isPasswordConfirmValid;

  if (isFormValid) {
    alert('Form submited successfully');
    form.reset();
  }
};

// 11
const display = (val) => {
  document.getElementById('result').value += val;
  return val;
};

const count = () => {
  const x = document.getElementById('result').value;
  const y = eval(x);
  document.getElementById('result').value = y;
  return y;
};

const clearInput = () => {
  document.getElementById('result').value = '';
};

// 12
const modal = document.getElementById('modal');
const btnCart = document.getElementById('btn-cart');
const closeModal = document.getElementById('close-modal');
const spanCount = document.getElementById('total-count');
const clearCart = document.getElementById('clear-cart');
const cartList = document.getElementById('cart-list');

let data = [];
let cart;
let countProd = 1;

const countElemInCart = () => {
  cart = data.reduce((crt, cur) => ((crt[cur] = crt[cur] + 1 || 1), crt), {});
};

const addToCart = (e) => {
  data.push(e.target.dataset.name);
  spanCount.innerHTML = countProd++;
  countElemInCart();
};

const btnsAdd = document.querySelectorAll('.products button');
for (const i in btnsAdd) {
  const btn = btnsAdd[i];
  btn.onclick = (e) => {
    addToCart(e);
  };
}

clearCart.onclick = () => {
  cart = null;
  data = [];
  countProd = 1;
  spanCount.innerHTML = '';
  cartList.innerHTML = '';
  console.log(cart);
};

btnCart.onclick = () => {
  modal.style.display = 'block';
  for (const i in Object.keys(cart)) {
    cartList.innerHTML += `<li>${Object.keys(cart)[i]}: ${
      Object.values(cart)[i]
    }</li>`;
  }
};

closeModal.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};
