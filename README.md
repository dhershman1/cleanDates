# Date Prettify
A simple recursive date formatter that uses moment.

## Changelog

You can check out the changelog here: https://github.com/dhershman1/dateprettify/blob/master/changelog.md

## How To

```
npm i -S dateprettify
```

Using Standard Module System
```js
import {clean, cleanArray, deepClean} from 'dateprettify';
```

Using Common JS
```js
var datePrettify = require('dateprettify');
```

Using in the browser
```
<script src="path/to/dateprettify/dist/dateprettify.umd.js"></scipts>
dateprettify.method();
```

## Usage

```js
import {clean, cleanArray, deepClean} from 'dateprettify';
date = clean('12/11/09', 'MMM Do, YYYY');
// date output: Dec 11th, 2009
date = cleanArray(['12/11/09'], 'MMM Do, YYYY');
// date output: ['Dec 11th, 2009']
date = deepClean({item: {date: '12/11/09'}}, 'MMM Do, YYYY');
// date output: {item: {date: 'Dec 11th, 2009'}}
```

## Methods

### setFormat(format)

Set a persistant format you'd like to use to the module **NOTE: The Format parameter on each method will overrule the persistant format set**

#### Argumments

- `format` - `String`: The moment style format you want applied

#### Usage

```js
import {setFormat, clean} from 'dateprettify';
setFormat('MMM Do, YYYY');
const date = clean('12/11/09');
// date output: Dec 11th, 2009
// However using the format param of a method will override the persistant format
const cleanDate = clean('12/11/09', 'MM.DD.YY');
// Output: 12.11.09
```

### clean(item, format)
Clean single date

#### Argumments

- `item` - `String|Date Object`: the date you want cleaned
- `format` - `String`: The moment style format you want applied `Optional`

#### Usage

```js
import {clean} from 'dateprettify'
var cleanDate = clean('2010/7/24');
// Output: 07-24-2010
```

### cleanArray(array, format)
Clean an array of dates

#### Argumments

- `array` - `Array`: An array of date strings or objects
- `format` - `String`: The moment style format you want applied `Optional`

#### Usage

```js
import {setFormat, cleanArray} from 'dateprettify';
setFormat('MM.DD.YY');
const cleanDate = cleanArray([new Date('12/31/2016'), '1/30/2017']);
// Output: ['12.31.16', '1.30.17']
```

### deepClean(items, keys, format)
Recursively clean an object handles single dates, arrays of dates, and more date objects inside your main object

#### Argumments

- `items` - `Object`: Your object to search through
- `keys` - `Array`: Array of strings with key names you want `deepClean` to look for
- `format` - `String`: The moment style format you want applied `Optional`

#### Usage

```js
import {deepClean} from 'datePrettify';
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
