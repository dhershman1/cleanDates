var moment = require('moment');
var formatDate = require('./src/format');

function extend() {
	var extended = {};
	var key = '';
	var prop = '';
	var arg = '';

	for (key in arguments) {
		arg = arguments[key];

		for (prop in arg) {
			if (Object.prototype.hasOwnProperty.call(arg, prop)) {
				extended[prop] = arg[prop];
			}
		}
	}

	return extended;
}


function datePrettify(options) {
	var defaults = {
		format: 'MM-DD-YYYY',
		months: [
			'January', 'February', 'March',
			'April', 'May', 'June', 'July',
			'August', 'September', 'October',
			'November', 'December'
		],
		shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
		days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		shortDays: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
	};
	var opts = extend({}, defaults, options);

	function runFormat(date) {
		return formatDate(date, opts);
	}

	function clean(item) {
		var date = (typeof item !== 'object') ? new Date(item) : item;

		return date;
		// return moment(date).format(useFormat);
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
		runFormat: runFormat,
		deepClean: deepClean,
		cleanArray: cleanArray,
		clean: clean
	};

}

module.exports = datePrettify;
