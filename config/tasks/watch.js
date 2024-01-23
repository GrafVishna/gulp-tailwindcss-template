import gulp from 'gulp'
const { watch, series } = gulp
import browserSync from "browser-sync"
import { devHTML } from "./html.js"
import { devStyles } from "./styles.js"
import { devImages } from "./images.js"
import { devFonts } from "./fonts.js"
import { devScripts } from "./scripts.js"
import { devThirdParty } from "./thirdParty.js"
import logSymbols from "log-symbols"
import options from "../../config.js"
const { gulpPaths, config, port } = options


export function livePreview(done) {
   browserSync.init({
      server: {
         baseDir: gulpPaths.dist.base,
      },
      port: port || 4000,
   })
   done()
}

export function watchFiles() {
   watch(
      gulpPaths.src.base,
      series(devHTML, devStyles, previewReload)
   )
   watch(
      [config.tailwindjs, gulpPaths.src.scss],
      series(devStyles, previewReload)
   )
   watch(`${gulpPaths.src.js}**/*.js`, series(devScripts, previewReload))
   watch(gulpPaths.src.images, series(devImages, previewReload))
   watch(`${gulpPaths.src.fonts}**/*.*`, series(devFonts, previewReload))
   watch(
      gulpPaths.src.thirdParty,
      series(devThirdParty, previewReload)
   )
   console.log("\n\t" + logSymbols.info, "Watching for Changes..\n")
}

function previewReload(done) {
   console.log("\n\t" + logSymbols.info, "Reloading Browser Preview.\n")
   browserSync.reload()
   done()
}