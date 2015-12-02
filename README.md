# gulp-karma-run
gulp karma plugin without shit and deprecated calls

var config = {
    configFile: path.karma,
    singleRun : true
};

/**
 * Run test once and exit
 */
gulp.task('test:frontend', function (done) {
    gulp.src('./test/**/**.spec.js').pipe(gulpKarmaRun(config))
            .on('end', done)
            .on('error', done);
});

gulp.task('test:frontend', function (done) {
    return gulp.src('./test/**/**.spec.js').pipe(gulpKarmaRun(config));
});