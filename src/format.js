module.exports = function (date, opts) {
	var verifiedDate = (date instanceof Date) ? date : new Date(date);
	var monthIndex = verifiedDate.getMonth();
	var year = verifiedDate.getFullYear();

	function clone(item) {
		return JSON.parse(JSON.stringify(item));
	}

	function formatMonth() {
		var style = opts.format.replace(/[^M]/gi, '').length;

		if (style === 3) {
			return opts.shortMonths[monthIndex];
		}

		if (style > 3) {
			return opts.months[monthIndex];
		}

		return (monthIndex <= 9) ? '0' + (monthIndex + 1) : monthIndex + 1;
	}

	function formatDay() {
		var style = opts.format.replace(/[^D]/gi, '').length;
		var day = (style < 3) ? verifiedDate.getDate() : verifiedDate.getDay();

		if (style === 3) {
			return opts.shortDays[day];
		}

		if (style > 3) {
			return opts.days[day];
		}

		return (day <= 9) ? '0' + day : day;
	}

	function formatYear() {
		var style = opts.format.replace(/[^Y]/gi, '').length;

		if (style === 2) {
			return year.slice(2, 4);
		}

		return year;
	}

	function format() {
		var cOpts = clone(opts);
		var fDay = formatDay();
		var fDayDigits = (verifiedDate.getDate() <= 9) ? '0' + verifiedDate.getDate() : verifiedDate.getDate();
		var fMonth = formatMonth();
		var fYear = formatYear();

		return cOpts.format.replace(/([M][^A-LN-Z\W]+)/gi, fMonth)
			.replace(/([D][^A-CE-Z\W]+)/gi, fDay)
			.replace(/([Dz][^A-CE-YD\W]+)/gi, fDayDigits)
			.replace(/([Y][^A-XZ\W]+)/gi, fYear);
	}

	return format();
};
