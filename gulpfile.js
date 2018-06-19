const gulp = require('gulp');
const sass = require('gulp-sass');

//compile sass
gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('watch', function(){
    gulp.watch('src/sass/*.scss', ['sass']);
});