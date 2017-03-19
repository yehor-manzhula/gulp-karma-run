const eventStream = require('event-stream');
const path = require('path');

module.exports = (karma, config = {}) => {
    const files = [];

    return eventStream.through((file) => files.push(file.path),
        function() {
            this.pause();

            config = Object.assign({
                files,
                configFile: path.resolve(`${process.cwd()}/karma.conf.js`),
                singleRun: true
            }, config);

            karma.Server.start(config, (code) => {
                this.resume();
                this.emit(code ? 'error' : 'end', code)
            });
        });
};
