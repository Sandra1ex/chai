/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

ymaps.ready(init);

const center = [48.8866527839977, 2.34310679732974];

function init() {
  const map = new ymaps.Map('map', {
    center,
    zoom: 2,
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
}
