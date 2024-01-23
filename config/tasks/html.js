import gulp from 'gulp'
const { src, dest } = gulp
import webpHtmlNosvg from 'gulp-webp-html-nosvg'
import includePartials from 'gulp-file-include'
import { gulpPaths } from "../../config.js"

export function devHTML() {
   return src(`${gulpPaths.src.base}`)
      .pipe(includePartials())
      .pipe(dest(gulpPaths.dist.base))
}

export function prodHTML() {
   return gulp
      .src(gulpPaths.src.base)
      .pipe(includePartials())
      .pipe(webpHtmlNosvg())
      .pipe(gulp.dest(gulpPaths.build.base))
}

export function prodHTMLNoWebp() {
   return src(gulpPaths.src.base)
      .pipe(includePartials())
      .pipe(dest(gulpPaths.build.base))
}
