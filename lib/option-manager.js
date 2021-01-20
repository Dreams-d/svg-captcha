"use strict";
const opentype = require("opentype.js");
const charPreset = require("./char-preset");

const options = {
	width: 150,
	height: 50,
	noise: 1,
	color: false,
	background: "",
	size: 4,
	ignoreChars: "",
	fontSize: 56,
	charPreset,
};

const loadFont = (url) => {
	return new Promise((resolve, reject) => {
		opentype.load(url, (err, font) => {
			if (err) {
				reject("字体加载失败");
				return;
			}
			if (font) {
				options.font = font;
				options.ascender = font.ascender;
				options.descender = font.descender;
				resolve();
			}
		});
	});
};

module.exports = {
	options,
	loadFont,
};
