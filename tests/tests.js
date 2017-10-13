const prettyDate = require('../src/index.js');
const test = require('tape');

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

const { clean, cleanArray, deepClean } = prettyDate();

test('Test single Clean with defaults', t => {
	const results = clean(dateObj.date1);

	t.equal(results, '12-11-2009', 'Sould format a single string date with a default format');
	t.end();
});

test('Test custom format', t => {
	const results = clean(dateObj.date1, 'MMMM Do, YYYY');

	t.equal(results, 'December 11th, 2009', 'Sould format a single string date with a custom format');
	t.end();
});

test('Test Array Clean with defaults', t => {
	const results = cleanArray([new Date('12/11/09'), '2010/7/24']);

	t.equal(results[0], '12-11-2009', 'Formatted array date 1');
	t.equal(results[1], '07-24-2010', 'Formatted array date 2');
	t.end();
});

test('Test deepClean Object', t => {
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
