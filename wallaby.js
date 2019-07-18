module.exports = function () {
    return {
        files: [
            'sinon/lib/sinon.js',
            'tsconfig.json',
            'src/**/*.ts'
        ],
        tests: [
            'test/**/*.ts'
        ],
        debug: true,
        env: {
            type: 'node',
            runner: 'node'
        },
        testFramework: 'jest'
    };
};