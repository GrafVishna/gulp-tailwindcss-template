/*
  Usage:
  1. npm install //To install all dev dependencies of package
  2. npm run dev //To start development and server for live preview
  3. npm run prod //To generate minifed files for live server
*/

import gulp from 'gulp'
const { series, parallel, watch } = gulp

import options, { gulpPaths } from "./config.js"
import browserSync from "browser-sync"
import logSymbols from "log-symbols"
import { devStyles, prodStyles } from "./config/tasks/styles.js"
import { devClean, prodClean } from "./config/tasks/clean.js"
import { devScripts, prodScripts } from "./config/tasks/scripts.js"
import { devImages, prodImages, prodImagesNoWebp } from "./config/tasks/images.js"
import { devFonts, prodFonts, fonstStyle } from "./config/tasks/fonts.js"
import { devThirdParty, prodThirdParty } from "./config/tasks/thirdParty.js"
import { devHTML, prodHTML, prodHTMLNoWebp } from "./config/tasks/html.js"
// import { templateLogger } from "./src/js/functions/functions.js"

//Load Previews on Browser on dev
function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: gulpPaths.dist.base,
    },
    port: options.port || 4000,
  })
  done()
}

function watchFiles() {
  watch(gulpPaths.src.base, series(devHTML, devStyles, previewReload))
  watch([options.config.tailwindjs, `${gulpPaths.src.scss}**/*.*`], series(devStyles, previewReload))
  watch(`${gulpPaths.src.js}**/*.js`, series(devScripts, previewReload))
  watch(`${gulpPaths.src.images}`, series(devImages, previewReload))
  watch(`${gulpPaths.src.fonts}**/*`, series(devFonts, previewReload))
  watch(gulpPaths.src.thirdParty, series(devThirdParty, previewReload)
  )
  console.log("\n\t" + logSymbols.info, "Watching for Changes..\n")
}

function previewReload(done) {
  console.log("\n\t" + logSymbols.info, "Reloading Browser Preview.\n")
  browserSync.reload()
  done()
}


function buildFinish(done) {
  console.log(`Production build is complete. Files are located at ${gulpPaths.build.base}\n`)
  done()
}

export const dev = series(
  devClean,
  parallel(fonstStyle, devFonts, devStyles, devScripts, devImages, devThirdParty, devHTML),
  livePreview,
  watchFiles
)


export const prod = series(
  prodClean,
  prodImages,
  parallel(
    prodStyles,
    prodScripts,
    prodHTML,
    prodFonts,
    prodThirdParty
  ),
  buildFinish
)
export const nowebp = series(
  prodClean,
  prodImagesNoWebp,
  parallel(
    prodStyles,
    prodScripts,
    prodHTMLNoWebp,
    prodFonts,
    prodThirdParty
  ),
  buildFinish
)
