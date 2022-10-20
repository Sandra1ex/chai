/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

ymaps.ready(init);

const center = [48.8866527839977, 2.34310679732974];

function init() {
  const map = new ymaps.Map('map', {
    center,
    zoom: 2,
  });

  const placemark = new ymaps.Placemark([39.901698, 116.391433], {
    balloonContentHeader: 'Хедер балуна',
    balloonContentBody: 'Боди балуна',
    balloonContentFooter: 'Подвал',
  }, {
    iconLayout: 'default#image',
    iconImageHref: '/img/tea.png',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0],
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}
