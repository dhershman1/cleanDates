import moment from 'moment';

let globalFormat = 'MM-DD-YYYY';

const clone = (items) => {
	return JSON.parse(JSON.stringify(items));
};

export const setFormat = (format) => {
	globalFormat = format;
};

export const clean = (item, format) => {
	const useFormat = format || globalFormat;
	const date = (typeof item !== 'object') ? new Date(item) : item;

	return moment(date).format(useFormat);
};

export const cleanArray = (dateArr, format) => {

	return dateArr.map(dateItem => clean(dateItem, format));
};

const deepCleaner = (dates, keys, format) => {
	for (let prop in dates) {
		if (Object.prototype.hasOwnProperty.call(dates, prop) && keys.indexOf(prop) !== -1) {
			dates[prop] = clean(dates[prop], format);
		} else if (typeof dates[prop] === 'object') {
			deepCleaner(dates[prop], keys, format);
		}
	}

	return dates;
};

export const deepClean = (dates, keys, format) => {
	const cloneDates = clone(dates);

	return deepCleaner(cloneDates, keys, format);
};
