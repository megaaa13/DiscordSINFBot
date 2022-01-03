
const { fs } = require("fs");

const langs = fs.readdirSync("langs").map((filename) => filename.split('.')[0]);
var maps = {};

for (var lang of langs) {
	const { map } = require(`langs/${lang}`);
	maps[lang] = map;
}

module.exports = {
	trans(user, str) {
		const lang = user?.locale;

		if (!lang) {
			return str;
		}

		if (!langs.includes(lang)) {
			return str;
		}

		let map = maps[lang];

		if (!map.includes(str)) {
			return str;
		}

		return map[str];
	}
};