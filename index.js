/**
 * @overview Uses moment to clean up dates
 * @author Dustin Hershman
 * @version 1.0.0
 */

const moment = require('moment');

function datePrettify(dates, format, attr) {
	const useFormat = format || 'MM-DD-YYYY';

	function clean(item) {
		const date = (typeof item !== 'object') ? new Date(item) : item;

		return moment(date).format(useFormat);
	}

	function cleanArray(dateArr) {
		let results = [];
		let len = dateArr.length;
		let i = 0;

		for (i; i < len; i++) {
			results.push(clean(dateArr[i]));
		}

		return results;
	}

	function deepClean(items, keys) {
		let prop = '';

		for (prop in items) {
			if (items.hasOwnProperty(prop) && keys.includes(prop)) {
				items[prop] = clean(items[prop]);
			} else if (typeof items[prop] === 'object') {
				deepClean(items[prop], keys);
			}
		}

		return items;
	}

	function init() {
		let results = null;

		if (attr) {
			results = deepClean(dates, attr);
		} else if (dates.length && typeof dates !== 'string') {
			results = cleanArray(dates);
		} else {
			results = clean(dates);
		}

		return results;
	}

	return init();

}

module.exports = datePrettify;

