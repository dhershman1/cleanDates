A simple recursive date formatter that uses moment.

## How To

```
npm i -S dateprettify
```

```js
var datePrettify = require('dateprettify');
```

##Usage
```js
var datePrettify = require('dateprettify');
var date = datePrettify.singleClean('09-12-04', 'MMM DD, YYY');
// date would output Sep 12, 2004
```

##Methods

###singleClean
Cleans a single string value sent to it to the format of choosing (just here for optional cases really)
Example usage above

###deepClean
Recursively loops through a object or array until the end and corrects all of the data properties you specify to the desired format.

####Usage
```js
var datePrettify = require('dateprettify');
var dateObj = {
	date1: '12/11/09',
	dateArrOfObjs: [{
		date2: '24/07/10'
		}],
	dateObj: {
		dateinObj1: '04/19/14',
		dateinObj2: '09/18/12'.
		dateObj2: {
			testerDate: '14/05/10'
		}
	}
};
var newDateObj = datePrettify(dateObj, ['date1', 'date2', 'dateinObj1', 'dateinObj2', 'testerdate'], 'MM-DD-YYYY');
// newDateObj would output
/*
{
	date1: '12-11-2009',
	dateArrOfObjs: [{
		date2: '07-24-2010'
		}],
	dateObj: {
		dateinObj1: '04-19-2014',
		dateinObj2: '09-18-2012'.
		dateObj2: {
			testerDate: '05-14-2010'
		}
	}
}
 */ 
```
