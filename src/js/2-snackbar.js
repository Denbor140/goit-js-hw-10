import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const delay = Number(formData.get('delay'));
  const state = formData.get('state');

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        res(`Fulfilled promise in ${delay}ms`);
      } else {
        rej(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(msg => {
      iziToast.success({
        message: msg,
        position: 'topRight',
        backgroundColor: '#59A10D',
        messageColor: '#fff',
      });
    })
    .catch(msg => {
      iziToast.error({
        message: msg,
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#fff',
      });
    });

  form.reset();
});
