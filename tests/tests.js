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

test('Test new formatter', t => {
	let results = datePrettify({format: 'DDD MMM Dz, YYYY'}).runFormat(new Date());

	console.log(results);
	t.ok(results);
	t.end();
});

/*
test('Test single Clean with defaults\n', t => {
	let results = datePrettify().clean(dateObj.date1);

	t.equal(results, '12-11-2009', 'Sould format a single string date with a default format');
	t.end();
});

test('Test custom format\n', t => {
	let results = datePrettify('MMMM Do, YYYY').clean(dateObj.date1);

	t.equal(results, 'December 11th, 2009', 'Sould format a single string date with a custom format');
	t.end();
});

test('Test Array Clean with defaults\n', t => {
	let results = datePrettify().cleanArray([new Date('12/11/09'), '2010/7/24']);

	t.equal(results[0], '12-11-2009', 'Formatted array date 1');
	t.equal(results[1], '07-24-2010', 'Formatted array date 2');
	t.end();
});

test('Test deepClean Object\n', t => {
	t.plan(3);
	let results = datePrettify().deepClean(dateObj, ['date1', 'date2', 'testerDate']);

	t.equal(results.date1, '12-11-2009', 'Formatted the single string');
	t.equal(results.dateArrOfObjs[0].date2, '07-24-2010', 'Formatted the object in an array');
	t.equal(results.dateObj.dateObj2.testerDate, '10-05-2016', 'Formatted the object within an object date');
});
*/
