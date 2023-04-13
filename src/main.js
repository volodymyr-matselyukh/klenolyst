window.loadJavaScript = (url, callback) => {
	var script = document.createElement("script")
	script.type = "text/javascript";
	if (script.readyState) {  // only required for IE <9
		script.onreadystatechange = function () {
			if (script.readyState === "loaded" || script.readyState === "complete") {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {  //Others
		script.onload = function () {
			callback();
		};
	}

	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

window.loadContent = async (url, elementQuerySelector) => {
	await fetch(url)
		.then(function (response) {
			return response.text();
		})
		.then(function (body) {
			document.querySelector(elementQuerySelector).innerHTML = body;
		});
}

window.initializeCatalog = () => {
	var catalogMenu = document.querySelector("#CatalogMenu");

	var catalogType = catalogMenu.getAttribute('data-catalog-type');

	var productsListLength = 0;

	switch (catalogType) {
		case 'vinok':
			productsListLength = 24;

			break;
		case 'truna':
			productsListLength = 41;

			break;
		case 'cars':
			productsListLength = 25;

			break;
		case 'pokryvalo':
			productsListLength = 6;

			break;
		case 'cross':
			productsListLength = 14;

			break;
	}

	for (var i = 1; i <= productsListLength; i++) {
		var serviceRow = document.querySelector("#ServicesRow");

		serviceRow.append(document.create("" +
			'<div class="col-12 col-sm-4 col-md-3 col-xl-2">' +
				'<a class="image-link" href="/images/' + catalogType + '/' + i + '.jpg' + '" data-fancybox="gallery">' +
				'</a>' +
				'<img onclick="imageClick(this);" alt="' + catalogType + ' ' + i + '" data-src="/images/' + catalogType + '/' + i + '.jpg' + '" class="lazy img-thumbnail" ' +
				' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaN7twTEBAAAAwiD7pzbFPmAAAAAAAAAAAAAAAGQOLbQAAU3zwM4AAAAASUVORK5CYII=" />' +
			'</div>'));
	}

	setTimeout(function () {
		var lazyItems = document.querySelectorAll('.lazy');

		for(let i = 0; i < lazyItems.length;i++)
		{
			lazyItems[i].setAttribute("src", lazyItems[i].getAttribute("data-src"));
		}
	}, 0);

}