import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('[name="search-text"]'),
  loader: document.querySelector('.loader'),
};
refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const query = refs.input.value.trim();
  if (!query) {
    iziToast.error({ message: 'Please enter a search query!' });
    return;
  }
  clearGallery();
  refs.loader.style.display = 'block';
  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        renderImages(data.hits);
      }
    })
    .catch(() => {
      iziToast.error({ message: 'Something went wrong. Try again later!' });
    })
    .finally(() => {
      refs.loader.style.display = 'none';
    });
});
