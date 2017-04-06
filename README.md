# Date Prettify
A simple recursive date formatter that uses moment.

#### Changelog
> **v1.1.0**
> - Removed ES6 based code since this is mainly a front end facing module
> - Cleaned up usage should be less confusing now
> - Code clean up
> - Tests should fit accordingly

## Parameters

- `format` - `String`: The date format you'd like to use. `Default: MM-DD-YYYY`

## How To

```
npm i -S dateprettify
```

```js
var datePrettify = require('dateprettify');
```

## Usage
```js
var datePrettify = require('dateprettify');
var date = datePrettify('MMM Do, YYYY').clean('12/11/09');
// date output: Dec 11th, 2016

```

## Methods

### clean(item)
Clean single date

#### Parameters

- `item` - `String|Date Object`: the date you want cleaned

#### Usage

```js
var datePrettify = require('dateprettify')();
var cleanDate = datePrettify.clean('2010/7/24');
// Output: 07-24-2010
```

### cleanArray(array)
Clean an array of dates

#### Parameters

- `array` - `Array`: An array of date strings or objects

#### Usage

```js
var datePrettify = require('dateprettify')('MM.DD.YY');
var newDateArr = datePrettify.cleanArray([new Date('12/31/2016'), '1/30/2017']);
// OR
var datePrettify = require('dateprettify')
var newDateArr = datePrettify('MM.DD.YY').cleanArray([new Date('12/31/2016'), '1/30/2017']);

// newDateArr output: ['12.31.16', '1.30.17']
```

### deepClean(items, keys)
Recursively clean an object handles single dates, arrays of dates, and more date objects inside your main object

#### Parameters

- `items` - `Object`: Your object to search through
- `keys` - `Array`: Array of strings with key names you want `deepClean` to look for

#### Usage

```js
var datePrettify = require('dateprettify');
var dateObj = {
	date1: '12/11/09',
	dateArrOfObjs: [{
		date2: '2010/7/24'
	}],
	dateArr: ['01/15/16', '12/25/14'],
	dateObj: {
		dateObj2: {
			testerDate: '10/05/2016'
		}
	}
};
var cleanObj = datePrettify().deepClean(dateObj, ['date1', 'date2', 'testerDate', 'dateArr']);
// cleanObj would output
/*
{
	date1: '12-11-2009',
	dateArrOfObjs: [{
		date2: '07-24-2010'
		}],
	dateArr: [01-15-2016, 12-25-2014],
	dateObj: {
		dateObj2: {
			testerDate: '10-05-2016'
		}
	}
}
 */
```
## Running Tests
To Run the tests go to the dateprettify directory and run `npm i`

After the install finishes run `npm test`
