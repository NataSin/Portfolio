var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rimraf = require('rimraf'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    csslint = require('gulp-csslint'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    ejs = require('gulp-ejs'),
    cache = require('gulp-cache'),
    connect = require('gulp-connect');

var path = {
    build: {
        html: 'build/',
        js  : 'build/js/',
        css : 'build/css/',
        lib : 'build/lib/',
        img : 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html : 'html/**/*.ejs',
        js   : 'js/**/*.js',
        style: ['scss/*.scss', 'scss/**/*.scss'],
        lib  : 'lib/**/*.*',
        img  : 'img/**/*.*',
        fonts: 'fonts/**/*.*'
    },
    watch: {
        html : 'html/**/*.ejs',
        js   : 'js/**/*.js',
        style: ['scss/*.scss', 'scss/**/*.scss'],
        img  : 'img/**/*.*'
    },
    clean: './build'
};


gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('build', [
    'ejs:build',
    'js:build',
    'lib:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('ejs:build',function(){
    return gulp.src(path.src.html)
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(ejs({}, {ext:'.html'}))
        .pipe(gulp.dest(path.build.html))
        .pipe(connect.reload());
});

gulp.task('image:build',function(){
    return gulp.src(path.src.img)
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        //.pipe(imagemin({
        //    progressive: true,
        //    svgoPlugins: [{removeViewBox: false}],
        //    use: [pngquant()],
        //    interlaced: true
        //}))
        .pipe(gulp.dest(path.build.img));
        //.pipe(reload({stream:true}))
});

gulp.task('js:build',function(){
    return gulp.src(path.src.js)
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        //.pipe(imagemin({
        //    progressive: true,
        //    svgoPlugins: [{removeViewBox: false}],
        //    use: [pngquant()],
        //    interlaced: true
        //}))
        .pipe(gulp.dest(path.build.js));
    //gulp.src(path.src.js)
    //    //.pipe(plumber({
    //    //    handleError: function (err) {
    //    //        console.log(err);
    //    //        this.emit('end');
    //    //    }
    //    //}))
    //    //.pipe(concat('main.js'))
    //    //.pipe(jshint())
    //    //.pipe(jshint.reporter('default'))
    //    .pipe(browserify())
    //    .pipe(gulp.dest(path.build.js))
    //    //.pipe(rename({
    //    //    suffix: '.min'
    //    //}))
    //    .pipe(uglify())
    //    .pipe(gulp.dest(path.build.js))
    //    //.pipe(reload({stream:true}))
});

gulp.task('fonts:build', function(){
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('style:build',function(){
    return gulp.src(path.src.style)
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(connect.reload());
});

gulp.task('lib:build',function(){
    gulp.src(path.src.lib)
        .pipe(gulp.dest(path.build.lib));
});

gulp.task('watch', function(){
    connect.server({
        livereload: true,
		port: 3000,
        root: "./build"
    });
    
    gulp.watch(path.watch.html, ['ejs:build']);
    gulp.watch(path.watch.style, ['style:build']);
    gulp.watch(path.watch.js, ['js:build']);
});

gulp.task('default', ['build', 'watch']);

