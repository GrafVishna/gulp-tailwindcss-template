import { src, dest } from 'gulp'
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)
import postcss from "gulp-postcss"
import concat from "gulp-concat"
import cssnano from "cssnano"
import { replaceAliasSCSS } from "./replaceHtml.js"
import purgecss from "gulp-purgecss"
import { config, gulpPaths, mainParams } from "../../config.js"

/**
 * Compiles stylesheets from SCSS to CSS
 *
 * @description
 * Compiles stylesheets from SCSS to CSS and applies TailwindCSS, autoprefixer,
 * and concatenates the resulting CSS to a single file.
 *
 * @returns {object}
 */
export function devStyles() {
   // Compile SCSS to CSS
   return src([`${gulpPaths.src.scss}style.scss`, `${gulpPaths.src.components}**/*.scss`])
      .pipe(sass().on("error", sass.logError))
      // Apply TailwindCSS, autoprefixer and concatenate to style.css
      .pipe(mainParams.IS_TAILWIND ? postcss([tailwindcss(config.tailwindjs), autoprefixer()]) : postcss([autoprefixer()]))
      .pipe(concat({ path: "style.css" }))
      .pipe(replaceAliasSCSS())
      .pipe(dest(gulpPaths.dist.css))
}


export function prodStyles() {
   return src([`${gulpPaths.src.scss}style.scss`, `${gulpPaths.src.components}**/*.scss`])
      .pipe(sass().on("error", sass.logError))

      .pipe(purgecss({ ...config.purgecss, }))
      .pipe(mainParams.IS_TAILWIND ? postcss([tailwindcss(config.tailwindjs), autoprefixer()]) : postcss([autoprefixer()]))
      .pipe(replaceAliasSCSS())
      .pipe(concat({ path: "style.css" }))
      .pipe(dest(gulpPaths.dist.css))
}

