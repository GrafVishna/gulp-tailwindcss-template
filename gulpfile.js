/*
  Usage:
  1. yarn add //To install all dev dependencies of package
  2. yarn dev //To start development and server for live preview
  3. yarn build //To generate minifed files for live server
*/

import gulp from 'gulp'
const { series, parallel, watch } = gulp

import { gulpPaths, config } from "./config.js"
import browserSync from "browser-sync"
import { devStyles, prodStyles } from "./config/tasks/styles.js"
import { cleaner } from "./config/tasks/clean.js"
import { devScripts, prodScripts } from "./config/tasks/scripts.js"
import { devImages, imgWebp, imageOptimize } from "./config/tasks/images.js"
import { otfToTtf, ttfToWoff2, woff2Copy, fontsStyle } from "./config/tasks/fonts.js"
import { thirdParty } from "./config/tasks/thirdParty.js"
import { devHTML, prodHTML, prodHTMLNoWebp } from "./config/tasks/html.js"
import { templateLogger } from './helpers/helpers.js'

const fonts = gulp.series(otfToTtf, ttfToWoff2, woff2Copy, fontsStyle)

//Load Previews on Browser on dev
function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: gulpPaths.dist.base,
    },
    port: config.port || 4000,
  })
  done()
}

function watchFiles() {
  watch(`${gulpPaths.src.root}**/*.{htm,html}`, series(devHTML, devStyles, previewReload))
  watch([config.tailwindjs && config.tailwindjs, `${gulpPaths.src.scss}**/*.scss`, `${gulpPaths.src.components}**/*.scss`], series(devStyles, previewReload))
  watch(`${gulpPaths.src.js}**/*.js`, series(devScripts, previewReload))
  watch(`${gulpPaths.src.images}`, series(devImages, previewReload))
  watch(gulpPaths.src.files, series(thirdParty, previewReload))
  templateLogger('Watching for Changes..', 'info')
}



function previewReload(done) {
  templateLogger('Reloading Browser Preview.', 'question')
  browserSync.reload()
  done()
}

export const dev = series(
  cleaner,
  devImages,
  parallel(fonts, devStyles, devScripts, thirdParty, devHTML),
  livePreview,
  watchFiles
)


export const prod = series(
  cleaner,
  imageOptimize,
  imgWebp,
  parallel(prodHTML, prodStyles, prodScripts, fonts, thirdParty),
  buildFinish
)
export const nowebp = series(
  cleaner,
  parallel(prodStyles, prodScripts, prodHTMLNoWebp, fonts, thirdParty),
  buildFinish
)


function buildFinish(done) {
  templateLogger(`Production build is complete. Files are located at ${gulpPaths.dist.base}\n`, 'success')
  done()
}
