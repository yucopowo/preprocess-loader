require('./event');

/* @if NODE_ENV='development' */
console.log('NODE_ENV=','/* @echo NODE_ENV */');
/* @endif */


/* @if NODE_ENV!='development' */
console.log('NODE_ENV!=','/* @echo NODE_ENV */');
/* @endif */


