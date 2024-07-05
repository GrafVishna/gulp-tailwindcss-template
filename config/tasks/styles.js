import gulp from 'gulp'
const { src, dest } = gulp
import browserSync from "browser-sync"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import sortMediaQueries from "postcss-sort-media-queries"
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)
import sassGlob from 'gulp-sass-glob'
import postcss from "gulp-postcss"
import concat from "gulp-concat"
import cssnano from "cssnano"
import purgecss from "@fullhuman/postcss-purgecss"
import { gulpPaths, config, mainParams } from "../../config.js"
import { replaceAliasSCSS } from "./replacePaths.js"
import sourcemaps from 'gulp-sourcemaps'
import clone from 'gulp-clone'
import rename from 'gulp-rename'
import mergeStream from 'merge-stream'

function devStyles() {
   return src([`${gulpPaths.src.scss}style.scss`])
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss([tailwindcss(config.tailwindjs), autoprefixer(), cssnano()]))
      .pipe(concat({ path: "style.min.css" }))
      .pipe(replaceAliasSCSS())
      .pipe(sourcemaps.write('.'))
      .pipe(browserSync.stream())
      .pipe(dest(gulpPaths.dist.css))
}

function prodStyles() {
   const cssStream = src([`${gulpPaths.src.scss}style.scss`])
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss([
         mainParams.IS_TAILWIND && tailwindcss(config.tailwindjs),
         autoprefixer(),
         sortMediaQueries({ sort: 'desktop-first' })
      ].filter(Boolean)))
      .pipe(replaceAliasSCSS())

   const unminifiedStream = cssStream.pipe(clone())
      .pipe(concat({ path: "style.css" }))
      .pipe(sourcemaps.write('.'))
      .pipe(dest(gulpPaths.build.css))

   const minifiedStream = cssStream.pipe(clone())
      .pipe(postcss([cssnano()]))
      .pipe(rename({ suffix: '.min' }))
      .pipe(concat({ path: "style.min.css" }))
      .pipe(sourcemaps.write('.'))
      .pipe(dest(gulpPaths.build.css))

   return mergeStream(unminifiedStream, minifiedStream)
}

function purgeCSS() {
   return src(`${gulpPaths.build.css}style.css`)
      .pipe(postcss([
         purgecss({
            ...config.purgecss,
            defaultExtractor: (content) => {
               const v3Regex = /[(\([&*\])|\w)-:./]+(?<!:)/
               const broadMatches = content.match(v3Regex) || []
               const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
               return broadMatches.concat(innerMatches)
            },
         }),
      ]))
      .pipe(concat('style.css'))
      .pipe(dest(gulpPaths.build.css))
}

function minCSS() {
   return src(`${gulpPaths.build.css}style.css`)
      .pipe(postcss([cssnano()]))
      .pipe(concat('style.min.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(dest(gulpPaths.build.css))
}

export const styles = {
   dev: devStyles,
   prod: prodStyles,
   purge: purgeCSS,
   min: minCSS
}
