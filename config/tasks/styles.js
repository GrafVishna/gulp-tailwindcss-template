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
import options from "../../config.js"
const { gulpPaths, config } = options


export function devStyles() {

   return src(`${gulpPaths.src.scss}style.scss`)
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss([tailwindcss(config.tailwindjs), autoprefixer()]))
      .pipe(concat({ path: "style.css" }))
      .pipe(dest(gulpPaths.dist.css))
}

export function prodStyles() {
   return src(`${gulpPaths.src.scss}style.scss`)
      .pipe(sass().on("error", sass.logError))
      .pipe(
         postcss([
            tailwindcss(config.tailwindjs),
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
      .pipe(dest(gulpPaths.build.css))
}
