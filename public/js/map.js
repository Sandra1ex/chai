/* eslint-disable no-tabs */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

async function createMark() {
  const response = await fetch('/db');
  const data = await response.json();

  ymaps.ready(init);

  const center = [48.8866527839977, 2.34310679732974];

  function init() {
    const map = new ymaps.Map('map', {
      center,
      zoom: 2,
    });
    data.teas.forEach((el) => {
      const placemark = new ymaps.Placemark([Number(el.coordinateX), Number(el.coordinateY)], {
        balloonContent: `
			    <div class="balloon">
				      <div class="balloon__contacts cardLink">
					      <a href=/tea/${el.id}>${el.name}</a>
                <br />
                <img class="card_picture" src=${el.picture} alt=${el.name} >
				      </div>
			    </div>
		`,
      }, {
        iconLayout: 'default#image',
        iconImageHref: '/img/tea.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0],
      });
      map.geoObjects.add(placemark);
    });
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }
}

createMark();
