const test = require('tape');
const datePrettify = require('../index.js');

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
	t.plan(1);
	let results = datePrettify(dateObj.date1);

	t.equal(results, '12-11-2009', 'Sould format a single string date with a default format');
});

test('Test single Clean with custom format\n', t => {
	t.plan(1);
	let results = datePrettify(dateObj.date1, 'MMMM Do, YYYY');

	t.equal(results, 'December 11th, 2009', 'Sould format a single string date with a custom format');
});

test('Test Array Clean with defaults\n', t => {
	t.plan(2);
	let results = datePrettify([new Date('12/11/09'), '2010/7/24']);

	t.equal(results[0], '12-11-2009', 'Formatted array date 1');
	t.equal(results[1], '07-24-2010', 'Formatted array date 2');
});

test('Test deepClean Object\n', t => {
	t.plan(3);
	let results = datePrettify(dateObj, 'MM-DD-YYYY', ['date1', 'date2', 'testerDate']);

	t.equal(results.date1, '12-11-2009', 'Formatted the single string');
	t.equal(results.dateArrOfObjs[0].date2, '07-24-2010', 'Formatted the object in an array');
	t.equal(results.dateObj.dateObj2.testerDate, '10-05-2016', 'Formatted the object within an object date');
});
