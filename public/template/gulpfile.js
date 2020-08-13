const gulp = require('gulp');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');

//SCSS compilation

function styleMain() {
    return gulp.src('./src/scss/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./src/css'))
    .pipe(gulp.dest('./src/css/'))
    .pipe(browserSync.stream());
}
function styleDemo() {
    return gulp.src('./demo/assets/scss/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./demo/assets/css'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        },
        startPath: 'demo/index.html',
        ghostMode: false,
        notify: false
    });
    styleMain();
    styleDemo();
    gulp.watch('./src/scss/**/*.scss', styleMain);
    gulp.watch('./demo/assets/scss/**/*.scss', styleDemo);
    gulp.watch('./demo/**/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);

}

function cleanVendors(){
    return del('./src/vendors/**/*');
}

function buildVendors() {
    var addon1 = gulp.src('./node_modules/bootstrap/**/*')
                     .pipe(gulp.dest('./src/vendors/bootstrap'));
    var addon2 = gulp.src('./node_modules/feather-icons/dist/**/*')
                     .pipe(gulp.dest('./src/vendors/feather-icons'));
    var addon3 = gulp.src('./node_modules/jquery/dist/**/*')
                     .pipe(gulp.dest('./src/vendors/jquery'));
    var addon4 = gulp.src('./node_modules/popper.js/dist/umd/**/*')
                     .pipe(gulp.dest('./src/vendors/popper.js'));

    return (addon1, addon2, addon3, addon4);
}

exports.style = gulp.parallel(styleMain, styleDemo);
exports.watch = watch;
exports.buildVendors = gulp.series(cleanVendors, buildVendors);