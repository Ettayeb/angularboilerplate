var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var cssnano = require('gulp-cssnano')
var connect = require('gulp-connect')

gulp.task('vendor', function () {
    return gulp.src(['app/libs/**/*.min.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('maps/'))
        .pipe(gulp.dest('dst/js'))
})

gulp.task('app', function () {
    return gulp.src(
        [
            'app/js/app.js',
            'app/js/**/*.js'
        ]
        )
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('maps/'))
        .pipe(gulp.dest('dst/js'))
})

gulp.task("css", function () {
    return gulp.src(['app/libs/**/*.min.css', 'app/css/**/*.css'])
        .pipe(sourcemaps.init())
        .pipe(concat('style.min.css'))
        .pipe(cssnano())
        .pipe(sourcemaps.write('maps/'))
        .pipe(gulp.dest('dst/css'))
})

gulp.task('html', function () {
    gulp.src(['./app/index.html', './app/views/**/*.*'], {
            base: './app'
        })
        .pipe(gulp.dest('dst'))
})

// DEV tasks

gulp.task('vendor-dev', function () {
    return gulp.src(['app/libs/**/*.min.js'])
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest('dst/js'))
})
gulp.task('app-dev', function () {
    return gulp.src(
        [
            'app/js/app.js',
            'app/js/**/*.js'
        ]
        )
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dst/js'))
})

gulp.task("css-dev", function () {
    return gulp.src(['app/libs/**/*.min.css', 'app/css/**/*.css'])
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dst/css'))
})

gulp.task('html-dev', function () {
    gulp.src(['./app/index.html', './app/views/**/*.*'], {
            base: './app'
        })
        .pipe(gulp.dest('dst'))
})

// =====

gulp.task('build-dev', ['vendor-dev', 'app-dev', 'css-dev', 'html-dev'])
gulp.task('build-prod', ['vendor', 'app', 'css', 'html'])
gulp.task('watch', function () {
    gulp.watch(['app/**/*.js', 'app/**/*.html', 'app/**/*.css'], ['build-dev'])
})
gulp.task('webserver', function () {
    connect.server({
        root: 'dst',
        livereload: true
    })
})


gulp.task('dev', ['build-dev', 'webserver', 'watch'])
