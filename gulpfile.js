
import gulp from 'gulp'
const { series, parallel, watch } = gulp

import { gulpPaths, config } from "./config.js"
import browserSync from "browser-sync"
import { devStyles, prodStyles } from "./config/tasks/styles.js"
import { devClean, prodClean } from "./config/tasks/clean.js"
import { devScripts, prodScripts } from "./config/tasks/scripts.js"
import { devImages, imageOptimize, imgWebp } from "./config/tasks/images.js"
import { devFonts, prodFonts, fontsStyle } from "./config/tasks/fonts.js"
import { devThirdParty, prodThirdParty } from "./config/tasks/thirdParty.js"
import { devHTML, prodHTML, prodHTMLNoWebp } from "./config/tasks/html.js"
const logSymbols = {
  success: '✅',
  info: '🚩',
  warning: '❗',
  error: '❌',
  clock: '⌛',
  question: '👀',
  alarm: '🚨',
  star: '🌟'
}


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
  watch(`${gulpPaths.src.base}**/*.{htm,html}`, series(devHTML, devStyles, previewReload))
  watch([config.tailwindjs && config.tailwindjs, `${gulpPaths.src.scss}**/*.scss`, `${gulpPaths.src.components}**/*.scss`], series(devStyles, previewReload))
  watch(`${gulpPaths.src.js}**/*.js`, series(devScripts, previewReload))
  watch(`${gulpPaths.src.images}`, series(devImages, previewReload))
  watch(`${gulpPaths.src.fonts}**/*`, series(devFonts, previewReload))
  watch(gulpPaths.src.thirdParty, series(devThirdParty, previewReload))
}


function previewReload(done) {
  console.log("\n\t" + logSymbols.question, "Reloading Browser Preview.\n")
  browserSync.reload()
  done()
}

export const dev = series(
  devClean,
  devFonts,
  fontsStyle,
  parallel(devStyles, devScripts, devImages, devThirdParty, devHTML),
  livePreview,
  watchFiles
)


export const prod = series(
  prodClean,
  prodFonts,
  fontsStyle,
  imageOptimize,
  parallel(prodStyles, prodScripts, prodHTMLNoWebp, prodThirdParty),
  buildFinish
)
export const webp = series(
  prodClean,
  prodFonts,
  fontsStyle,
  imageOptimize,
  parallel(prodStyles, imgWebp, prodScripts, prodHTML, prodThirdParty),
  buildFinish
)

function buildFinish(done) {
  console.log(`\n\t${logSymbols.success} Production build is complete. Files are located at ${gulpPaths.build.base}\n`)
  done()
}