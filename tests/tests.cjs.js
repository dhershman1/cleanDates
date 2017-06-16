'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var test = _interopDefault(require('tape'));
var moment = _interopDefault(require('moment'));

let globalFormat = 'MM-DD-YYYY';

const clone = (items) => {
	return JSON.parse(JSON.stringify(items));
};

const setFormat = (format) => {
	globalFormat = format;
};

const clean = (item, format) => {
	const useFormat = format || globalFormat;
	const date = (typeof item !== 'object') ? new Date(item) : item;

	return moment(date).format(useFormat);
};

const cleanArray = (dateArr, format) => {

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

const deepClean = (dates, keys, format) => {
	const cloneDates = clone(dates);

	return deepCleaner(cloneDates, keys, format);
};

// Test Data
const dateObj = {
	date1: '12/11/09',
	dateArrOfObjs: [{
		date2: '2010/7/24'
	}],
	dateObj: {
		dateObj2: {
			testerDate: '10/05/2016'
		}
	}
};

test('Test single Clean with defaults\n', t => {
	const results = clean(dateObj.date1);

	t.equal(results, '12-11-2009', 'Sould format a single string date with a default format');
	t.end();
});

test('Test custom format\n', t => {
	const results = clean(dateObj.date1, 'MMMM Do, YYYY');

	t.equal(results, 'December 11th, 2009', 'Sould format a single string date with a custom format');
	t.end();
});

test('Test Array Clean with defaults\n', t => {
	const results = cleanArray([new Date('12/11/09'), '2010/7/24']);

	t.equal(results[0], '12-11-2009', 'Formatted array date 1');
	t.equal(results[1], '07-24-2010', 'Formatted array date 2');
	t.end();
});

test('Test deepClean Object\n', t => {
	const results = deepClean(dateObj, ['date1', 'date2', 'testerDate']);

	t.equal(results.date1, '12-11-2009', 'Formatted the single string');
	t.equal(results.dateArrOfObjs[0].date2, '07-24-2010', 'Formatted the object in an array');
	t.equal(results.dateObj.dateObj2.testerDate, '10-05-2016', 'Formatted the object within an object date');
	t.end();
});

test('Test deepClean with custom format', t => {
	const results = deepClean(dateObj, ['date1', 'date2', 'testerDate'], 'MMMM Do, YYYY');

	t.equal(results.date1, 'December 11th, 2009', 'Correct date format returned');
	t.equal(results.dateArrOfObjs[0].date2, 'July 24th, 2010', 'Date array returned correct date format');
	t.equal(results.dateObj.dateObj2.testerDate, 'October 5th, 2016', 'Deep prop formatted correctly');
	t.end();
});

test('Test setFormat', t => {
	setFormat('MM.DD.YY');
	const results = clean(dateObj.date1);

	t.equal(results, '12.11.09', 'Used the persistant format');
	t.end();
});
