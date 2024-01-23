import gulp from 'gulp'
const { src, dest } = gulp
import { gulpPaths } from "../../config.js"
import fonter from 'gulp-fonter-fix'
import ttf2woff2 from 'gulp-ttf2woff2'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'

export const ttfToWoffDev = () => {
   // Looking for fonts .ttf fonts
   return src(`${gulpPaths.src.fonts}*.ttf`, {})
      .pipe(plumber(
         notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
         }))
      )
      // Convert в .woff
      .pipe(fonter({
         formats: ['woff']
      }))
      // Unload to a folder with a result
      .pipe(dest(gulpPaths.dist.fonts))
      // Looking for fonts .ttf fonts
      .pipe(src(`${gulpPaths.src.fonts}*.ttf`))
      // Convert in .woff2
      .pipe(ttf2woff2())
      // Unload to a folder with a result
      .pipe(dest(gulpPaths.dist.fonts))
      // Looking for fonts .woff and woff2 fonts
      .pipe(src(`${gulpPaths.src.fonts}*.{woff,woff2}`))
      // Unload to a folder with a result
      .pipe(dest(gulpPaths.dist.fonts))
}