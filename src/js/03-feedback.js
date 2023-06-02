import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', function () {
  const email = form.email.value;
  const message = form.message.value;

  const formData = {
    email: email,
    message: message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', function () {
  const storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    const formData = JSON.parse(storedData);
    form.email.value = formData.email;
    form.message.value = formData.message;
  } else {
    form.email.value = '';
    form.message.value = '';
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    email: form.email.value,
    message: form.message.value,
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.email.value = '';
  form.message.value = '';
});
