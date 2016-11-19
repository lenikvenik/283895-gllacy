ymaps.ready(function() {
	var a = new ymaps.Map("ya-map", {
			center: [59.939346, 30.329383],
			zoom: 16,
			controls: []
		}, {
			suppressMapOpenBlock: !0
		}, {
			searchControlProvider: "yandex#search"
		}),
		b = new ymaps.Placemark([59.938669, 30.323057], {}, {
			iconLayout: "default#image",
			iconImageHref: "img/pin_map.png",
			iconImageSize: [218, 142],
			iconImageOffset: [-39, -139]
		});
	a.geoObjects.add(b), a.controls.remove("rulerControl"), a.controls.remove("searchControl"), a.controls.remove("trafficControl"), a.controls.remove("typeSelector"), a.controls.remove("zoomControl"), a.controls.remove("geolocationControl"), a.controls.remove("routeEditor")
});