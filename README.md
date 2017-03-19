# gulp-karma-run

Gulp karma plugin without shit and deprecated calls


### Usage
```
const karmaRun = require('gulp-karma-run');

/**
 * Simple usage
 */
gulp.task('test:frontend', () => gulp.src('./test/**/**.spec.js').pipe(karmaRun()));

/**
 * Override config
 * and custom handlers
 */
gulp.task('test:frontend', (done) => {
    gulp.src('./test/**/**.spec.js')
        .pipe(karmaRun({
            configFile: './karma.conf.js', // default is process.cwd()/karma.conf.js
            singleRun: true // default is true
        }))
        .on('end', () => console.log('Karma terminated successfully'))
        .on('error', (errorCode) => console.log(`Karma terminated with error code ${errorCode}`));
});
```