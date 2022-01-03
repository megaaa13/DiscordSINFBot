const strs = {
	"A poll may not have a single possible answer": {
		"fr": "Un sondage ne peut pas avoir qu'une seule réponse possible"
	},

	"You may not have more than {0} possible answers (you passed {1})": {
		"fr": "Un sondage ne peut pas avoir plus de {0} réponses possible (vous en avez passé {1})"
	}
}

module.exports = {
	trans(user, str) {
		const lang = user?.locale;
		console.log(user);

		if (!lang) {
			return str;
		}

		if (!(str in strs)) {
			return str;
		}

		const map = strs[str];

		if (!(lang in map)) {
			console.log(`Unknown locale! (${lang})`);
			return str;
		}

		return map[lang];
	}
};