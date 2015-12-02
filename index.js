var eventStream = require('event-stream');
var karma = require('karma');
var _ = require('lodash');

module.exports = run;

function run(config) {
    var stream = eventStream.through(collectFiles, startKarma);

    return stream;

    function collectFiles(file) {
        collectFiles.files = collectFiles.files || [];
        collectFiles.files.push(file.path);
    }

    function startKarma() {
        this.pause();

        config = _.merge({
            files     : collectFiles.files,
            configFile: 'karma.conf.js',
            singleRun : true
        }, config);

        karma.Server.start(config, function (code) {
            var method = 'end';

            if (code) {
                method = 'error';
            }

            stream.emit(method, code);
        });
    }
}
