/**
 * @overview Uses moment to clean up dates
 * @author Dustin Hershman
 * @version 1.0.0
 */

var cleanDateWithMoment = {
    /**
     * cleans a single date string sent to it
     * @method   cleanOneAttribute
     * @memberOf cleanDate
     * @param    {string}          date   the date string to be formatted
     * @param    {string}          format the format the date should be in
     * @return   {string}                 returns the fixed date
     */
    cleanOneAttribute: function(date, format) {
        format = format || 'MMM DD, YYYY';
        return moment(date).format(format);
    },
    /**
     * Recursively crawls through an array of objects that could have more arrays of objects containing dates and fixes them.
     * This is a Synchronous function
     * @method   deepClean
     * @memberOf cleanDate
     * @param    {array|object}         items  array of objects to be looped through
     * @param    {array}         attr    an array of keys to look for in order to fix their date
     * @param    {string}         format the format the date should be in
     * @return   {array}                returns the same array back with the clean dates placed
     */
    deepClean: function(items, attr, format) {
        format = format || 'MMM DD, YYYY';
        var key;
        for (key in items) {
            if (items.hasOwnProperty(key) && $.inArray(key, attr) > -1) {
                items[key] = moment(items[key]).format(format);
            } else if (typeof items[key] === 'object') {
                items[key] = this.deepClean(items[key], attr, format);
            }
        }
        return items;
    }
}