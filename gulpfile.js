const Key = "html/new";
const gulp = require("gulp");
const del = require("del");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const conWebp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const svgtoico = require("svg-to-ico");
const terser = require("gulp-terser");
const htmlMin = require("gulp-htmlmin");
const ttf2woff = require("gulp-ttf2woff");
const { series, parallel, watch, src, dest } = require("gulp");

//  Sass

const css = () => {
  watch(Key + "/assets/sass/**/*.scss", css);
  return src(Key + "/assets/sass/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(""))
    .pipe(dest(Key + "/assets/css"));
};

exports.css = css;

// Js

const js = () => {
  // watch([Key + "/assets/js/**/*.js", Key + "/assets/sass/**/*.js", "!" + Key + "/assets/js/script.js"], js);
  return src([
    Key + "/assets/js/libs/*.js",
    Key + "/assets/js/*.js",
    Key + "/assets/sass/**/*.js",
    "!" + Key + "/assets/js/script.js",
  ])
    .pipe(sourcemaps.init())
    .pipe(concat("script.js"))
    .pipe(sourcemaps.write(""))
    .pipe(dest(Key + "/assets/js"));
};

exports.js = js;

//  Css min

const cssmin = () => {
  return src([Key + "/assets/css/libs/*.css", Key + "/assets/css/style.css"])
    .pipe(concat("style.css"))
    .pipe(cleanCSS())
    .pipe(dest(Key + "/build/assets/css"));
};

exports.cssmin = cssmin;

//  Html min

const htmlmin = () => {
  return src(Key + "/*.html")
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(dest(Key + "/build"));
};

exports.htmlmin = htmlmin;

// Img min

const imgmin = () => {
  return src(Key + "/assets/img/**/*.{jpg,png,svg}")
    .pipe(
      imagemin([
        imagemin.mozjpeg({ progressive: true }), //  !quality: 75
        imagemin.optipng({ optimizationLevel: 3 }), //  5
        imagemin.svgo(), //  {plugins: [{ removeViewBox: true }, { cleanupIDs: false }]}
      ])
    )
    .pipe(dest(Key + "/build/assets/img"));
};

exports.imgmin = imgmin;

//  WebP

const webp = () => {
  return src([
    Key + "/build/assets/img/**/*.{jpg,png}",
    "!" + Key + "/build/assets/img/icon/*.png",
  ])
    .pipe(conWebp({ quality: 90 }))
    .pipe(dest(Key + "/build/assets/img"));
};

exports.webp = webp;

// Sprite

const svg = () => {
  return src(Key + "/build/assets/img/**/*.svg")
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(dest(Key + "/build/assets/img"));
};

exports.svg = svg;

//  JS min

const jsmin = () => {
  return src(Key + "/assets/js/script.js")
    .pipe(terser())
    .pipe(dest(Key + "/build//assets/js"));
};

exports.jsmin = jsmin;

// TTF to WOFF

const woff = () => {
  return src([Key + "/assets/font/*.ttf"])
    .pipe(dest(Key + "/build/assets/font"))
    .pipe(ttf2woff())
    .pipe(dest(Key + "/build/assets/font"));
};

exports.woff = woff;

// Icon

const icon = () => {
  svgtoico({
    input_name: Key + "/build/assets/img/icon/favicon.svg",
    output_name: Key + "/build/assets/img/icon/favicon.ico",
    sizes: [16, 24, 32],
  });
  return src([
    Key + "/assets/img/icon/favicon.ico",
    Key + "/assets/img/icon/manifest.webmanifest",
  ]).pipe(dest(Key + "/build/assets/img/icon"));
};

exports.icon = icon;

// Exports

exports.run = series(
  () => {
    return del(Key + "/build");
  },
  parallel(css, js, imgmin, woff, htmlmin),
  parallel(cssmin, jsmin, webp, icon)
  // () => { return del([Key + "/build/assets/img/**/*.svg", "!" + Key + "/build/assets/img/img.svg"]) }
);
exports.default = series(css, js);
