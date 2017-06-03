var path = require('path');

function getExtension(filename) {
    var ext = path.extname(filename||'').split('.');
    return ext[ext.length - 1];
}

function preprocessContext(context) {
    if( !context.hasOwnProperty('NODE_ENV') ){
        context['NODE_ENV'] = process.env.NODE_ENV || 'development';
    }
    return context;
}

function preprocessOptions(options, resourcePath) {
    if( !options.type ){
        options.type = getExtension(resourcePath);
    }
    return options;
}

module.exports = {
    getExtension: getExtension,
    preprocessContext: preprocessContext,
    preprocessOptions: preprocessOptions
};