var gulp = require('gulp');
var beautify = require('gulp-beautify');
var eslint = require('gulp-eslint');

var open = require('open');

var js = ['**/*.js', '!node_modules/**/*.js'];

gulp.task('beautify', ['beautify:javascript']);

gulp.task('beautify:javascript', function() {
    gulp.src(js, {
            base: './'
        })
        .pipe(beautify({
            indentSize: 4,
            keepFunctionIndentation: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('test', ['test:eslint', 'test:qunit']);

gulp.task('test:eslint', function() {
    return gulp.src(js)
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test:qunit', function() {
    open('./tests/index.html');
});
