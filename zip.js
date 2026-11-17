class Translation {
	constructor({ lang = "en", langList = "langList" } = {}) {
		this.languages = {
			en: { label: "English", default: true, dateFormat: "MM/DD/YYYY", delimiter: ",", csvSeparator: ",", flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC" },
			es: { label: "Español", default: false, dateFormat: "DD/MM/YYYY", delimiter: ",", csvSeparator: ",", flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFnSURBVHjaYvzPgAD/UNlYEUAAmuTYAAAQhAEYqF/zFbe50RZ1cMmS9TLi0pJLRjZohAMTGFUN9HdnHgEE1sDw//+Tp0ClINW/f0NIKPoFJH/9//ULyGaUlQXaABBALAx/Gf4zAt31F4i+ffj3/cN/XrFfzOx//v///f//LzACM/79ZmD8/e8TA0AAMYHdDVT958vXP38nMDB0s3x94/Tj5y+YahhiAKLfQKUAAcQEdtJfoDHMF2L+vPzDmFXLelf551tGFOOhev4A/QgQQExgHwAd8IdFT/Wz6j+GhlpmXSOW/2z///8Eq/sJ18Dw/zdQA0AAMQExxJjjdy9x2/76EfLz4MXdP/i+wsyGkkA3Aw3984cBIIAYfzIwMKel/bt3jwEaLNAwgZIQxp/fDH/+MqqovL14ESCAWICeZvr9h0FSEhSgwBgAygFDEMT+wwAhgQgc4kAEVAwQQIxfUSMSTxxDAECAAQAJWke8v4u1tAAAAABJRU5ErkJggg==" },
			fr: { label: "Français", default: false, dateFormat: "DD/MM/YYYY", delimiter: ",", csvSeparator: ",", flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGzSURBVHjaYiyeepkBBv79+Zfnx/f379+fP38CyT9//jAyMiq5GP77wvDnJ8MfoAIGBoAAYgGqC7STApL///3/9++/pCTv////Qdz/QO4/IMna0vf/z+9/v379//37bUUTQACBNDD8Z/j87fffvyAVX79+/Q8GQDbQeKA9fM+e/Pv18/+vnwzCIkBLAAKQOAY5AIAwCEv4/4PddNUm3ji0QJyxW3rgzE0iLfqDGr2oYuu0l54AYvnz5x9Q6d+/QPQfyAQqAin9B3EOyG1A1UDj//36zfjr1y8GBoAAFI9BDgAwCMIw+P8Ho3GDO6XQ0l4MN8b2kUwYaLszqgKM/KHcDXwBxAJUD3TJ779A8h9Q5D8SAHoARP36+Rfo41+/mcA2AAQQy49ff0Cu//MPpAeI/0FdA1QNYYNVA/3wmwEYVgwMAAHE8uPHH5BqoD1//gJJLADoJKDS378Z//wFhhJAALF8A3rizz8uTmYg788fJkj4QOKREQyYxSWBhjEC/fcXZANAALF8+/anbcHlHz9+ffvx58uPX9KckkCn/gby/wLd8uvHjx96k+cD1UGiGQgAAgwA7q17ZpsMdUQAAAAASUVORK5CYII=" },
			de: { label: "Deutsch", default: false, dateFormat: "DD.MM.YYYY", delimiter: ".", csvSeparator: ";", flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGzSURBVHjaYvTxcWb4+53h3z8GZpZff/79+v3n/7/fDAz/GHAAgABi+f37e3FxOZD1Dwz+/v3z9y+E/AMFv3//+Qumfv9et241QACxMDExAVWfOHkJJAEW/gUEP0EQDn78+AHE/gFOQJUAAcQiy8Ag8O+fLFj1n1+/QDp+/gQioK7fP378+vkDqOH39x9A/RJ/gE5lAAhAYhzcAACCQBDkgRXRjP034R0IaDTZTFZn0DItot37S94KLOINerEcI7aKHAHE8v/3r/9//zIA1f36/R+o4tevf1ANYNVA9P07RD9IJQMDQACxADHD3z8Ig4GMHz+AqqHagKp//fwLVA0U//v7LwMDQACx/LZiYFD7/5/53/+///79BqK/EMZ/UPACSYa/v/8DyX9A0oTxx2EGgABi+a/H8F/m339BoCoQ+g8kgRaCQvgPJJiBYmAuw39hxn+uDAABxMLwi+E/0PusRkwMvxhBGoDkH4b/v/+D2EDyz///QB1/QLb8+sP0lQEggFh+vGXYM2/SP6A2Zoaf30Ex/J+PgekHwz9gQDAz/P0FYrAyMfz7wcDAzPDtFwNAgAEAd3SIyRitX1gAAAAASUVORK5CYII=" },
			zh: { label: "中文", default: false, dateFormat: "YYYY/MM/DD", delimiter: "/", csvSeparator: ",", flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFqSURBVHjaYrzOwPAPjJgYQEDAleHVbhADIvgHLPgHiQ0QQCxAlkR9NW8sw+cV/1gV/7Gb/hV4+vfzhj8Mv/78//Pn/+/f/8AkhH1t0yaAAAJp4I37zyz2lDfu79uqv/++/WYz+cuq/vvLxt8gdb+A5K9/v34B2SyyskBLAAII5JAva/7/+/z367a/f3/8ZuT9+//Pr78vQUrB6n4CSSj6/RuoASCAWEDO/fD3ddEfhv9/OE3/sKj8/n7k9/fDQNUIs/+DVf8HawAIIJCT/v38C3Hr95N/GDh/f94AVvT7N8RUBpjxQAVADQABBNLw/y/Ifwy/f/399ufTOpDBEPf8g5sN0QBEDAwAAQTWABEChgOSA9BVA00E2wAQQCANQBbEif/AzoCqgLkbbBYwWP/+//sXqBYggFhAkfL7D7OkJFCOCSj65zfUeFjwg8z++/ffX5AGoGKAAGI8jhSRyIw/SJH9D4aAYQoQYAA6rnMw1jU2vQAAAABJRU5ErkJggg==" },
			hu: { label: "Magyar", default: false, dateFormat: "YYYY. MM. DD.", delimiter: ".", csvSeparator: ";", flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFCSURBVHjaYjzLgAL+gMl/MMYfGBtCAhFAAA7E7QQAEAZi/XANJ+1WDuJC96iHEELIyt3d8dihpKIsFmlygPlOG7jnPAHEAjbo/+8nT/8Dlf79C5IDMoAkUCmQ/AVk/Pr/6xeQyyorC7QHIIBYwGb/R1YNlAaZClYKVg3U9gui/xcDA0AAMf79+5eRkRGk7f9/BjDEBYDKPn36BBBAECdBVcEZWAEDI+O/f/8AAogFoQi/+UAb/gMD5R9AADEy+DNkpWTdf3f/z98/v//++vXn96+/v37//Q1EIAaMC5RVFlI6W3AOIIBYGH4AA/APSMUfqKJff35BVYNIoOCvPyANf//8/wt0DkAAsTD8YgAGsiSPJDBQ/gDN+QfSBmb/AYYLUAAYHX//gAPxL0gDQAAxMlgzAPWA0A8MBhD9Z0ADAAEGACLkbQYCfrxnAAAAAElFTkSuQmCC" },
			it: { label: "Italiano", default: false, dateFormat: "DD/MM/YYYY", delimiter: ",", csvSeparator: ",", flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAE2SURBVHjaYmSYyMDwgwEE/jEw/GF4mvT0HyqQUlX9B5aEIIAAYmH4wlDtWg1SDwT//0lKSv7/D+T9/w+nYmL+//79/88fIPll0yaAAGJhYAGJP/n69O+/v0CAUAcHt2////ULqJpRVhZoA0AAsQCtAZoMVP0HiP7+RlcNBEDVYA0Mv38DNQAEEMj8vwx//wCt/AdC/zEBkgagYoAAYgF6FGj277+///wlpAEoz8AAEEAgDX/BZv/69wuoB48GRrCTAAKICajh9//fv/6CVP/++wu7BrDxQFf/YWAACCCwk0BKf0MQdg1/gBqAPv0L9ANAALEAY+33vz+S3JIgb/z5C45CBkZGRgY4UFICKQUjoJMAAoiRoZSB4RMojkHx/YPhbNVZoM3AOISQQPUK9vaQOIYAgAADAC5Wd4RRwnKfAAAAAElFTkSuQmCC" },
			jp: { label: "日本語", default: false, dateFormat: "YYYY/MM/DD", delimiter: "/", csvSeparator: ",", flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAE2SURBVHjaYvz69SsDEvj37x+ERGbAwZ9//wACiAUoysXFBST///8P0QOm//+HU0jgxYsXAAHEAlP0H8HYt+//4SP/f//6b2b238sLrpqRkRFoCUAAsaCrXrv2/8KF///8+f/r9//Dh/8/ffI/OQWiAeJCgABigrseJPT27f/Vq////v3/1y8oWrzk/+PHcEv+/PkDEEBMEM/B3fj/40eo0t9g8suX/w8f/odZAVQMEEAsQAzj/2cQFf3PxARWCrYEaBXQLCkpqB/+/wcqBgggJrjxQPX/hYX/+/v///kLqhpIBgf/l5ODhxiQBAggFriToDoTEv5zcf3ftQuk2s7uf0wM3MdAAPQDQAAxvn37lo+PDy4KZUDcycj4/z9CBojv3r0LEEAgG969eweLSBDEBSCWAAQYACaTbJ/kuok9AAAAAElFTkSuQmCC" },
			in: { label: "हिन्दी", default: false, dateFormat: "YYYY/MM/DD", delimiter: "/", csvSeparator: ",", flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGJSURBVHjaYvy/nwEO/kEwGP37w/DvHxj9gSEwGyAAhXJwAAAEQzG0xSqmtJUZjOTW+sEll5f2xz5eMDkyDnaeOFmVxQIlCkiIveYVQGANDED2U6BShn9/gSyQHpCK3zDyFxj9ZmSXBdoAEEAs/8RMGTm1GFjE/v//9x+o5//fO6+FztyR+/vvr5HCbVWRpyCz//359/8PI4voP6ntAAHE+PvvXyZGxv//gbb8h9i2bPu9n5++6msIn7vzOcFPCWgM0CggCVT2/uMngABiYgI7nwGsA4K+fv2pLM21a//tz19//ger/g+RAgXJP4AAYoKYCkKMYH3//+spCx6/+vEPG5ehigDYWmT0DyCAGBmKGToCOp5+fPrn358/f3///vvn97/ff4Dk399AERD59w8I/fsjwy+zvHE5QACxMPxhgAjB1SGU/vsD1/nn319gMDD8YgAIIBYgBvJFuEUgxkBJMAKqAII///+AqP9gDf8YAAKIkSGZAagHaA+IhKM/SCJ/YAiUEBgAAgwA+jxNFkS1oCwAAAAASUVORK5CYII=" }
		};
		this.translations = {};
		this.dynamicValues = {};
		this.language = lang;
		this.langList = langList;

		this.populateLanguageList();

		const saved = localStorage.getItem("lang");
		const browserLang = (navigator.language || lang).split("-")[0];
		const initial = saved || browserLang;

		this.setLanguage(initial);
	}

	populateLanguageList() {
		let container = document.querySelector(this.langList);
		if (!container) {
			container = document.createElement("div");
			container.id = this.langList;
			document.body.appendChild(container);
		}
		container.innerHTML = "";

		if (!document.getElementById("langListStyle")) {
			const style = document.createElement("style");
			style.id = "langListStyle";
			style.textContent = "#langList { display: flex; flex-wrap: wrap; gap: 8px; } \
				.lang-item { display: flex; align-items: center; gap: 4px; padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; } \
				.lang-item:hover { background: #f0f0f0; } \
				.lang-item.active { border-color: #0078d4; background: #e6f0fa; }";
			document.head.appendChild(style);
		}

		Object.keys(this.languages).sort((a, b) => this.languages[a].label.localeCompare(this.languages[b].label)).forEach(lang => {
			const langData = this.languages[lang];
			const item = document.createElement("div");
			item.className = "lang-item";
			item.dataset.lang = lang;

			if (langData.flag) {
				const img = document.createElement("img");
				img.src = langData.flag;
				img.alt = langData.label;
				img.width = 16;
				img.height = 12;
				item.appendChild(img);
			}

			const span = document.createElement("span");
			span.textContent = langData.label;
			item.appendChild(span);

			item.addEventListener("click", () => this.setLanguage(lang));

			container.appendChild(item);
		});
	}

	renderTranslations() {
		document.querySelectorAll("[data-i18n]").forEach(el => {
			const key = el.getAttribute("data-i18n");
			el.textContent = this.translate(key, this.dynamicValues);
		});
	}

	setLanguage(lang) {
		if (!this.languages[lang]) {
			return;
		}

		this.language = lang;

		document.documentElement.setAttribute("lang", lang);
		localStorage.setItem("lang", lang);

		this.renderTranslations();

		document.querySelectorAll(".lang-item").forEach(el => {
			el.classList.toggle("active", el.dataset.lang === lang);
		});
	}

	addLanguage(lang, options = { label: "", default: false, dateFormat: "MM/DD/YYYY", delimiter: ",", csvSeparator: ",", flag: "" }) {
		this.languages[lang] = options;
		this.translations[lang] = {};
		this.language = lang;
		this.populateLanguageList();
	}

	getLanguage() {
		return this.language;
	}

	getLanguageOptions(lang) {
		return this.languages[lang] || {};
	}

	addTranslation(lang, key, value) {
		if (!this.translations[lang]) this.translations[lang] = {};
		this.translations[lang][key] = value;
	}

	getTranslation(key, lang = this.language) {
		return this.translations[lang]?.[key] || key;
	}

	translate(key, replacements = {}) {
		let translation = this.translations[this.language]?.[key] || this.translations["en"]?.[key] || key;
		for (const [placeholder, value] of Object.entries(replacements)) {
			translation = translation.replace(new RegExp("{" + placeholder + "}", "g"), value);
		}
		return translation;
	}

	async loadTranslationsFromFile(url) {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error("Nem sikerült betölteni: " + url);
			const data = await response.json();
			for (const [lang, entries] of Object.entries(data)) {
				if (!this.translations[lang]) this.translations[lang] = {};
				Object.assign(this.translations[lang], entries);
			}
			console.log("Fordítások betöltve:", Object.keys(data));
		} catch (e) {
			console.error("Fordítás betöltése sikertelen:", e);
		}
	}

	saveTranslationsToFile(lang) {
		const data = this.translations[lang] || {};
		const blob = new Blob([JSON.stringify({ [lang]: data }, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `translations_${lang}.json`;
		a.click();
		URL.revokeObjectURL(url);
	}
}

class Package {
	constructor() {
		this.packageContent = [];
		this.packageName = " package";
		this.packageType = "zip";
		this.result = null;

		if (!Package.sharedLang) {
			Package.sharedLang = new Translation();

			Package.sharedLang.addTranslation("hu", "Unknown format", "Ismeretlen formátum");
			Package.sharedLang.addTranslation("hu", "Not a ZIP!", "Nem egy ZIP!");
			Package.sharedLang.addTranslation("hu", "Not a TAR!", "Nem egy TAR!");
			Package.sharedLang.addTranslation("hu", "Not a GZ!", "Nem egy GZ!");
			Package.sharedLang.addTranslation("hu", "Unknown format!", "Ismeretlen formátum!");
			Package.sharedLang.addTranslation("hu", "Previous", "Előző");
			Package.sharedLang.addTranslation("hu", "Next", "Következő");
			Package.sharedLang.addTranslation("hu", "Stored", "Tárolt");
			Package.sharedLang.addTranslation("hu", "Deflated", "Légmentesített");
			Package.sharedLang.addTranslation("hu", "Yes", "Igen");
			Package.sharedLang.addTranslation("hu", "No", "Nem");
			Package.sharedLang.addTranslation("hu", "Open package", "Csomag megnyitása");
		}
		this.lang = Package.sharedLang;
	}

	packageTypes = [
		{
			"format": "TAR",
			"mime": ["application/tar"],
			"extensions": [".tar"],
			"usage": "TAR archive file"
		},
		{
			"format": "GZIP",
			"mime": ["application/gzip"],
			"extensions": [".gz"],
			"usage": "GZIP compressed file"
		},
		{
			"format": "TAR GZ",
			"mime": ["application/gzip"],
			"extensions": [".tar.gz", ".tgz"],
			"usage": "TAR archive compressed with GZIP"
		},
		{
			"format": "ZIP",
			"mime": ["application/zip", "application/x-zip-compressed"],
			"extensions": [".zip"],
			"usage": "ZIP archive format"
		},
		{
			"format": "Office Open XML (OOXML)",
			"mime": ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
			"extensions": [".docx"],
			"usage": "Microsoft Word document"
		},
		{
			"format": "Office Open XML (OOXML)",
			"mime": ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
			"extensions": [".xlsx"],
			"usage": "Microsoft Excel spreadsheet"
		},
		{
			"format": "Office Open XML (OOXML)",
			"mime": ["application/vnd.openxmlformats-officedocument.presentationml.presentation"],
			"extensions": [".pptx"],
			"usage": "Microsoft PowerPoint presentation"
		},
		{
			"format": "OpenDocument Format (ODF)",
			"mime": ["application/vnd.oasis.opendocument.text"],
			"extensions": [".odt"],
			"usage": "LibreOffice / OpenOffice text document"
		},
		{
			"format": "OpenDocument Format (ODF)",
			"mime": ["application/vnd.oasis.opendocument.spreadsheet"],
			"extensions": [".ods"],
			"usage": "Spreadsheet"
		},
		{
			"format": "OpenDocument Format (ODF)",
			"mime": ["application/vnd.oasis.opendocument.presentation"],
			"extensions": [".odp"],
			"usage": "Presentation"
		},
		{
			"format": "EPUB",
			"mime": ["application/epub+zip"],
			"extensions": [".epub"],
			"usage": "E-book format"
		},
		{
			"format": "Java Archive (JAR)",
			"mime": ["application/java-archive"],
			"extensions": [".jar"],
			"usage": "Java applications"
		},
		{
			"format": "Android Package (APK)",
			"mime": ["application/vnd.android.package-archive"],
			"extensions": [".apk"],
			"usage": "Android apps"
		},
		{
			"format": "Mozilla Extension (XPI)",
			"mime": ["application/x-xpinstall"],
			"extensions": [".xpi"],
			"usage": "Firefox extensions"
		},
		{
			"format": "KMZ (Google Earth)",
			"mime": ["application/vnd.google-earth.kmz"],
			"extensions": [".kmz"],
			"usage": "Geospatial data with images"
		},
		{
			"format": "Visio Drawing (VSDX)",
			"mime": ["application/vnd.ms-visio.drawing"],
			"extensions": [".vsdx"],
			"usage": "Microsoft Visio drawing"
		},
		{
			"format": "Windows App Package (APPX)",
			"mime": ["application/vnd.ms-appx"],
			"extensions": [".appx"],
			"usage": "Windows Store application"
		},
		{
			"format": "Windows App Package (MSIX)",
			"mime": ["application/vnd.ms-package.msix"],
			"extensions": [".msix"],
			"usage": "Modern Windows application package"
		},
		{
			"format": "3D Manufacturing Format",
			"mime": ["model/x3d+zip"],
			"extensions": [".x3dz"],
			"usage": "Compressed 3D models"
		},
		{
			"format": "Sweet Home 3D",
			"mime": [],
			"extensions": [".sh3d"],
			"usage": "Sweet Home 3D"
		},
		{
			"format": "Unity Asset Bundle",
			"mime": [],
			"extensions": [".unitypackage"],
			"usage": "Unity development assets"
		},
		{
			"format": "iWork (Pages, Numbers, Keynote)",
			"mime": [],
			"extensions": [".pages", ".numbers", ".key"],
			"usage": "Apple office documents"
		},
		{
			"format": "WordPerfect X format",
			"mime": [],
			"extensions": [".wpx"],
			"usage": "Corel WordPerfect ZIP-based format"
		}
	]

	addFile(path, content, options = {}) {
		if (!path || typeof path !== "string") return;

		let data;

		if (typeof content === "string") {
			if (this.isBase64(content)) {
				data = this.base64ToBinary(content);
			} else {
				data = new TextEncoder().encode(content);
			}
		} else {
			data = content;
		}

		const existing = this.packageContent.find(e => e.name === path);
		if (existing) {
			existing.content = data;
			existing.compress = options.compressed ?? true;
			existing.isDirectory = false;
			existing.lastModified = options.modified ?? Date.now();
			return;
		}

		this.packageContent.push({
			name: path,
			content: data,
			compress: options.compressed ?? true,
			isDirectory: false,
			lastModified: options.modified ?? Date.now()
		});
	}

	replaceFile(name, newContent, options = {}) {
		this.removeFile(name);
		this.addFile(name, newContent, options);
	}

	removeFile(name) {
		this.packageContent = this.packageContent.filter(f => f.name !== name);
	}

	extractFile(name) {
		const file = this.packageContent.find(f => f.name === name);
		return file ? file.content : null;
	}

	addFolder(path, options = {}) {
		if (!path.endsWith("/")) path += "/";
		const exists = this.packageContent.some(e => e.name === path);
		if (exists) return;

		this.packageContent.push({
			name: path,
			content: new Uint8Array(0),
			compress: false,
			isDirectory: true,
			lastModified: options.modified ?? Date.now()
		});
	}

	removeFolder(path) {
		if (!path.endsWith("/")) path += "/";
		this.packageContent = this.packageContent.filter(f => !f.name.startsWith(path));
	}

	renameContent(oldName, newName) {
		const file = this.packageContent.find(f => f.name === oldName);
		if (file) file.name = newName;
	}

	getContent() {
		return this.packageContent;
	}

	listContent() {
		return this.packageContent.map(f => ({
			name: f.name,
			size: f.content.length,
			mtime: f.lastModified
		}));
	}

	/**
	 * Generate a simple console table of the ZIP file entries.
	 * @param {object} files 
	 */
	logPackageTable(files) {
		const table = files.map(file => ({
			Index: file.index,
			Name: file.name,
			Compressed: [this.formatSize(file.compressedSize).value, this.formatSize(file.compressedSize).unit].join(" "),
			Size: [this.formatSize(file.size).value, this.formatSize(file.size).unit].join(" "),
			Method: file.compressionMethod === 0x00 ? this.lang.translate("Stored") : this.lang.translate("Deflated"),
			UTF8: (file.utf8 & 0x0800) ? this.lang.translate("Yes") : this.lang.translate("No"),
			ExtraField: [this.formatSize(file.extraFieldLength).value, this.formatSize(file.extraFieldLength).unit].join(" ")
		}));
		console.table(table);
	}

	isBase64(str) {
		if (typeof str !== "string") return false;

		const cleaned = str
			.replace(/^data:.*;base64,/, '')
			.replace(/[\s\r\n]+/g, '')
			.replace(/-/g, '+')
			.replace(/_/g, '/')
			.trim();

		const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
		return base64Regex.test(cleaned) && cleaned.length % 4 === 0;
	}

	base64ToBinary(base64) {
		try {
			if (typeof base64 !== "string") {
				throw new TypeError("Input must be a Base64-encoded string.");
			}

			const cleanedBase64 = base64
				.replace(/^data:.*;base64,/, '')
				.replace(/[\s\r\n]+/g, '')
				.replace(/-/g, '+')
				.replace(/_/g, '/')
				.trim();

			let binaryString;
			if (typeof atob === "function") {
				binaryString = atob(cleanedBase64);
			} else {
				binaryString = Buffer.from(cleanedBase64, "base64").toString("binary");
			}

			const bytes = new Uint8Array(binaryString.length);
			for (let i = 0; i < binaryString.length; i++) {
				bytes[i] = binaryString.charCodeAt(i);
			}

			return bytes;
		} catch (e) {
			console.error("Base64 decoding failed:", e.message);
			return null;
		}
	}

	async download({ format = "zip", mime = "application/zip", asBase64 = false, filename } = {}) {
		let blob;
		let baseName = this.packageName || format.toUpperCase() + " " + this.lang.translate("package");

		switch (format) {
			case "tar":
				blob = this.toTarBlob();
				baseName += ".tar";
				break;
			case "tar.gz":
				blob = await this.toTarGzBlob();
				baseName += ".tar.gz";
				break;
			default:
				blob = await this.build(mime);
				baseName += "." + format;
		}

		if (asBase64) {
			const buffer = await blob.arrayBuffer();
			let binary = "";
			const bytes = new Uint8Array(buffer);
			for (let b of bytes) binary += String.fromCharCode(b);
			return btoa(binary);
		} else {
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = filename || baseName;
			a.click();
		}
	}

	detectArchiveType(bytes) {
		const sig = Array.from(bytes.slice(0, 8));

		const hex = sig.map(b => b.toString(16).padStart(2, "0")).join(" ").toUpperCase();

		if (sig[0] === 0x50 && sig[1] === 0x4B) return "zip";
		if (sig[0] === 0x1F && sig[1] === 0x8B) return "gz";
		if (bytes.length > 262) {
			const ustar = new TextDecoder().decode(bytes.slice(257, 263));
			if (ustar.startsWith("ustar")) return "tar";
		}
		console.log(hex);
		return "Unknown format (hex: " + hex + ")";
	}

	getFormatByExtension(extension) {
		return this.packageTypes.find(f => f.extensions.includes(extension))?.format || this.lang.translate("Unknown format");
	}

	getFormatByMime(mime) {
		return this.packageTypes.find(f => f.mime.includes(mime))?.format || this.lang.translate("Unknown format");
	}

	/**
	 * Tömörít adatot CompressionStream segítségével.
	 * @param {Uint8Array|ArrayBuffer} data - A bemeneti adat.
	 * @param {string} mode - "deflate-raw", "deflate", "gzip" (böngésző támogatástól függ).
	 * @param {boolean} stripZlibHeader - Ha true és "deflate-raw" a mode, levágja a zlib fejléceket.
	 * @returns {Promise<Uint8Array>}
	 */
	async deflateData(data, mode = "deflate-raw", stripZlibHeader = false) {
		if (typeof CompressionStream === "undefined") {
			console.warn("CompressionStream is not supported, original data will be returned.");
			return data instanceof Uint8Array ? data : new Uint8Array(data);
		}

		const cs = new CompressionStream(mode);
		const writer = cs.writable.getWriter();
		await writer.write(data);
		await writer.close();

		const compressed = new Uint8Array(await new Response(cs.readable).arrayBuffer());

		if (stripZlibHeader && mode === "deflate-raw") {
			return compressed.slice(2, compressed.length - 4);
		}

		return compressed;
	}

	/**
	 * Kibontja a CompressionStream által tömörített adatot.
	 * @param {Uint8Array|ArrayBuffer} data - A bemeneti tömörített adat.
	 * @param {string} mode - "deflate-raw", "deflate", "gzip" (böngésző támogatástól függ).
	 * @param {boolean} addZlibHeader - Ha true és "deflate-raw" a mode, hozzáad egy minimális zlib fejléct + checksumot.
	 * @returns {Promise<Uint8Array>}
	 */
	async inflateData(data, mode = "deflate-raw", addZlibHeader = false) {
		if (typeof DecompressionStream === "undefined") {
			console.warn("DecompressionStream is not supported, original data will be returned.");
			return data instanceof Uint8Array ? data : new Uint8Array(data);
		}

		let input = data instanceof Uint8Array ? data : new Uint8Array(data);

		if (addZlibHeader && mode === "deflate-raw") {
			const header = new Uint8Array([0x78, 0x9C]);
			const combined = new Uint8Array(header.length + input.length);
			combined.set(header, 0);
			combined.set(input, header.length);
			input = combined;
			mode = "deflate";
		}

		const ds = new DecompressionStream(mode);
		const writer = ds.writable.getWriter();
		await writer.write(input);
		await writer.close();

		const decompressed = new Uint8Array(await new Response(ds.readable).arrayBuffer());
		return decompressed;
	}

	/**
	 * Return the human readable format of the given number of bytes.
	 * @param {number} bytes 
	 * @param {number} decimals 
	 * @returns object
	 */
	formatSize(bytes, decimals = 2) {
		if (bytes === 0) return { value: 0, unit: "B" };

		const k = 1024;
		const sizes = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));

		const value = bytes / Math.pow(k, i);
		return { value: parseFloat(value.toFixed(decimals)), unit: sizes[i] };
	}

	/**
	 * Check if the given array is a text or a binary data.
	 * @param {array} buffer 
	 * @returns boolean
	 */
	isTextFile(buffer) {
		const bytes = new Uint8Array(buffer);
		let printable = 0;
		let total = bytes.length;

		for (let i = 0; i < total; i++) {
			const b = bytes[i];
			if ((b >= 32 && b <= 126) || b === 9 || b === 10 || b === 13) {
				printable++;
			}
		}

		const ratio = printable / total;
		return ratio > 0.95;
	}

	async loadPackage(arrayBuffer, contentContainer) {
		const bytes = new Uint8Array(arrayBuffer);
		const type = this.detectArchiveType(bytes);

		if (type === "zip") {
			const zip = new ZipBuilder();
			const files = await zip.readPackage(arrayBuffer);
			if (files && files.length) {
				zip.renderTable({ name: "package.zip", type: "application/zip", size: bytes.length, lastModified: Date.now() }, "", files, contentContainer);
			} else {
				contentContainer.textContent = this.lang.translate("Not a ZIP!");
			}
		} else if (type === "tar") {
			const tar = new TarBuilder();
			const files = await tar.readPackage(arrayBuffer);
			if (files && files.length) {
				tar.renderTable({ name: "package.tar", type: "application/tar", size: bytes.length, lastModified: Date.now() }, "", files, contentContainer);
			} else {
				contentContainer.textContent = this.lang.translate("Not a TAR!");
			}
		} else if (type === "gz") {
			const targz = new TarGzBuilder();
			const files = await targz.openTarGz(arrayBuffer);
			if (files && files.length) {
				targz.renderTable({ name: "package.tar.gz", type: "application/gzip", size: bytes.length, lastModified: Date.now() }, "", files, contentContainer);
			} else {
				contentContainer.textContent = this.lang.translate("Not a GZ!");
			}
		} else {
			contentContainer.textContent = this.lang.translate("Unknown format!");
		}
	}

	assignEvents(container, filtered, renderRows) {
		container.querySelectorAll("button[data-preview]").forEach(btn => {
			btn.addEventListener("click", async () => {
				const name = decodeURIComponent(btn.dataset.preview);
				const file = this.packageContent.find(x => x.name === name);
				if (!file || !file.content) return;

				let buffer = file.content;
				if (buffer instanceof ArrayBuffer) buffer = new Uint8Array(buffer);

				if (name.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
					const blob = new Blob([buffer]);
					const url = URL.createObjectURL(blob);
					this.showModal(name, "<img src='" + url + "' style='max-width: 100%'>", "");
					document.getElementById("modal").addEventListener("close", () => URL.revokeObjectURL(url), { once: true });
				} else if (name.match(/\.(pdf)$/i)) {
					const blob = new Blob([buffer]);
					this.showModal(name, this.previewFile(blob, "application/pdf"), "");
					document.getElementById("modal").addEventListener("close", () => URL.revokeObjectURL(url), { once: true });
				} else if (this.isTextFile(buffer)) {
					const text = new TextDecoder("utf-8").decode(buffer);
					this.showModal(name, "<pre>" + this.escapeHtml(text) + "</pre>", "");
				} else {
					const dump = this.toHexDump(buffer);
					this.showModal(name, "<pre>" + dump.dump + "</pre>", dump.totalPages > 1 ? "<div><button id='prev-page'>◀ " + this.lang.translate("Previous") + "</button><span id='page-info'>" + dump.currentPage + " / " + dump.totalPages + "</span><button id='next-page'>" + this.lang.translate("Next") + " ▶</button></div>" : "");
					if (dump.totalPages > 1) {
						this.initHexdump(buffer);
						document.getElementById("prev-page").addEventListener("click", () => {
							if (this.currentPage > 0) {
								this.currentPage--;
								this.renderHexdump();
							}
						});
						document.getElementById("next-page").addEventListener("click", () => {
							if (this.currentPage < this.totalPages - 1) {
								this.currentPage++;
								this.renderHexdump();
							}
						});
					}
				}
			});
		});

		container.querySelectorAll("th[data-sort]").forEach(th => {
			let asc = true;
			th.addEventListener("click", () => {
				const key = th.dataset.sort;
				const sorted = [...filtered].sort((a, b) => {
					let va, vb;
					if (key === "platformName" || key === "flags") {
						va = this.parseExternalAttributes(a.externalAttr ?? 0, a.madeByVersion)[key] || "";
						vb = this.parseExternalAttributes(b.externalAttr ?? 0, b.madeByVersion)[key] || "";
						if (Array.isArray(va)) va = va.join(", ");
						if (Array.isArray(vb)) vb = vb.join(", ");
					} else {
						va = a[key]; vb = b[key];
					}
					if (typeof va === "string") va = va.toLowerCase();
					if (typeof vb === "string") vb = vb.toLowerCase();
					if (va < vb) return asc ? -1 : 1;
					if (va > vb) return asc ? 1 : -1;
					return 0;
				});
				container.querySelectorAll("th span:last-child").forEach(span => span.textContent = "");
				asc = !asc;
				th.lastElementChild.textContent = asc ? "▼": "▲";
				renderRows(sorted);
			});
		});
	}

	fuvIcon = "data:image/vnd.microsoft.icon;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////wAA////////AAD/j//2f/8AAP+D/0B//wAA/4B+AD//AAD/AD4AP/8AAP8APAA//wAA/gA8AH//AAD+ADgAf/8AAP4AOAB//wAA/gAwAH//AADgAAAAH/8AAPAAAAA//wAA/AAAAH//AAD+AAAA//8AAP8AAAH//wAA/wAAA///AAD/gAAH//8AAOAAAA///wAAgAAAD///AACAAAAAD/8AAMAAAAAB/wAAwAAAAAH/AADgAAAAAP8AAPAAAAAAfwAA8AAAAAB/AAD/AAAAAf8AAP8OAAAH/wAA//4AAAf/AAD//gAAH/8AAP//AAD//wAA//8AAf//AAD//3AA//8AAP//+AD//wAA///8AP//AAD///8A//8AAP/3/4H//wAA/////f//AAD/7/////8AAP/f/////wAA/9//////AAD/v/////8AAP9//////wAA/n//////AAD+//////8AAP7//////wAA////////AAD///////8AACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATJD0bAgQGKwIDBQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBAUFBAwUFAIEBQUCBAUFAgQFBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIPHAw8fmogOGVugAwUKVAEC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";

	showPage(containerId) {
		const parentContainer = document.getElementById(containerId) || document.body;
		let container = document.createElement("div");
		parentContainer.appendChild(container);

		let style = document.createElement("style");
		style.innerText = ":root { --bg: #F9FAFB; --fg: #111827; --accent: #0366d6; --table-bg: #ffffff; --table-fg: #E6EDF3; --border: #D1D5DB; --head-bg: #b3b699; --head-fg: #ffffff; --row-bg: #ffffff; --row-bg-alt: #fafafa; --row-hover: #e6f3ff; --foot-bg: #f7f7b7; --link: #0077ff; --label-bg: #336698; --label-fg: #ffffff; --label-border: #0066cc; } \
			[data-theme='dark'] { --bg: #0D1117; --fg: #E6EDF3; --accent: #3b82f6; --table-bg: #161B22; --table-fg: #E6EDF3; --border: #374151; --head-bg: #004491; --head-fg: #ffffff; --row-bg: #30363D; --row-bg-alt: #1E2329; --row-hover: #2D333B; --foot-bg: #21262D; --link: #58A6FF; --label-bg: #238636; --label-fg: #ffffff; --label-border: #2ea043; } \
			body { background-color: var(--bg); color: var(--fg); } \
			pre { background-color: var(--bg); color: var(--fg); } \
			div { overflow-x: auto; font-family: monospace; } \
			label, button {text-align: center; cursor: pointer; margin: 4px; padding: 4px; border: 1px solid; border-radius: 4px; background-color: var(--label-bg); color: var(--label-fg); display: block; font-family: monospace; } \
			button { display: inline-block; } \
			input[type='file'] { display: none; } \
			button:hover, label:hover { background-color: var(--label-border); } \
			nav { font-family: monospace; margin: 4px; } \
			nav * { margin: 4px; } \
			nav a:first-child { font-weight: bold; } \
			a { text-decoration: none; color: var(--link); } \
			a:hover { text-decoration: underline; } \
			a[href='#']:first-child { font-weight: bold; } \
			#contentContainer { padding: 4px; } \
			table { font-family: monospace; border-collapse: collapse; min-width: 100%; overflow: auto; white-space: nowrap; box-shadow: 0px 0px 4px; background-color: var(--table-bg); color: var(--fg); } \
			td, th { border: 1px solid var(--border); padding: 4px; } \
			thead { background-color: var(--head-bg); text-shadow: 0px 0px 4px var(--head-fg); } \
			th { cursor: pointer; } \
			th span:last-child { color: var(--head-fg); margin: 4px; } \
			th:nth-child(2), th:nth-child(9), th:nth-child(10), th:nth-child(11) { text-align: left; } \
			th:nth-child(7), th:nth-child(8) { text-align: center; } \
			th:nth-child(1), th:nth-child(3), th:nth-child(4), th:nth-child(5), th:nth-child(6) { text-align: right; } \
			tbody tr:nth-child(even) { background-color: var(--row-bg-alt); } \
			tbody tr:hover { background-color: var(--row-hover); } \
			td:nth-child(2), td:nth-child(9), td:nth-child(10), td:nth-child(11) { text-align: left; } \
			td:nth-child(7), td:nth-child(8) { text-align: center; } \
			td:nth-child(1), td:nth-child(3), td:nth-child(4), td:nth-child(5), td:nth-child(6) { text-align: right; } \
			tfoot { background-color: var(--head-bg); text-align: right; font-weight: bold; text-shadow: 0px 0px 4px var(--head-fg); } \
			.dragover { background: rgba(0, 102, 204, 0.1); border: 2px dashed var(--label-border); }";
		document.head.appendChild(style);

		let icon = document.createElement("link");
		icon.setAttribute("rel", "icon");
		icon.setAttribute("href", this.fuvIcon);
		document.head.appendChild(icon);

		let dropPackageZone = document.createElement("div");
		dropPackageZone.setAttribute("id", "dropPackageZone");
		container.appendChild(dropPackageZone);

		let input = document.createElement("input");
		input.setAttribute("type", "file");
		input.setAttribute("id", "packageInput");
		dropPackageZone.appendChild(input);

		let label = document.createElement("label");
		label.setAttribute("for", input.getAttribute("id"));
		label.setAttribute("data-i18n", "Open package");
		label.textContent = this.lang.translate("Open package");
		dropPackageZone.appendChild(label);

		const dropZone = document.getElementById("dropPackageZone");
		dropZone.addEventListener("dragover", (e) => {
			e.preventDefault();
			dropZone.classList.add("dragover");
		});
		dropZone.addEventListener("dragleave", () => {
			dropZone.classList.remove("dragover");
		});
		dropZone.addEventListener("drop", async (e) => {
			e.preventDefault();
			e.dataTransfer.dropEffect = "copy";
			dropZone.classList.remove("dragover");
			for (const file of e.dataTransfer.files) {
				const arrayBuffer = await file.arrayBuffer();
				await this.loadPackage(arrayBuffer, contentContainer);
			}
		});

		parentContainer.appendChild(dropPackageZone);

		let contentContainer = document.createElement("div");
		contentContainer.setAttribute("id", "contentContainer");
		parentContainer.appendChild(contentContainer);

		input.addEventListener("change", async (event) => {
			const file = event.target.files[0];
			if (!file) return;

			const arrayBuffer = await file.arrayBuffer();
			await this.loadPackage(arrayBuffer, contentContainer);
		});
	}

	/**
	 * Hexdump előállítása lapozással.
	 * @param {Uint8Array} bytes - A bemeneti adatok
	 * @param {number} offset - Honnan kezdje (alapértelmezés: 0)
	 * @param {number} length - Mennyi bájtot mutasson (alapértelmezés: teljes hossz)
	 * @param {number} pageSize - Egy oldal mérete bájtban (pl. 256 vagy 1024)
	 * @param {number} page - Hanyadik oldal (0-alapú index)
	 */
	toHexDump(bytes, offset = 0, length = bytes.length - offset, pageSize = 256, page = 0) {
		let out = "";
		const end = Math.min(offset + length, bytes.length);

		const pageOffset = offset + page * pageSize;
		const pageEnd = Math.min(pageOffset + pageSize, end);

		for (let i = pageOffset; i < pageEnd; i += 16) {
			const slice = bytes.slice(i, Math.min(i + 16, pageEnd));
			const hex = Array.from(slice).map(b => b.toString(16).padStart(2, "0")).join(" ");
			const ascii = Array.from(slice).map(b => (b >= 32 && b <= 126) ? String.fromCharCode(b) : ".").join("");

			out += i.toString(16).padStart(8, "0") + "  " + hex.padEnd(47) + "  " + ascii + "\n";
		}

		this.totalPages = Math.ceil((end - offset) / pageSize);

		return { dump: out, totalPages: this.totalPages, currentPage: page + 1 };
	}

	renderHexdump() {
		const output = document.getElementById("modalContent").querySelector("pre");
		const { dump, totalPages, currentPage } = this.toHexDump(this.data, 0, this.data.length, this.pageSize, this.currentPage);
		output.textContent = dump;

		document.getElementById("page-info").textContent = currentPage + " / " + totalPages;
	}

	initHexdump(bytes, pageSize = 256) {
		this.data = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
		this.pageSize = pageSize;
		this.totalPages = Math.ceil(this.data.length / this.pageSize);
		this.currentPage = 0;
		this.renderHexdump();
	}

	escapeHtml(str) {
		return str.replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
	}

	previewFile(arrayBuffer, mime) {
		const blob = new Blob([arrayBuffer], { type: mime });
		const url = URL.createObjectURL(blob);

		const iframe = document.createElement("iframe");
		iframe.src = url;
		iframe.width = "100%";
		iframe.height = "600px";

		return iframe;
	}

	showModal(header, content, footer) {
		let modalForm = document.createElement("div");
		modalForm.setAttribute("id", "modalForm");

		let modal = document.createElement("div");
		modal.setAttribute("id", "modal");
		modalForm.appendChild(modal);

		let style = document.createElement("style");
		style.innerText = "* { box-sizing: border-box; } \
			#modalForm { text-align: center; position: fixed; z-index: 1000; padding: 50px 0px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); } \
			#modal { display: flex; flex-direction: column; position: relative; background-color: var(--bg); color: var(--fg); margin: auto; padding: 0; border: 1px solid var(--border); max-width: 80%; max-height: 80vh; box-shadow: 0px 0px 4px; overflow: hidden; \
			-webkit-animation-name: animatetop; -webkit-animation-duration: 0.4s; animation-name: animatetop; animation-duration: 0.4s; } \
			@-webkit-keyframes animatetop { \
			from {top:-300px; opacity:0} \
			to {top:0; opacity:1} \
			} \
			@keyframes animatetop { \
			from {top:-300px; opacity:0} \
			to {top:0; opacity:1} \
			} \
			#modalHeader { flex: 0 0 auto; padding: 2px 16px; background-color: var(--head-bg); color: var(--head-fg); } \
			#modalHeader span { float: right; font-size: 28px; font-weight: bold; cursor: pointer; } \
			#modalHeader span:hover { color: var(--accent); } \
			#modalContent { padding: 14px; flex: 1 1 auto; overflow: auto; } \
			#modalContent pre { text-align: initial; white-space: pre-wrap; word-wrap: break-word; } \
			#modalFooter { flex: 0 0 auto; padding: 2px 16px; background-color: var(--head-bg); color: var(--head-fg); } \
			#modalFooter span { font-size: 22px; font-weight: bold; cursor: pointer; } \
			#modalFooter div { text-align: center; }";
		modal.appendChild(style);

		let modalHeader = document.createElement("div");
		modalHeader.setAttribute("id", "modalHeader");
		modalHeader.appendChild(document.createElement("span")).innerHTML = "&times;";
		modalHeader.appendChild(document.createElement("h2")).textContent = header;
		modal.appendChild(modalHeader);

		let modalContent = document.createElement("div");
		modalContent.setAttribute("id", "modalContent");
		if (typeof content === "string") modalContent.innerHTML = content;
		else modalContent.appendChild(content);
		modal.appendChild(modalContent);

		let modalFooter = document.createElement("div");
		modalFooter.setAttribute("id", "modalFooter");
		if (typeof footer === "string") modalFooter.innerHTML = footer;
		else modalFooter.appendChild(footer);
		modal.appendChild(modalFooter);

		document.body.appendChild(modalForm);
		modalHeader.querySelector("span").addEventListener("click", () => modalForm.remove());

		window.onclick = function(event) {
			if (event.target == modalForm) {
				modalForm.remove();
			}
		}
	}
}

class ZipBuilder extends Package {
	constructor() {
		super();

		this.lang.addTranslation("hu", "Open package", "Csomag megnyitása");
		this.lang.addTranslation("hu", "Build ZIP Package", "ZIP csomag létrehozása");
		this.lang.addTranslation("hu", "Download ZIP", "ZIP letöltése");
		this.lang.addTranslation("hu", "Index", "Index");
		this.lang.addTranslation("hu", "Name", "Név");
		this.lang.addTranslation("hu", "Size", "Méret");
		this.lang.addTranslation("hu", "Compressed", "Tömörített");
		this.lang.addTranslation("hu", "Encrypted", "Titkosított");
		this.lang.addTranslation("hu", "UTF-8", "UTF-8");
		this.lang.addTranslation("hu", "Extra fields", "Extra mezők");
		this.lang.addTranslation("hu", "Platform", "Platform");
		this.lang.addTranslation("hu", "Attributes", "Attribútumok");
		this.lang.addTranslation("hu", "Uncompressed", "Tömörítetlen");
		this.lang.addTranslation("hu", "Unknown", "Ismeretlen");
		this.lang.addTranslation("hu", "Compressed size", "Tömörített méret");
		this.lang.addTranslation("hu", "Compression", "Tömörítés");
		this.lang.addTranslation("hu", "Modified", "Módosítva");
		this.lang.addTranslation("hu", "No files in the package.", "Nincsenek fájlok a csomagban.");
		this.lang.addTranslation("hu", "Total Size", "Teljes méret");
		this.lang.addTranslation("hu", "bytes", "bájt");
		this.lang.addTranslation("hu", "folder", "mappa");
		this.lang.addTranslation("hu", "folders", "mappa");
		this.lang.addTranslation("hu", "file", "fájl");
		this.lang.addTranslation("hu", "files", "fájl");
		this.lang.addTranslation("hu", "entry", "bejegyzés");
		this.lang.addTranslation("hu", "entries", "bejegyzés");
		this.lang.addTranslation("hu", "Yes", "Igen");
		this.lang.addTranslation("hu", "No", "Nem");
		this.lang.addTranslation("hu", "Encryption", "Titkosítás");
		this.lang.addTranslation("hu", "None", "Nincs");
		this.lang.addTranslation("hu", "ZIP64 extended information", "ZIP64 kiterjesztett információ");
		this.lang.addTranslation("hu", "Extended Timestamp", "Kiterjesztett időbélyeg");
		this.lang.addTranslation("hu", "Old Extended Timestamp", "Régi kiterjesztett időbélyeg");
		this.lang.addTranslation("hu", "Unix UID/GID", "Unix UID/GID");
		this.lang.addTranslation("hu", "Info-ZIP Unix Extra Field", "Info-ZIP Unix extra mező");
		this.lang.addTranslation("hu", "Unicode Comment", "Unicode megjegyzés");
		this.lang.addTranslation("hu", "AES Encryption", "AES titkosítás");
		this.lang.addTranslation("hu", "Unknown / custom field", "Ismeretlen / egyedi mező");
		this.lang.addTranslation("hu", "Unix-like (inferred)", "Unix-szerű (következtetett)");
		this.lang.addTranslation("hu", "Haiku / BeOS (inferred)", "Haiku / BeOS (következtetett)");
		this.lang.addTranslation("hu", "Directory", "Könyvtár");
		this.lang.addTranslation("hu", "Read-only", "Csak olvasható");
		this.lang.addTranslation("hu", "Hidden", "Rejtett");
		this.lang.addTranslation("hu", "System", "Rendszer");
		this.lang.addTranslation("hu", "Archive", "Archív");
		this.lang.addTranslation("hu", "Named pipe", "Named pipe");
		this.lang.addTranslation("hu", "Character special", "Karakter speciális");
		this.lang.addTranslation("hu", "Block special", "Blokk speciális");
		this.lang.addTranslation("hu", "Regular file", "Általános fájl");
		this.lang.addTranslation("hu", "Symbolic link", "Szimbolikus hivatkozás");
		this.lang.addTranslation("hu", "Socket", "Socket");
		this.lang.addTranslation("hu", "POSIX mode: ", "POSIX mód: ");
		this.lang.addTranslation("hu", "Mac file type: ", "Mac fájl típus: ");
		this.lang.addTranslation("hu", "Symlink", "Szimbolikus hivatkozás: ");
		this.lang.addTranslation("hu", "BeOS/Haiku magic attr", "BeOS/Haiku varázslatos attribútum");
		this.lang.addTranslation("hu", "POSIX mode (presumed): 644", "POSIX mód (feltételezett): 644");
		this.lang.addTranslation("hu", "Raw attribute value", "Nyers attribútum érték");
	}

	/**
	 * Generate DOS date format.
	 * @param {date} date 
	 * @returns 
	 */
	getDosDate(date) {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return ((year - 1980) << 9) | (month << 5) | day;
	}

	/**
	 * Generate DOS time format
	 * @param {date} date 
	 * @returns 
	 */
	getDosTime(date) {
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = Math.floor(date.getSeconds() / 2);
		return (hours << 11) | (minutes << 5) | seconds;
	}

	dosDateTimeToDate(date, time) {
		const day = date & 0x1F;
		const month = (date >> 5) & 0x0F;
		const year = ((date >> 9) & 0x7F) + 1980;

		const second = (time & 0x1F) * 2;
		const minute = (time >> 5) & 0x3F;
		const hour = (time >> 11) & 0x1F;

		return new Date(year, month - 1, day, hour, minute, second);
	}

	toBytesLE(num, length) {
		const bytes = [];
		for (let i = 0; i < length; i++) {
			bytes.push(num & 0xff);
			num >>= 8;
		}
		return bytes;
	}

	CRC32_TABLE = (() => {
		const table = new Uint32Array(256);
		for (let i = 0; i < 256; i++) {
			let c = i;
			for (let k = 0; k < 8; k++) {
				c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
			}
			table[i] = c >>> 0;
		}
		return table;
	})();

	crc32(input) {
		const buffer = input instanceof Uint8Array ? input : new Uint8Array(input);
		let crc = 0xFFFFFFFF;
		for (let i = 0; i < buffer.length; i++) {
			crc = this.CRC32_TABLE[(crc ^ buffer[i]) & 0xFF] ^ (crc >>> 8);
		}
		return (crc ^ 0xFFFFFFFF) >>> 0;
	}

	updateCompression(name, compressed) {
		const file = this.packageContent.find(f => f.name === name);
		if (file) file.compress = compressed;
	}

	/**
	 * Create a new ZIP package from the list of the files in the `packageContent`.
	 * @param {string=} mime 
	 * @returns Blob
	 */
	async buildZip(mime = "application/zip") {
		const encoder = new TextEncoder();
		let fileData = [];
		let centralDirectory = [];
		let offset = 0;

		for (const entry of this.packageContent) {
			const filenameBytes = encoder.encode(entry.name);
			let contentBytes, compressedBytes, compressionMethod, crc;
			const isDir = entry.isDirectory || entry.name.endsWith("/");

			if (isDir) {
				contentBytes = new Uint8Array(0);
				compressedBytes = new Uint8Array(0);
				compressionMethod = [0x00, 0x00];
				crc = 0;
			} else {
				contentBytes = typeof entry.content === "string" ? encoder.encode(entry.content) : entry.content;
				crc = this.crc32(contentBytes);

				if (entry.compress === false) {
					compressedBytes = contentBytes;
					compressionMethod = [0x00, 0x00];
				} else {
					compressedBytes = await this.deflateData(contentBytes);
					compressionMethod = [0x08, 0x00];
				}
			}

			const modDate = entry.lastModified ? new Date(entry.lastModified) : new Date();
			const dosTime = this.getDosTime(modDate);
			const dosDate = this.getDosDate(modDate);

			const localHeader = [
				0x50, 0x4b, 0x03, 0x04,
				0x14, 0x00,
				0x00, 0x08,
				...compressionMethod,
				...this.toBytesLE(dosTime, 2),
				...this.toBytesLE(dosDate, 2),
				...this.toBytesLE(crc, 4),
				...this.toBytesLE(compressedBytes.length, 4),
				...this.toBytesLE(contentBytes.length, 4),
				...this.toBytesLE(filenameBytes.length, 2),
				0x00, 0x00
			];

			fileData.push(new Uint8Array(localHeader));
			fileData.push(filenameBytes);
			if (!isDir) fileData.push(compressedBytes);

			const centralHeader = [
				0x50, 0x4b, 0x01, 0x02,
				0x14, 0x00,
				0x14, 0x00,
				0x00, 0x08,
				...compressionMethod,
				...this.toBytesLE(dosTime, 2),
				...this.toBytesLE(dosDate, 2),
				...this.toBytesLE(crc, 4),
				...this.toBytesLE(compressedBytes.length, 4),
				...this.toBytesLE(contentBytes.length, 4),
				...this.toBytesLE(filenameBytes.length, 2),
				0x00, 0x00,
				0x00, 0x00,
				0x00, 0x00,
				0x00, 0x00,
				0x00, 0x00, 0x00, 0x00,
				...this.toBytesLE(offset, 4)
			];

			centralDirectory.push(new Uint8Array(centralHeader));
			centralDirectory.push(filenameBytes);

			offset += localHeader.length + filenameBytes.length + (isDir ? 0 : compressedBytes.length);
		}

		const entryCount = this.packageContent.length;
		const centralDirSize = centralDirectory.reduce((sum, part) => sum + part.length, 0);

		const endOfCentralDir = [
			0x50, 0x4b, 0x05, 0x06,
			0x00, 0x00,
			0x00, 0x00,
			...this.toBytesLE(entryCount, 2),
			...this.toBytesLE(entryCount, 2),
			...this.toBytesLE(centralDirSize, 4),
			...this.toBytesLE(offset, 4),
			0x00, 0x00
		];

		const zipParts = [...fileData, ...centralDirectory, new Uint8Array(endOfCentralDir)];
		return new Blob(zipParts, { type: mime });
	}

	/**
	 * Open the given file as a `packageContent`.
	 * @param {array} file Binary array.
	 */
	openPackage(file) {
		this.packageContent = this.readPackage(file);
	}

	/**
	 * Read the ZIP file's content.
	 * @param {*} arrayBuffer 
	 * @returns object
	 */
	async readPackage(arrayBuffer) {
		const bytes = new Uint8Array(arrayBuffer);
		const isZip = bytes[0] === 0x50 && bytes[1] === 0x4B;
		if (!isZip) return false;

		const view = new DataView(arrayBuffer);

		const eocdSig = 0x06054b50;
		let offset = arrayBuffer.byteLength - 22;
		while (offset >= 0 && view.getUint32(offset, true) !== eocdSig) {
			offset--;
		}
		if (offset < 0) throw new Error("EOCD not found");

		const totalEntries = view.getUint16(offset + 10, true);
		const cdSize = view.getUint32(offset + 12, true);
		const cdOffset = view.getUint32(offset + 16, true);

		let ptr = cdOffset;

		const entries = [];
		for (let i = 0; i < totalEntries; i++) {
			const sig = view.getUint32(ptr, true);
			if (sig !== 0x02014b50) throw new Error("Bad CD signature at " + ptr);

			const lastModTime = view.getUint16(ptr + 12, true);
			const lastModDate = view.getUint16(ptr + 14, true);
			const gpFlag = view.getUint16(ptr + 8, true);
			const compressionMethod = view.getUint16(ptr + 10, true);
			const compressedSize = view.getUint32(ptr + 20, true);
			const size = view.getUint32(ptr + 24, true);
			const fileNameLength = view.getUint16(ptr + 28, true);
			const extraLength = view.getUint16(ptr + 30, true);
			const commentLength = view.getUint16(ptr + 32, true);
			const localHeaderOffset = view.getUint32(ptr + 42, true);
			const madeByVersion = view.getUint16(ptr + 4, true);
			const attributes = view.getUint32(ptr + 36, true);

			const fileNameBytes = new Uint8Array(
				arrayBuffer,
				ptr + 46,
				fileNameLength
			);
			const fileName = new TextDecoder().decode(fileNameBytes);

			let extraFields = null;
			if (extraLength > 0) {
				const extraFieldBytes = arrayBuffer.slice(
					ptr + 46 + fileNameLength,
					ptr + 46 + fileNameLength + extraLength
				);
				extraFields = this.parseExtraField(extraFieldBytes).map(e => e.name).join(", ");
			}

			let content = null;
			if (!fileName.endsWith("/")) {
				const localSig = view.getUint32(localHeaderOffset, true);
				if (localSig !== 0x04034b50) throw new Error("Bad local header sig");

				const localNameLen = view.getUint16(localHeaderOffset + 26, true);
				const localExtraLen = view.getUint16(localHeaderOffset + 28, true);
				let dataStart = localHeaderOffset + 30 + localNameLen + localExtraLen;

				let dataEnd;
				if (gpFlag & 0x08) {
					dataEnd = dataStart + compressedSize;
				} else {
					const localCompSize = view.getUint32(localHeaderOffset + 18, true);
					dataEnd = dataStart + localCompSize;
				}

				const compressedContent = arrayBuffer.slice(dataStart, dataEnd);

				try {
					if (compressionMethod === 0) {
						content = compressedContent;
					} else if (compressionMethod === 8) {
						const ds = new DecompressionStream("deflate-raw");
						content = await new Response(
							new Blob([compressedContent]).stream().pipeThrough(ds)
						).arrayBuffer();
					} else {
						throw new Error("Unsupported compression: " + compressionMethod);
					}
				} catch (err) {
					console.error("!! Error extracting " + fileName + ":" + err);
					continue;
				}
			}
			const mtime = this.dosDateTimeToDate(lastModDate, lastModTime);

			entries.push({
				index: i + 1,
				name: fileName,
				compressedSize,
				size,
				compressed: compressionMethod !== 0,
				compressionMethod,
				utf8: gpFlag,
				lastModified: mtime,
				encrypted: (gpFlag & 0x0001) !== 0,
				extraFieldLength: extraLength,
				extraFields,
				content: content,
				madeByVersion,
				attributes
			});

			ptr += 46 + fileNameLength + extraLength + commentLength;
		}

		this.packageContent = entries;
		return entries;
	}

	detectDeflateType(data) {
		const firstByte = data[0];
		if ((firstByte & 0x0F) === 0x08) {
			return "deflate";
		}
		return "deflate-raw";
	}

	async decompressDeflate(compressedBytes, compressionMethod) {
		if (compressedBytes instanceof ArrayBuffer) {
			compressedBytes = new Uint8Array(compressedBytes);
		}

		if (compressionMethod === 0x00) {
			return compressedBytes;
		}

		if (typeof DecompressionStream === "undefined") {
			console.warn("DecompressionStream not supported, returning raw compressed data");
			return compressedBytes;
		}

		const mode = this.detectDeflateType(compressedBytes);

		const ds = new DecompressionStream(mode);
		const writer = ds.writable.getWriter();
		await writer.write(compressedBytes);
		await writer.close();

		const decompressedBuffer = await new Response(ds.readable).arrayBuffer();
		return new Uint8Array(decompressedBuffer);
	}

	/**
	 * Try to find the package document format based on the file's content.
	 * @param {array} files The returned `files` array from the `readPackage()` function.
	 * @returns string
	 */
	detectZipBasedFormat(files) {
		const names = files.map(f => f.name);

		const mimetypeFile = files.find(f => f.name === "mimetype");
		if (mimetypeFile && mimetypeFile.content) {
			const mimeText = new TextDecoder().decode(mimetypeFile.content).trim();
			const foundByMime = this.packageTypes.find(p => p.mime.includes(mimeText));
			if (foundByMime) return [foundByMime.format, foundByMime.usage].join(" ");
		}

		if (names.includes("[Content_Types].xml")) {
			if (names.some(n => n.startsWith("word/"))) return "Office Open XML (OOXML) Microsoft Word document";
			if (names.some(n => n.startsWith("xl/"))) return "Office Open XML (OOXML) Microsoft Excel spreadsheet";
			if (names.some(n => n.startsWith("ppt/"))) return "Office Open XML (OOXML) Microsoft PowerPoint presentation";
		}

		if (names.includes("mimetype") && names.includes("META-INF/container.xml")) {
			return "EPUB E-book format";
		}

		if (names.includes("META-INF/MANIFEST.MF")) {
			if (names.includes("AndroidManifest.xml")) return "Android Package (APK) Android apps";
			if (names.some(n => n.endsWith(".xpi"))) return "Mozilla Extension (XPI) Firefox extensions";
			return "Java Archive (JAR) Java applications";
		}

		if (names.includes("doc.kml") || names.includes("kml/") || names.includes("files/")) {
			return "KMZ (Google Earth) Geospatial data with images";
		}

		if (names.includes("AppxManifest.xml")) {
			return "Windows App Package (APPX/MSIX)";
		}

		return "ZIP archive format";
	}

	/**
	 * Try to parse the extra fields for the ZIP entry.
	 * @param {*} extraFieldBuffer 
	 * @returns object
	 */
	parseExtraField(extraFieldBuffer) {
		const view = new DataView(extraFieldBuffer);
		let offset = 0;
		const entries = [];

		const KNOWN_IDS = {
			0x0001: this.lang.translate("ZIP64 extended information"),
			0x5455: this.lang.translate("Extended Timestamp"),
			0x5855: this.lang.translate("Old Extended Timestamp"),
			0x7875: this.lang.translate("Unix UID/GID"),
			0x6375: this.lang.translate("Unicode Comment"),
			0x7075: this.lang.translate("Info-ZIP Unicode Path"),
			0x9901: this.lang.translate("AES Encryption Information")
		};

		while (offset + 4 <= extraFieldBuffer.byteLength) {
			const headerId = view.getUint16(offset, true);
			const dataSize = view.getUint16(offset + 2, true);
			offset += 4;

			if (offset + dataSize > extraFieldBuffer.byteLength) {
				console.warn("ExtraField entry overflow at the end");
				break;
			}

			const dataBytes = new Uint8Array(extraFieldBuffer, offset, dataSize);

			let textPreview = null;
			try {
				const txt = new TextDecoder("utf-8", { fatal: false }).decode(dataBytes);
				const printableRatio = txt.replace(/[ -~]/g, "").length / txt.length;
				if (printableRatio < 0.3) {
					textPreview = txt;
				}
			} catch (_) {}

			entries.push({
				id: "0x" + headerId.toString(16).padStart(4, "0"),
				name: KNOWN_IDS[headerId] || this.lang.translate("Unknown / custom field"),
				length: dataSize,
				raw: dataBytes,
				textPreview
			});

			offset += dataSize;
		}

		return entries;
	}

	/**
	 * Try to decide which OS relates to the external attributes.
	 * @param {number} platformId 
	 * @param {Uint32Array} extraEntries 
	 * @param {number} highWord 
	 * @returns 
	 */
	guessOSType(platformId, extraEntries, highWord) {
		const extraIds = extraEntries.map(e => e.id);
		if (platformId === 98 || platformId === 16) return "Haiku / BeOS";
		if (platformId === 3) return "Unix / POSIX";
		if (extraIds.includes("0x7875") || extraIds.includes("0x5855")) return this.lang.translate("Unix-like (inferred)");
		if ((highWord & 0xFF00) === 0xBE00) return this.lang.translate("Haiku / BeOS (inferred)");
		return this.lang.translate("Unknown");
	}

	/**
	 * Try to find the external attributes of the ZIP entry.
	 * @param {Uint32Array} externalAttr 
	 * @param {Uint16Array} madeByVersion 
	 * @returns object
	 */
	parseAttributes(externalAttr, madeByVersion) {
		const platformId = madeByVersion >> 8;
		const low = externalAttr & 0xFFFF;
		const high = (externalAttr >>> 16) & 0xFFFF;

		const platforms = {
			0:  "MS-DOS / Windows FAT",
			1:  "Amiga",
			2:  "OpenVMS",
			3:  "Unix / POSIX",
			7:  "Macintosh (HFS)",
			10: "Windows NTFS",
			11: "MVS",
			13: "VM/CMS",
			14: "Atari ST",
			16: "BeOS",
			19: "OS/2 HPFS",
			20: "Macintosh (UFS)",
			98: "Haiku / BeOS"
		};

		const result = {
			rawHex: "0x" + externalAttr.toString(16).padStart(8, "0"),
			platformId,
			platformName: platforms[platformId] || this.lang.translate("Unknown"),
			lowWord: low,
			highWord: high,
			isDirectory: false,
			flags: []
		};

		switch (platformId) {
			case 0: // DOS / Windows FAT
			case 10: // NTFS
				if (low & 0x10) { result.isDirectory = true; result.flags.push(this.lang.translate("Directory")); }
				if (low & 0x01) { result.flags.push(this.lang.translate("Read-only")); }
				if (low & 0x02) { result.flags.push(this.lang.translate("Hidden")); }
				if (low & 0x04) { result.flags.push(this.lang.translate("System")); }
				if (low & 0x20) { result.flags.push(this.lang.translate("Archive")); }
				break;
			case 3: // Unix / POSIX
				const fileType = high & 0o170000;
				if (fileType === 0o010000) { result.flags.push(this.lang.translate("Named pipe")); }
				if (fileType === 0o020000) { result.flags.push(this.lang.translate("Character special")); }
				if (fileType === 0o040000) { result.isDirectory = true; result.flags.push(this.lang.translate("Directory")); }
				if (fileType === 0o060000) { result.flags.push(this.lang.translate("Block special")); }
				if (fileType === 0o100000) { result.flags.push(this.lang.translate("Regular file")); }
				if (fileType === 0o120000) { result.flags.push(this.lang.translate("Symbolic link")); }
				if (fileType === 0o140000) { result.flags.push(this.lang.translate("Socket")); }
				result.flags.push(this.lang.translate("POSIX mode: ") + (high & 0o7777).toString(8));
				break;
			case 7: // Macintosh (HFS)
				const fileTypeCode = String.fromCharCode((high >> 8) & 0xFF, high & 0xFF);
				result.flags.push(this.lang.translate("Mac file type: ") + fileTypeCode);
				break;
			case 16: // BeOS
			case 98: // Haiku / BeOS
				if (high & 0x4000) { result.isDirectory = true; result.flags.push(this.lang.translate("Directory")); }
				if (high & 0x8000) { result.flags.push(this.lang.translate("Symlink")); }
				if (!(high & 0x4000) && !(high & 0x8000)) {
					result.flags.push(this.lang.translate("Regular file"));
				}
				const perms = high & 0o7777;
				if (perms) {
					result.flags.push(this.lang.translate("POSIX mode: ") + perms.toString(8));
				} else if ((high & 0xFF00) === 0xBE00) {
					result.flags.push(this.lang.translate("BeOS/Haiku magic attr"));
					result.flags.push(this.lang.translate("POSIX mode (presumed): 644"));
				}
				break;
			case 19: // OS/X
				break;
			default:
				result.flags.push(this.lang.translate("Raw attribute value"));
		}

		return result;
	}

	/**
	 * Generate a HTML content for the given `file` in a formatted and navigatable table.
	 * @param {object} file The input ZIP file.
	 * @param {string} currentPath The current path/folder within the ZIP.
	 * @param {object} allFiles The entries list of the ZIP package.
	 * @param {string} container The HTML element where the generated content need to be append.
	 */
	renderTable(file, currentPath, allFiles, container) {
		container.innerHTML = "";

		function camelize(str) {
			return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
				return index === 0 ? word.toLowerCase() : word.toUpperCase();
			}).replace(/\s+/g, "");
		}

		function createItem(tag, text, className, style) {
			let el = document.createElement(tag);
			if (style) el.setAttribute("style", style);
			if (className) el.setAttribute("class", className);
			if (typeof text === "string" || typeof text === "number") {
				let elSpan = document.createElement("span");
				elSpan.setAttribute("data-i18n", text);
				elSpan.textContent = text;
				if (text && text != "") el.appendChild(elSpan);
			} else if (text instanceof HTMLElement) {
				el.appendChild(text);
			}
			if (tag == "th") {
				el.setAttribute("data-sort", camelize(text));
				let elSpanSort = document.createElement("span");
				el.appendChild(elSpanSort);
			}
			return el;
		}

		const parts = currentPath ? currentPath.split("/").filter(Boolean) : [];
		let path = document.createElement("nav");
		let root = document.createElement("a");
		root.setAttribute("href", "#");
		root.setAttribute("data-path", "");
		root.textContent = file.name;
		path.appendChild(root);
		parts.forEach((part, idx) => {
			const pathUpToHere = parts.slice(0, idx + 1).join("/") + "/";
			path.appendChild(createItem("span", ">"));
			let pathElement = document.createElement("a");
			pathElement.setAttribute("href", "#");
			pathElement.setAttribute("data-path", pathUpToHere);
			pathElement.textContent = part;
			path.appendChild(pathElement);
		});
		container.appendChild(path);

		if (currentPath) {
			let back = document.createElement("button");
			back.setAttribute("id", "upButton");
			back.setAttribute("data-i18n", "up");
			back.textContent = this.lang.translate("Up");
			const parentPath = parts.slice(0, -1).join("/");
			back.setAttribute("data-path", parentPath ? parentPath + "/" : "");
			container.appendChild(back);
		}

		const seenDirs = new Set();
		let filtered = [];

		allFiles.forEach(f => {
			if (!f.name.startsWith(currentPath)) return;

			if (f.name === currentPath) return;

			const rel = f.name.slice(currentPath.length);
			const slashIndex = rel.indexOf("/");

			if (slashIndex > -1) {
				const folderPath = currentPath + rel.slice(0, slashIndex + 1);

				if (folderPath === currentPath) return;

				if (!seenDirs.has(folderPath)) {
					seenDirs.add(folderPath);

					const original = allFiles.find(x => x.name === folderPath);
					if (!original) {
						const hasChild = allFiles.some(
							child => child.name.startsWith(folderPath) && child.name !== folderPath
						);
						if (!hasChild) return;
					}

					filtered.push({
						index: original?.index ?? null,
						name: folderPath,
						compressedSize: original?.compressedSize ?? 0,
						size: original?.size ?? 0,
						compressionMethod: original?.compressionMethod ?? 0x00,
						utf8: original?.utf8 ?? 0,
						encrypted: original?.encrypted ?? false,
						extraFieldLength: original?.extraFieldLength ?? 0,
						extraFields: original?.extraFields ?? "",
						content: null,
						externalAttr: (typeof original?.externalAttr === "number") ? original.externalAttr : (0o040755 << 16),
						madeByVersion: (typeof original?.madeByVersion === "number") ? original.madeByVersion : (3 << 8)
					});
				}
			} else {
				filtered.push(f);
			}
		});
//const osGuess = guessOSType(attrs.platformId, extra, attrs.highWord);

		filtered.sort((a, b) => {
			const aIsDir = a.name.endsWith("/") || (a.externalAttr && this.parseAttributes(a.externalAttr, a.madeByVersion).isDirectory);
			const bIsDir = b.name.endsWith("/") || (b.externalAttr && this.parseAttributes(b.externalAttr, b.madeByVersion).isDirectory);

			if (aIsDir !== bIsDir) return aIsDir ? -1 : 1;
			return a.name.localeCompare(b.name, this.language);
		});

		let table = document.createElement("table");
		table.appendChild(createItem("caption", [file.name, this.getFormatByMime(file.type), [this.formatSize(file.size).value, this.formatSize(file.size).unit].join(" "), new Date(file.lastModified).toLocaleDateString()].join(", ")));
		let thead = document.createElement("thead");
		let headerRow = document.createElement("tr");
		headerRow.appendChild(createItem("th", this.lang.translate("Index")));
		headerRow.appendChild(createItem("th", this.lang.translate("Name")));
		headerRow.appendChild(createItem("th", this.lang.translate("Size")));
		headerRow.appendChild(createItem("th", this.lang.translate("Modified")));
		headerRow.appendChild(createItem("th", this.lang.translate("Compressed size")));
		headerRow.appendChild(createItem("th", this.lang.translate("Compressed")));
		headerRow.appendChild(createItem("th", this.lang.translate("Encrypted")));
		headerRow.appendChild(createItem("th", this.lang.translate("UTF-8")));
		headerRow.appendChild(createItem("th", this.lang.translate("Extra fields")));
		headerRow.appendChild(createItem("th", this.lang.translate("Platform")));
		headerRow.appendChild(createItem("th", this.lang.translate("Attributes")));
		thead.appendChild(headerRow);
		table.appendChild(thead);
		let tbody = document.createElement("tbody");
		table.appendChild(tbody);
		let tfoot = document.createElement("tfoot");
		let footerRow = document.createElement("tr");
		let footer = createItem("td", (filtered.length - seenDirs.size) + " " + ((filtered.length - seenDirs.size) < 2 ? this.lang.translate("file") : this.lang.translate("files")) + " (" + seenDirs.size + " " + (seenDirs.size < 2 ? this.lang.translate("folder") : this.lang.translate("folders")) +") / " + allFiles.length + (allFiles.length < 2 ? " " + this.lang.translate("entry") : " " + this.lang.translate("entries")));
		footer.setAttribute("colspan", "11");
		footerRow.appendChild(footer);
		tfoot.appendChild(footerRow);
		table.appendChild(tfoot);
		container.appendChild(table);

		function createDownloadUrl(file) {
			if (!file.content) return "#";
			const blob = new Blob([file.content]);
			const url = URL.createObjectURL(blob);
			return url;
		}

		const renderRows = (list) => {
			const tbody = container.querySelector("tbody");
			tbody.innerHTML = "";
			list.forEach(file => {
				const isDir = file.name.endsWith("/") || (file.attributes && this.parseAttributes(file.attributes, file.madeByVersion).isDirectory);
				const nameOnly = file.name.split("/").filter(Boolean).pop();
				const attrInfo = (typeof file.attributes === "number") ? this.parseAttributes(file.attributes, file.madeByVersion) : { platformName: "", flags: [] };
				const isText = (!isDir && file.content) ? this.isTextFile(file.content) : false;

				let row = document.createElement("tr");
				let button = document.createElement("button");
				button.setAttribute("data-preview", encodeURIComponent(file.name));
				button.textContent = file.index;
				row.appendChild(createItem("td", isDir ? "" : button));
				let entry = createItem("td", "");
				let link = null;
				if (isDir) {
					link = createItem("a", "📁" + nameOnly);
					link.setAttribute("href", "#");
					link.setAttribute("class", "folder");
					link.setAttribute("data-path", file.name);
				} else {
					if (typeof DecompressionStream === "undefined" && file.compressionMethod !== 0x00) {
						link = createItem("span", nameOnly);
						console.warn("DecompressionStream nem támogatott.");
					} else if (file.encrypted) {
						link = createItem("span", nameOnly);
						console.warn("Enkriptálás nem támogatott.");
					} else {
						link = createItem("a", nameOnly);
						link.setAttribute("href", createDownloadUrl(file));
						link.setAttribute("download", nameOnly);
					}
				}
				entry.appendChild(link);
				row.appendChild(entry);
				row.appendChild(createItem("td", (isDir ? "" : this.formatSize(file.size).value) + " " + (isDir ? "" : this.formatSize(file.size).unit)));
				row.appendChild(createItem("td", isDir ? "" : file.lastModified ? file.lastModified.toLocaleString() : ""));
				row.appendChild(createItem("td", ((isDir || file.compressionMethod === 0x00) ? "" : this.formatSize(file.compressedSize).value) + " " + ((isDir || file.compressionMethod === 0x00) ? "" : this.formatSize(file.compressedSize).unit)));
				row.appendChild(createItem("td", isDir ? "" : file.compressionMethod === 0x00 ? "" : (100/(file.size/file.compressedSize)).toFixed(2) + "%"));
				row.appendChild(createItem("td", isDir ? "" : file.encrypted ? this.lang.translate("Yes") : ""));
				row.appendChild(createItem("td", (file.utf8 & 0x0800) ? this.lang.translate("Yes") : ""));
				row.appendChild(createItem("td", isDir ? "" : file.extraFields ? file.extraFields : ""));
				row.appendChild(createItem("td", isDir ? "" : attrInfo.platformName));
				row.appendChild(createItem("td", isDir ? "" : attrInfo.flags.join(", ") || ""));
				tbody.appendChild(row);
			});

			tbody.querySelectorAll(".folder").forEach(link => {
				link.addEventListener("click", e => {
					e.preventDefault();
					const newPath = e.target.closest("a").dataset.path;
					this.renderTable(file, newPath, allFiles, container);
				});
			});
		};

		renderRows(filtered);

		container.querySelectorAll("nav a").forEach(link => {
			link.addEventListener("click", e => {
				e.preventDefault();
				this.renderTable(file, e.target.dataset.path, allFiles, container);
			});
		});

		const upButton = container.querySelector("#upButton");
		if (upButton) {
			upButton.addEventListener("click", e => {
				this.renderTable(file, e.target.dataset.path, allFiles, container);
			});
		}

		this.assignEvents(container, filtered, renderRows);
	}

	/**
	 * Simple ZIP file validation.
	 * @param {array} arrayBuffer 
	 * @returns array
	 */
	async validatePackage(arrayBuffer) {
		const data = new Uint8Array(arrayBuffer);
		const warnings = [];

		function readUint16LE(offset) {
			return data[offset] | (data[offset + 1] << 8);
		}

		function readUint32LE(offset) {
			return data[offset] | (data[offset + 1] << 8) | (data[offset + 2] << 16) | (data[offset + 3] << 24);
		}

		function isAscii(str) {
			return /^[\x00-\x7F]*$/.test(str);
		}

		let eocdOffset = -1;
		for (let i = data.length - 22; i >= 0; i--) {
			if (data[i] === 0x50 && data[i + 1] === 0x4b && data[i + 2] === 0x05 && data[i + 3] === 0x06) {
				eocdOffset = i;
				break;
			}
		}
		if (eocdOffset === -1) throw new Error("EOCD not found");

		const centralDirOffset = readUint32LE(eocdOffset + 16);
		const totalEntries = readUint16LE(eocdOffset + 10);

		const seenNames = new Set();
		let ptr = centralDirOffset;

		for (let i = 0; i < totalEntries; i++) {
			if (data[ptr] !== 0x50 || data[ptr + 1] !== 0x4b || data[ptr + 2] !== 0x01 || data[ptr + 3] !== 0x02) {
				warnings.push("Invalid central directory signature at entry " + i);
				break;
			}

			const generalPurposeFlag = readUint16LE(ptr + 8);
			const compressionMethod = readUint16LE(ptr + 10);
			const fileNameLength = readUint16LE(ptr + 28);
			const extraLength = readUint16LE(ptr + 30);
			const localHeaderOffset = readUint32LE(ptr + 42);

			const fileName = new TextDecoder().decode(data.slice(ptr + 46, ptr + 46 + fileNameLength));

			if (!isAscii(fileName) && (generalPurposeFlag & 0x0800) === 0) {
				warnings.push("File " + fileName + " contains non-ASCII characters but UTF-8 flag is not set.");
			}

			if (seenNames.has(fileName)) {
				warnings.push("Duplicate file name detected: " + fileName);
			}
			seenNames.add(fileName);

			if (fileName === "mimetype") {
				if (i !== 0) {
					warnings.push("mimetype file is not the first entry — violates ODF spec.");
				}
				if (compressionMethod !== 0x00) {
					warnings.push("mimetype file is compressed — must be stored uncompressed.");
				}
			}

			if (extraLength !== 0) {
				warnings.push("File " + fileName + " contains extra field — may cause compatibility issues.");
			}

			ptr += 46 + fileNameLength + extraLength + readUint16LE(ptr + 32);
		}

		return warnings;
	}

	inspectZip(bytes) {
		function readUInt32LE(offset) {
			return bytes[offset] |
			(bytes[offset+1] << 8) |
			(bytes[offset+2] << 16) |
			(bytes[offset+3] << 24);
		}

		function readUInt16LE(offset) {
			return bytes[offset] | (bytes[offset+1] << 8);
		}

		const sig = readUInt32LE(0);
		console.log("Local header signature:", sig.toString(16));
		if (sig !== 0x04034b50) {
			console.warn("❌ Nem találtam PK 03 04 signature-t a fájl elején!");
		}

		let eocdOffset = -1;
		for (let i = bytes.length - 22; i >= 0; i--) {
			if (readUInt32LE(i) === 0x06054b50) {
				eocdOffset = i;
				break;
			}
		}
		if (eocdOffset === -1) {
			console.warn("❌ Nem találtam EOCD rekordot (PK 05 06).");
			return;
		}
		console.log("EOCD offset:", eocdOffset);

		const totalEntries = readUInt16LE(eocdOffset + 10);
		const cdSize = readUInt32LE(eocdOffset + 12);
		const cdOffset = readUInt32LE(eocdOffset + 16);
		console.log("Central directory entries:", totalEntries);
		console.log("Central directory size:", cdSize);
		console.log("Central directory offset:", cdOffset);

		const cdSig = readUInt32LE(cdOffset);
		console.log("Central dir signature @", cdOffset, ":", cdSig.toString(16));
		if (cdSig !== 0x02014b50) {
			console.warn("❌ Nem találtam PK 01 02 signature-t a central directory elején!");
		}
	}

	listCentralDirectory(bytes) {
		function readUInt32LE(off) {
			return bytes[off] |
			(bytes[off+1] << 8) |
			(bytes[off+2] << 16) |
			(bytes[off+3] << 24);
		}

		function readUInt16LE(off) {
			return bytes[off] | (bytes[off+1] << 8);
		}

		let eocdOffset = -1;
		for (let i = bytes.length - 22; i >= 0; i--) {
			if (readUInt32LE(i) === 0x06054b50) {
				eocdOffset = i;
				break;
			}
		}
		if (eocdOffset === -1) {
			console.error("❌ EOCD nem található");
			return;
		}

		const totalEntries = readUInt16LE(eocdOffset + 10);
		const cdSize = readUInt32LE(eocdOffset + 12);
		const cdOffset = readUInt32LE(eocdOffset + 16);

		console.log("Central directory entries:", totalEntries);
		console.log("Central directory size:", cdSize, "offset:", cdOffset);

		let ptr = cdOffset;
		for (let i = 0; i < totalEntries; i++) {
			const sig = readUInt32LE(ptr);
			if (sig !== 0x02014b50) {
				console.warn("❌ Hibás signature a central dir-ben @", ptr.toString(16));
				break;
			}
			const compMethod = readUInt16LE(ptr + 10);
			const crc = readUInt32LE(ptr + 16);
			const compSize = readUInt32LE(ptr + 20);
			const uncompSize = readUInt32LE(ptr + 24);
			const fnameLen = readUInt16LE(ptr + 28);
			const extraLen = readUInt16LE(ptr + 30);
			const commentLen = readUInt16LE(ptr + 32);
			const relOffset = readUInt32LE(ptr + 42);

			const fnameBytes = bytes.slice(ptr + 46, ptr + 46 + fnameLen);
			const fname = new TextDecoder().decode(fnameBytes);

			console.log(`#${i+1}`, fname, 
			"method:", compMethod, 
			"CRC:", crc.toString(16), 
			"cSize:", compSize, 
			"uSize:", uncompSize, 
			"offset:", relOffset);

			ptr += 46 + fnameLen + extraLen + commentLen;
		}
	}

	verifyCRC(bytes) {
		function readUInt32LE(off) {
			return (bytes[off]) |
			(bytes[off+1] << 8) |
			(bytes[off+2] << 16) |
			(bytes[off+3] << 24);
		}

		function readUInt16LE(off) {
			return bytes[off] | (bytes[off+1] << 8);
		}

		const table = new Uint32Array(256);
		for (let i = 0; i < 256; i++) {
			let c = i;
			for (let k = 0; k < 8; k++) {
				c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
			}
			table[i] = c >>> 0;
		}
		function crc32(buf) {
			let crc = 0xFFFFFFFF;
			for (let b of buf) {
				crc = table[(crc ^ b) & 0xFF] ^ (crc >>> 8);
			}
			return (crc ^ 0xFFFFFFFF) >>> 0;
		}

		let eocdOffset = -1;
		for (let i = bytes.length - 22; i >= 0; i--) {
			if (readUInt32LE(i) === 0x06054b50) { eocdOffset = i; break; }
		}
		const totalEntries = readUInt16LE(eocdOffset + 10);
		const cdOffset = readUInt32LE(eocdOffset + 16);

		let ptr = cdOffset;
		for (let i = 0; i < totalEntries; i++) {
			const sig = readUInt32LE(ptr);
			if (sig !== 0x02014b50) break;
			const crcStored = readUInt32LE(ptr + 16) >>> 0;
			const compSize = readUInt32LE(ptr + 20);
			const uncompSize = readUInt32LE(ptr + 24);
			const fnameLen = readUInt16LE(ptr + 28);
			const extraLen = readUInt16LE(ptr + 30);
			const commentLen = readUInt16LE(ptr + 32);
			const relOffset = readUInt32LE(ptr + 42);

			const fname = new TextDecoder().decode(bytes.slice(ptr+46, ptr+46+fnameLen));

			const localNameLen = readUInt16LE(relOffset + 26);
			const localExtraLen = readUInt16LE(relOffset + 28);
			const dataStart = relOffset + 30 + localNameLen + localExtraLen;
			const fileData = bytes.slice(dataStart, dataStart + uncompSize);

			const crcCalc = crc32(fileData);

			console.log(fname, "stored:", crcStored.toString(16), "calc:", crcCalc.toString(16));

			ptr += 46 + fnameLen + extraLen + commentLen;
		}
	}
}

class TarBuilder extends Package {
	constructor() {
		super();

		this.lang.addTranslation("hu", "Index", "Index");
		this.lang.addTranslation("hu", "Name", "Név");
		this.lang.addTranslation("hu", "Size", "Méret");
		this.lang.addTranslation("hu", "Modified", "Módosítva");
		this.lang.addTranslation("hu", "Group", "Csoport");
		this.lang.addTranslation("hu", "Owner", "Tulajdonos");
		this.lang.addTranslation("hu", "Type", "Típus");
		this.lang.addTranslation("hu", "Link", "Link");
		this.lang.addTranslation("hu", "File", "Fájl");
		this.lang.addTranslation("hu", "Directory", "Mappa");
		this.lang.addTranslation("hu", "Hard link", "Erős hivatkozás");
		this.lang.addTranslation("hu", "Symbolic link", "Szinbolikus hivatkozás");
		this.lang.addTranslation("hu", "Character special", "Karakter különleges");
		this.lang.addTranslation("hu", "Block special", "Blokk különleges");
		this.lang.addTranslation("hu", "FIFO", "FIFO");
		this.lang.addTranslation("hu", "Contiguous file", "Folytonos fájl");
		this.lang.addTranslation("hu", "Long filename", "Hosszú fájlnév");
		this.lang.addTranslation("hu", "Long linkname", "Hosszú hivatkozás");
		this.lang.addTranslation("hu", "Unknown", "Ismeretlen");
		this.lang.addTranslation("hu", "Up", "Fel");
		this.lang.addTranslation("hu", "file", "fájl");
		this.lang.addTranslation("hu", "files", "fájl");
		this.lang.addTranslation("hu", "folder", "mappa");
		this.lang.addTranslation("hu", "folders", "mappa");
		this.lang.addTranslation("hu", "entry", "bejegyzés");
		this.lang.addTranslation("hu", "entries", "bejegyzés");
		this.lang.addTranslation("hu", "Yes", "Igen");
		this.lang.addTranslation("hu", "No", "Nem");
	}

	/**
	 * Fájl hozzáadása a csomaghoz.
	 * @param {string} name - Fájlnév (lehet hosszú is, GNU longname támogatott).
	 * @param {Uint8Array|string|ArrayBuffer} content - Tartalom.
	 * @param {object} opts - Metaadatok.
	 *   mode: fájl mód (pl. 0o644)
	 *   uid, gid: user/group ID
	 *   uname, gname: user/group név
	 *   mtime: módosítási idő (ms)
	 *   typeflag: fájltípus ('0'=normál, '5'=könyvtár, '2'=link, 'L'=longname, stb.)
	 */
	addFile(name, content, opts = {}) {
		const bytes = typeof content === "string" ? new TextEncoder().encode(content) : new Uint8Array(content);

		this.packageContent.push({
			name,
			content: bytes,
			mode: opts.mode ?? 0o644,
			uid: opts.uid ?? 0,
			gid: opts.gid ?? 0,
			uname: opts.uname ?? "",
			gname: opts.gname ?? "",
			mtime: opts.mtime ?? Date.now(),
			typeflag: opts.typeflag ?? "0"
		});
	}

	createHeader(file) {
		const header = new Uint8Array(512);
		this.writeString(header, file.name, 0, 100);
		this.writeOctal(header, file.mode, 100, 8);
		this.writeOctal(header, file.uid, 108, 8);
		this.writeOctal(header, file.gid, 116, 8);
		this.writeOctal(header, file.content.length, 124, 12);
		this.writeOctal(header, Math.floor(file.mtime / 1000), 136, 12);
		this.writeString(header, "        ", 148, 8);
		this.writeString(header, file.typeflag, 156, 1);
		if (file.typeflag === "2" && file.linkname) {
			this.writeString(header, file.linkname, 157, 100);
		} else {
			this.writeString(header, "", 157, 100);
		}
		this.writeString(header, "ustar\0", 257, 6);
		this.writeString(header, "00", 263, 2);
		this.writeString(header, file.uname ?? "", 265, 32);
		this.writeString(header, file.gname ?? "", 297, 32);
		this.writeOctal(header, 0, 329, 8); // devmajor
		this.writeOctal(header, 0, 337, 8); // devminor

		let sum = 0;
		for (let i = 0; i < 512; i++) sum += header[i];
		this.writeOctal(header, sum, 148, 8);

		return header;
	}

	padTo512(bytes) {
		const blocks = Math.ceil(bytes.length / 512);
		const out = new Uint8Array(blocks * 512);
		out.set(bytes);
		return out;
	}

	concatParts(parts) {
		const total = parts.reduce((s, p) => s + p.length, 0);
		const out = new Uint8Array(total);
		let offset = 0;
		for (const p of parts) {
			out.set(p, offset);
			offset += p.length;
		}
		return out;
	}

	writeString(buf, str, offset, length) {
		const bytes = new TextEncoder().encode(str);
		buf.set(bytes.slice(0, length), offset);
		for (let i = offset + bytes.length; i < offset + length; i++) buf[i] = 0;
	}

	writeOctal(buf, num, offset, length) {
		const s = num.toString(8).padStart(length - 1, "0") + "\0";
		this.writeString(buf, s, offset, length);
	}

	readString(buf, offset, length) {
		let end = offset + length;
		for (let i = offset; i < offset + length; i++) {
			if (buf[i] === 0) { end = i; break; }
		}
		return new TextDecoder().decode(buf.slice(offset, end));
	}

	buildTar() {
		const parts = [];
		for (const file of this.packageContent) {
			if (file.name.length > 100 + 155) {
				const longNameBytes = new TextEncoder().encode(file.name + "\0");
				const longHeader = this.createHeader({
					name: "././@LongLink",
					size: longNameBytes.length,
					typeflag: "L",
					mode: 0o644,
					uid: 0,
					gid: 0,
					uname: "",
					gname: "",
					mtime: file.mtime
				});
				parts.push(longHeader);
				parts.push(this.padTo512(longNameBytes));
			}

			const header = this.createHeader(file);
			parts.push(header);
			parts.push(this.padTo512(file.content));
		}

		parts.push(new Uint8Array(512));
		parts.push(new Uint8Array(512));

		return this.concatParts(parts);
	}

	async toTarBlob() {
		const tarData = this.buildTar();
		return new Blob([tarData], { type: "application/x-tar" });
	}

	async openTar(file) {
		this.packageContent = await this.readPackage(file);
	}

	async readPackage(arrayBuffer) {
		const bytes = new Uint8Array(arrayBuffer);
		let offset = 0;
		let nextLongName = null;
		let nextLongLink = null;
		const td = new TextDecoder();

		const entries = [];
		while (offset + 512 <= bytes.length) {
			const block = bytes.slice(offset, offset + 512);
			if (block.every(b => b === 0)) break;

			const name = this.readString(block, 0, 100);
			const size = parseInt(this.readString(block, 124, 12).trim() || "0", 8);
			const mtime = parseInt(this.readString(block, 136, 12).trim() || "0", 8) * 1000;
			const typeflag = this.readString(block, 156, 1);
			const linkname = this.readString(block, 157, 100);
			const uname = this.readString(block, 265, 32);
			const gname = this.readString(block, 297, 32);

			const contentStart = offset + 512;
			const contentEnd = contentStart + size;
			const content = bytes.slice(contentStart, contentEnd);

			if (typeflag === "L") {
				// Long filename
				nextLongName = td.decode(content).replace(/\0.*$/, "");
			} else if (typeflag === "K") {
				// Long linkname
				nextLongLink = td.decode(content).replace(/\0.*$/, "");
			} else {
				const finalName = nextLongName || name;
				const finalLink = nextLongLink || linkname;

				entries.push({
					index: entries.length + 1,
					name: finalName,
					linkname: finalLink,
					content,
					size,
					mtime,
					uname,
					gname,
					typeflag
				});

				nextLongName = null;
				nextLongLink = null;
			}

			const contentBlocks = Math.ceil(size / 512);
			offset = contentStart + contentBlocks * 512;
		}

		this.packageContent = entries;
		return entries;
	}

	detectType(typeFlag) {
		switch (typeFlag) {
			case "0":
			case "\0":
				return this.lang.translate("File");
			case "1":
				return this.lang.translate("Hard link");
			case "2":
				return this.lang.translate("Symbolic link");
			case "3":
				return this.lang.translate("Character special");
			case "4":
				return this.lang.translate("Block special");
			case "5":
				return this.lang.translate("Directory");
			case "6":
				return this.lang.translate("FIFO");
			case "7":
				return this.lang.translate("Contiguous file");
			case "L":
				return this.lang.translate("Long filename");
			case "K":
				return this.lang.translate("Long linkname");
			default:
				return this.lang.translate("Unknown");
		}
	}

	renderTable(file, currentPath, allFiles, container) {
		container.innerHTML = "";

		function camelize(str) {
			return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
				return index === 0 ? word.toLowerCase() : word.toUpperCase();
			}).replace(/\s+/g, "");
		}

		function createItem(tag, text, className, style) {
			let el = document.createElement(tag);
			if (style) el.setAttribute("style", style);
			if (className) el.setAttribute("class", className);
			if (typeof text === "string" || typeof text === "number") {
				let elSpan = document.createElement("span");
				elSpan.setAttribute("data-i18n", text);
				elSpan.textContent = text;
				if (text && text != "") el.appendChild(elSpan);
			} else if (text instanceof HTMLElement) {
				el.appendChild(text);
			}
			if (tag == "th") {
				el.setAttribute("data-sort", camelize(text));
				let elSpanSort = document.createElement("span");
				el.appendChild(elSpanSort);
			}
			return el;
		}


		const parts = currentPath ? currentPath.split("/").filter(Boolean) : [];
		let path = document.createElement("nav");
		let root = document.createElement("a");
		root.setAttribute("href", "#");
		root.setAttribute("data-path", "");
		root.textContent = file.name;
		path.appendChild(root);
		parts.forEach((part, idx) => {
			const pathUpToHere = parts.slice(0, idx + 1).join("/") + "/";
			path.appendChild(createItem("span", ">"));
			let pathElement = document.createElement("a");
			pathElement.setAttribute("href", "#");
			pathElement.setAttribute("data-path", pathUpToHere);
			pathElement.textContent = part;
			path.appendChild(pathElement);
		});
		container.appendChild(path);

		if (currentPath) {
			let back = document.createElement("button");
			back.setAttribute("id", "upButton");
			back.textContent = this.lang.translate("Up");
			const parentPath = parts.slice(0, -1).join("/");
			back.setAttribute("data-path", parentPath ? parentPath + "/" : "");
			container.appendChild(back);
		}

		const seenDirs = new Set();
		let filtered = [];

		allFiles.forEach(f => {
			if (!f.name.startsWith(currentPath)) return;

			if (f.name === currentPath) return;

			const rel = f.name.slice(currentPath.length);
			const slashIndex = rel.indexOf("/");

			if (slashIndex > -1) {
				const folderPath = currentPath + rel.slice(0, slashIndex + 1);

				if (folderPath === currentPath) return;

				if (!seenDirs.has(folderPath)) {
					seenDirs.add(folderPath);

					const original = allFiles.find(x => x.name === folderPath);
					if (!original) {
						const hasChild = allFiles.some(
							child => child.name.startsWith(folderPath) && child.name !== folderPath
						);
						if (!hasChild) return;
					}

					filtered.push({
						index: original?.index ?? null,
						name: folderPath,
						size: original?.size ?? 0,
					});
				}
			} else {
				filtered.push(f);
			}
		});

		filtered.sort((a, b) => {
			const aIsDir = a.name.endsWith("/") || (a.externalAttr && this.parseAttributes(a.externalAttr, a.madeByVersion).isDirectory);
			const bIsDir = b.name.endsWith("/") || (b.externalAttr && this.parseAttributes(b.externalAttr, b.madeByVersion).isDirectory);

			if (aIsDir !== bIsDir) return aIsDir ? -1 : 1;
			return a.name.localeCompare(b.name, "hu");
		});

		let table = document.createElement("table");
		table.appendChild(createItem("caption", [file.name, this.getFormatByMime(file.type), [this.formatSize(file.size).value, this.formatSize(file.size).unit].join(" "), new Date(file.lastModified).toLocaleDateString()].join(", ")));
		let thead = document.createElement("thead");
		let headerRow = document.createElement("tr");
		headerRow.appendChild(createItem("th", this.lang.translate("Index")));
		headerRow.appendChild(createItem("th", this.lang.translate("Name")));
		headerRow.appendChild(createItem("th", this.lang.translate("Size")));
		headerRow.appendChild(createItem("th", this.lang.translate("Modified")));
		headerRow.appendChild(createItem("th", this.lang.translate("Group")));
		headerRow.appendChild(createItem("th", this.lang.translate("Owner")));
		headerRow.appendChild(createItem("th", this.lang.translate("Type")));
		headerRow.appendChild(createItem("th", this.lang.translate("Link")));
		thead.appendChild(headerRow);
		table.appendChild(thead);
		let tbody = document.createElement("tbody");
		table.appendChild(tbody);
		let tfoot = document.createElement("tfoot");
		let footerRow = document.createElement("tr");
		let footer = createItem("td", (filtered.length - seenDirs.size) + " " + ((filtered.length - seenDirs.size) < 2 ? this.lang.translate("file") : this.lang.translate("files")) + " (" + seenDirs.size + " " + (seenDirs.size < 2 ? this.lang.translate("folder") : this.lang.translate("folders")) + ") / " + allFiles.length + (allFiles.length < 2 ? " " + this.lang.translate("entry") : " " + this.lang.translate("entries")));
		footer.setAttribute("colspan", "10");
		footerRow.appendChild(footer);
		tfoot.appendChild(footerRow);
		table.appendChild(tfoot);
		container.appendChild(table);

		function createDownloadUrl(file) {
			if (!file.content) return "#";
			const blob = new Blob([file.content]);
			const url = URL.createObjectURL(blob);
			return url;
		}

		const renderRows = (list) => {
			const tbody = container.querySelector("tbody");
			tbody.innerHTML = "";
			list.forEach(file => {
				const isDir = file.name.endsWith("/") || (file.attributes && this.parseAttributes(file.attributes, file.madeByVersion).isDirectory);
				const nameOnly = file.name.split("/").filter(Boolean).pop();
				const isText = (!isDir && file.content) ? this.isTextFile(file.content) : false;

				let row = document.createElement("tr");
				let button = document.createElement("button");
				button.setAttribute("data-preview", encodeURIComponent(file.name));
				button.textContent = file.index;
				row.appendChild(createItem("td", isDir ? "" : button));
				let entry = createItem("td", "");
				let link = createItem("a", nameOnly)
				if (isDir) {
					link.setAttribute("href", "#");
					link.setAttribute("class", "folder");
					link.setAttribute("data-path", file.name);
				} else {
					if (typeof DecompressionStream === "undefined") {
						console.warn("DecompressionStream nem támogatott.");
					} else {
						link.setAttribute("href", createDownloadUrl(file));
						link.setAttribute("download", nameOnly);
					}
				}
				entry.appendChild(link);
				row.appendChild(entry);
				row.appendChild(createItem("td", (isDir ? "" : this.formatSize(file.size).value) + " " + (isDir ? "" : this.formatSize(file.size).unit)));
				row.appendChild(createItem("td", file.mtime ? new Date(file.mtime).toLocaleString() : ""));
				row.appendChild(createItem("td", file.gname ? file.gname : ""));
				row.appendChild(createItem("td", file.uname ? file.uname : ""));
				row.appendChild(createItem("td", file.typeflag ? this.detectType(file.typeflag) : ""));
				row.appendChild(createItem("td", file.linkname ? file.linkname : ""));
				tbody.appendChild(row);
			});

			tbody.querySelectorAll(".folder").forEach(link => {
				link.addEventListener("click", e => {
					e.preventDefault();
					const newPath = e.target.closest("a").dataset.path;
					this.renderTable(file, newPath, allFiles, container);
				});
			});
		};

		renderRows(filtered);

		container.querySelectorAll("nav a").forEach(link => {
			link.addEventListener("click", e => {
				e.preventDefault();
				this.renderTable(file, e.target.dataset.path, allFiles, container);
			});
		});

		const upButton = container.querySelector("#upButton");
		if (upButton) {
			upButton.addEventListener("click", e => {
				this.renderTable(file, e.target.dataset.path, allFiles, container);
			});
		}

		this.assignEvents(container, filtered, renderRows);
	}
}

class TarGzBuilder extends TarBuilder {
	constructor() {
		super();
	}

	async toTarGzBlob() {
		const tarData = this.buildTar();
		if (typeof CompressionStream === "undefined") {
			console.warn("CompressionStream is not supported, TarGzBuilder will fall back to uncompressed TAR.");
			return tarData;
		}
		const cs = new CompressionStream("gzip");
		const writer = cs.writable.getWriter();
		await writer.write(tarData);
		await writer.close();
		const gzBuffer = await new Response(cs.readable).arrayBuffer();
		return new Blob([gzBuffer], { type: "application/gzip" });
	}

	async openTarGz(file) {
		if (typeof DecompressionStream === "undefined") {
			console.warn("DecompressionStream is not supported.");
			return [];
		}

		try {
			const ds = new DecompressionStream("gzip");
			const writer = ds.writable.getWriter();

			writer.write(new Uint8Array(file))
				.then(() => writer.close())
				.catch(err => console.error("Decompression error:", err));

			const tarBuffer = await new Response(ds.readable).arrayBuffer();
			const entries = this.readPackage(tarBuffer);

			return entries;
		} catch (err) {
			console.error("openTarGz failed:", err);
			return [];
		}
	}
}
