var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({});

module.exports = function () {
    return {
        files: [
            { pattern: 'src/**/*.ts', load: false }
        ],
        tests: [
            { pattern: 'test/**/*.ts', load: false }
        ],
        postprocessor: webpackPostprocessor,
        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    };
};