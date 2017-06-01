const API_KEY  = 'cnvbe0cPs2FfVtm4BSKqWFxgdKa4i6EOrl8OCsxD';
const URL      = 'https://api.nasa.gov/planetary/apod?api_key=' + API_KEY;

const apod      = document.querySelector('#apod');
const apodVideo = document.querySelector('#apod-video');

fetch(URL)
  .then(res => res.json())
  .then(result => {
    if( result.media_type == 'video' ) {
      apod.style.display = 'none';
      apodVideo.setAttribute('src', result.url);
    } else {
      apod.style.display = 'block';
      apod.setAttribute('src', result.url);
    }
  })
  .catch(err => {
    console.error('Failed retrieving information', err);
  });
