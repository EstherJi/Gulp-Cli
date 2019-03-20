const gulp = require('gulp'),
      rev = require('gulp-rev'),
      sass = require('gulp-sass'),
      csso = require('gulp-csso'),
      sourcemaps = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer'),
      replace = require('gulp-replace'),
      revCollector = require('gulp-rev-collector'),
      through = require('through2'),
      config = require('../config'),
      themeConfig = require('../theme-config');


const { path: { SOURCE_SCSS, SOURCE_CSS, DIST_CSS, revPath },
        replace: { css: REPLACE_CSS } } = config;

const REPLACE_THEME = themeConfig.hasOwnProperty(global.theme) && themeConfig[global.theme].css ? REPLACE_CSS.concat(themeConfig[global.theme].css) : REPLACE_CSS;
const REPLACE_TOTAL = global.env && config.replace.hasOwnProperty(`css_${global.env}`) ?
                        REPLACE_THEME.concat(config.replace[`css_${global.env}`]) :
                        REPLACE_THEME;

const THEME_PATH = '@import "theme/module_' + global.theme + '.scss";';

const fnScss = function(file) {
    const target = (typeof file === 'string' && file.indexOf('module_') < 0) ?
                    file :
                    SOURCE_SCSS + '**/*.scss';

    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            let stream = gulp.src(target, { base: SOURCE_SCSS })
                            .pipe(through.obj(function(file, encode, done){
                                const filePath = file.path;
                                if(filePath.indexOf('module_') < 0 && filePath.indexOf('reset') < 0){
                                    let result = file.contents.toString();
                                    result = THEME_PATH + '\n' + result;
                                    REPLACE_THEME.forEach((item, index) => {
                                        result = result.replace(item[0], item[1]);
                                    });
                                    file.contents = new Buffer.from(result);
                                }
                                this.push(file);
                                return done();
                            }))
                            .pipe(sourcemaps.init())
                            .pipe(sass().on('error', (e) => {
                                console.log('====Sass Error====');
                                return reject(e) && this.end();
                            }))
                            .pipe(autoprefixer('last 2 version'))
                            .pipe(sourcemaps.write())
                            .pipe(gulp.dest(SOURCE_CSS))
                            .on('end', resolve);

            if (global.browserSync) {
                stream = stream.pipe(global.browserSync.stream());
            }

            return stream;
        }, 500);
    }).catch((e) => {
        return console.error(e.messageFormatted);
    });
}




gulp.task('scss', fnScss);




gulp.task('cssMinify', function() {
    let stream = gulp.src([SOURCE_CSS + '**/*.css', '!' + SOURCE_CSS + '**/module_*.css']);

    REPLACE_TOTAL.forEach((item, index) => {
        stream = stream.pipe(replace(item[0], item[1]));
    })
    
    return stream.pipe(csso())
            .pipe(rev())
            .pipe(gulp.dest(DIST_CSS))
            .pipe(rev.manifest('rev-css.json'))
            .pipe(gulp.dest(revPath));
})




gulp.task('cssRev', function() {
    return gulp.src([revPath + '*.json', DIST_CSS + '**/*.css'])
            .pipe(revCollector())
            .pipe(gulp.dest(DIST_CSS));
})



global.fnScss = fnScss;