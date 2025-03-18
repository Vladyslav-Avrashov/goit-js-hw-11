import axios from 'axios';

export function fetchImages(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '49403808-1d10fbc3a3e3dae24bc03a037',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
}
