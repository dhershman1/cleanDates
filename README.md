# Date Prettify

A silly small date formatter with recursive abilities to format deep objects without mutating them

## Changelog

You can check out the changelog here: https://github.com/dhershman1/dateprettify/blob/master/changelog.md

## How To

```
npm i -S dateprettify
```

Using Standard Module System
```js
import prettyDate from 'dateprettify';

const {clean, cleanArray, deepClean} = prettyDate();
```

Using Common JS
```js
var prettyDate = require('dateprettify')();
prettyDate.method();
```

Using in the browser
```
<script src="path/to/dateprettify/dist/dateprettify.umd.js"></scipts>
dateprettify.method();
```

## Usage

**Important Formats now Follow date-fns formatting which can be seen here** https://date-fns.org/v1.29.0/docs/format

Importing dateprettify brings in an object which is then used either as a chain, or can be destructured

The main function now accepts a param that can be your desired format

```js
import prettyDate from 'dateprettify';

const {clean, cleanArray, deepClean} = prettyDate('MMM Do, YYYY');
// The default format if one is not passed in is MM-DD-YYYY

date = clean('12/11/09');
// date output: Dec 11th, 2009
date = cleanArray(['12/11/09']);
// date output: ['Dec 11th, 2009']
date = deepClean({item: {date: '12/11/09'}});
// date output: {item: {date: 'Dec 11th, 2009'}}

// An override format is also passible to each method
date = clean('12/11/09', 'MM D, YY');
// output: 12 11, 09

```

## Methods

### clean(date, oFormat)
Clean single date

#### Argumments

- `date` - `String|Date Object`: the date you want cleaned
- `oFormat` - `String`: This will override the format set by the factory function `Optional`

#### Usage

```js
import prettyDate from 'dateprettify';

const {clean} = prettyDate();

clean('07/24/2010');
// Output: 07-24-2010
```

### cleanArray(dateArr, oFormat)
Clean an array of dates

#### Argumments

- `dateArr` - `Array`: An array of date strings or objects
- `oFormat` - `String`: This will override the format set by the factory function `Optional`

#### Usage

```js
import prettyDate from 'dateprettify';

const { cleanArray } = prettyDate('MM.DD.YY');
const cleanDate = cleanArray([new Date('12/31/2016'), '1/30/2017']);
// Output: ['12.31.16', '1.30.17']
```

### deepClean(obj, keys, oFormat)
Recursively clean an object handles single dates, arrays of dates, and more date objects inside your main object

#### Argumments

- `obj` - `Object`: Your object to search through
- `keys` - `Array`: Array of strings with key names you want `deepClean` to look for
- `oFormat` - `String`: This will override the format set by the factory function `Optional`

#### Usage

```js
import prettyDate from 'dateprettify';

const { deepClean } = prettyDate();
dateObj = {
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
cleanObj = deepClean(dateObj, ['date1', 'date2', 'testerDate', 'dateArr']);
// Output:
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
