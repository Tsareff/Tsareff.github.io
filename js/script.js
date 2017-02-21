var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".contacts-popup");
var close = popup.querySelector(".button-close");
var yourname = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("contacts-popup-show");

});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("contacts-popup-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("contacts-popup-show")) {
      popup.classList.remove("contacts-popup-show");
    }
  }
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938921, 30.321175],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.938921, 30.321175], {
            hintContent: 'Nerds Design Studio',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [231, 200],
            iconImageOffset: [100, -120]
        });

    myMap.geoObjects.add(myPlacemark);
});
