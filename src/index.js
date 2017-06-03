var preprocess = require('preprocess');
var loaderUtils = require("loader-utils");
var util = require('./util');

module.exports = function(source) {

    this.cacheable && this.cacheable();

    var query = loaderUtils.getOptions(this) || {};

    var content = preprocess.preprocess(source,
        util.preprocessContext(query.context || {}),
        util.preprocessOptions(query.options || {}, this.resourcePath)
    );

    return content;
};

