import format from 'date-fns/format';

export default (setFormat = 'MM-DD-YYYY') => {

	const clean = (date, oFormat) => {
		const useFormat = oFormat || setFormat;

		return format(date, useFormat);
	};

	const cleanArray = (dateArr, oFormat) => {
		const useFormat = oFormat || setFormat;

		return dateArr.map(dateItem => format(dateItem, useFormat));
	};

	const cleaner = (dates, keys, useFormat) => {
		for (const prop in dates) {
			if (typeof dates[prop] === 'object') {
				cleaner(dates[prop], keys, useFormat);
			}
			if (Object.prototype.hasOwnProperty.call(dates, prop) && keys.indexOf(prop) !== -1) {
				dates[prop] = format(dates[prop], useFormat);
			}
		}

		return dates;
	};

	const deepClean = (obj, keys, oFormat) => {
		const useFormat = oFormat || setFormat;
		const cObj = JSON.parse(JSON.stringify(obj));

		return cleaner(cObj, keys, useFormat);
	};

	return {
		clean,
		cleanArray,
		deepClean
	};
};
