import gulp from 'gulp'
const { src, dest } = gulp
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)
import postcss from "gulp-postcss"
import concat from "gulp-concat"
import cssnano from "cssnano"
import purgecss from "gulp-purgecss"
import { gulpPaths, config, mainParams } from "../../config.js"
import { replaceAliasSCSS } from "./replaceHtml.js"


export function devStyles() {

   return src([`${gulpPaths.src.scss}style.scss`, `${gulpPaths.src.components}**/*.scss`])
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss([tailwindcss(config.tailwindjs), autoprefixer()]))
      .pipe(concat({ path: "style.css" }))
      .pipe(replaceAliasSCSS())
      .pipe(dest(gulpPaths.dist.css))
}

export function prodStyles() {
   return src([`${gulpPaths.src.scss}style.scss`, `${gulpPaths.src.components}**/*.scss`])
      .pipe(sass().on("error", sass.logError))
      .pipe(
         postcss([
            mainParams.IS_TAILWIND && tailwindcss(config.tailwindjs),
            autoprefixer(),
            cssnano(),
         ])
      )
      .pipe(
         purgecss({
            ...config.purgecss,
            defaultExtractor: (content) => {
               const v3Regex = /[(\([&*\])|\w)-:./]+(?<!:)/g
               const broadMatches = content.match(v3Regex) || []
               const innerMatches =
                  content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
               return broadMatches.concat(innerMatches)
            },
         })
      )
      .pipe(replaceAliasSCSS())
      .pipe(concat({ path: "style.css" }))
      .pipe(dest(gulpPaths.build.css))
}
