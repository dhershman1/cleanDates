A simple recursive date formatter that uses moment.

## How To

```
npm i -S dateprettify
```

```js
const datePrettify = require('dateprettify');
```

## Usage
#### Format single date
```js
const datePrettify = require('dateprettify');
let date = datePrettify(new Date('12/10/2016'), 'MMM Do, YYYY');
// date output: Dec 10th, 2016

// You can also just send a string the said string is created into a new date object by datePrettify
// And then formatted as desired
let date = datePrettify('12/10/2016', 'MMM Do, YYYY');
// date output: Dec 10th, 2016
```

#### Format array of dates
```js
const datePrettify = require('dateprettify');
let dateArr = [new Date('12/31/2016'), '1/30/2017'];
let newDateArr = datePrettify(dateArr, 'MM.DD.YY');
// newDateArr output: ['12.31.16', '1.30.17']
```

#### Format objects recursively
In order to format an object, you need to also send an array of keys you'd like datePrettify to look for.
```js
const datePrettify = require('dateprettify');
let dateObj = {
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
let newDateObj = datePrettify(dateObj, 'MM-DD-YYYY', ['date1', 'date2', 'testerDate']);
// newDateObj would output
/*
{
	date1: '12-11-2009',
	dateArrOfObjs: [{
		date2: '07-24-2010'
		}],
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
