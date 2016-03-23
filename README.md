cleanDateWithMoment
===============================

A simple object of methods that allow you to clean a single date or an object filled with dates. 

Uses recursive looping in order to hit any prop you need, even if theres more objects inside of your current object.


##Dependency: 
###Moment.js -Used to format dates

## Object
The object acts as a simple holder for the list of function methods that can be called.
```js
var cleanDateWithMoment = {};
```

## Functions

### cleanOneAttribute

This function can clean single dates if needed or there is no desire to involve moment as a dependency for the project

##### Usage
This function simply takes two strings a date and a format then formats the string.

>Example:

```js
	cleanDateWithMoment.cleanOneAttribute('2015-03-05 00:00:00.0', 'MM/DD/YY');
```

##### Arguments
- `date` - string that contains a unformatted date
- `format` - the way you wish the date to be formatted (see moments docs for which formats are accepted)

### deepClean

This function is able to recursively iterate through an array of objects that would likely contain more arrays with objects inside of it that require date formatting.

##### Usage
The function takes an array of objects, a key to search for, and a format to follow.

>Example:

```js
	cleanDateWithMoment.deepClean([{text: 'Tesing prop', testdate: '2015-03-05 00:00:00.0'}], 'testdate', 'MM/DD/YY');
```

>##### Steps
The function starts up a for loop on the array which will loop through your objects searching for the key entered and then formats within this for loop we also want to start looping the object with a for in loop.

>Example:
```js
	for (i; i < len; i++) {
				for (prop in items[i]) { }
			}
```
As we loop through our object we need to validate our values and make sure we iterate through everything even if a date is found on our first layer.

>Example:
```js
	if (items[i].hasOwnProperty(prop) && prop === key) {
		items[i][prop] = moment(items[i][prop]).format(format);
	} else if (items[i].hasOwnProperty(prop) && typeof items[i][prop] === 'object'){
		items[i][prop] = this.deepClean(items[i][prop], key, format);
	}
```
Once this is all said and done the utility will then return the same array back to the user however it will now contain the formatted dates instead.

##### Arguments
- `date` - string that contains a unformatted date
- `key` - string that contains a object property name to search for
- `format` - the way you wish the date to be formatted (see moments docs for which formats are accepted)