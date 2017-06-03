/* @if NODE_ENV='development' */
// browser

var key = require('keymaster');
key('ctrl + b', function () {

});

/* @endif */


/* @if NODE_ENV!='development' */
// cordova

document.addEventListener('backbutton', function () {

}, false);

/* @endif */


module.exports = true;