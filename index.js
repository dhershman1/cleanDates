var moment = require('moment');

function datePrettify(format) {
	var useFormat = format || 'MM-DD-YYYY';

	function clean(item) {
		var date = (typeof item !== 'object') ? new Date(item) : item;

		return moment(date).format(useFormat);
	}

	function cleanArray(dateArr) {
		var cleaned = [];
		var len = dateArr.length;
		var i = 0;

		for (i; i < len; i++) {
			cleaned.push(clean(dateArr[i]));
		}

		return cleaned;
	}

	function deepClean(items, keys) {
		var prop = '';

		for (prop in items) {
			if (items.hasOwnProperty(prop) && keys.includes(prop)) {
				items[prop] = clean(items[prop]);
			} else if (typeof items[prop] === 'object') {
				deepClean(items[prop], keys);
			}
		}

		return items;
	}

	return {
		deepClean: deepClean,
		cleanArray: cleanArray,
		clean: clean
	};

}

module.exports = datePrettify;
