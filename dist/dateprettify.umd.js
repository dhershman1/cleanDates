!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("moment")):"function"==typeof define&&define.amd?define(["exports","moment"],t):t(e.dateprettify=e.dateprettify||{},e.moment)}(this,function(e,t){"use strict";t=t&&"default"in t?t.default:t;var n="MM-DD-YYYY",r=function(e){return JSON.parse(JSON.stringify(e))},o=function(e,r){var o=r||n,f="object"!=typeof e?new Date(e):e;return t(f).format(o)},f=function(e,t,n){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1!==t.indexOf(r)?e[r]=o(e[r],n):"object"==typeof e[r]&&f(e[r],t,n);return e};e.setFormat=function(e){n=e},e.clean=o,e.cleanArray=function(e,t){return e.map(function(e){return o(e,t)})},e.deepClean=function(e,t,n){var o=r(e);return f(o,t,n)},Object.defineProperty(e,"__esModule",{value:!0})});