const gulp = require('gulp')

function tarefasCSS(cb) {
    
    return gulp.src('./jquery/**/*.css')
        .pipe(gulp.dest('./dist'))
}

exports.styles = tarefasCSS()