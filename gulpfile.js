
import gulp from 'gulp'
const { series, parallel, watch } = gulp
import { gulpPaths, config, mainParams, logSymbols } from "./config.js"
import browserSync from "browser-sync"
import connectPHP from "gulp-connect-php"
import { tasksArr } from "./config/tasks.js"

const { styles, cleans, scripts, images, fonts, html, files } = tasksArr


//Load Previews on Browser on dev
function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: gulpPaths.dist.base,
      middleware: [
        function (req, res, next) {
          res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
          res.setHeader("Pragma", "no-cache")
          res.setHeader("Expires", "0")
          next()
        }
      ]
    },
    port: config.port || 4000,
  })
  done()
}
function livePreviewPhp(done) {
  connectPHP.server({
    base: gulpPaths.dist.base,
    port: 8000,
    keepalive: true,
    open: false
  }),
    browserSync.init({
      port: config.port || 4000,
      proxy: 'localhost:8000',
    }),
    done()
}

function watchFiles() {
  watch(`${gulpPaths.src.base}**/*.{htm,html,json}`, series(html.dev, styles.dev, previewReload))
  watch(
    config.IS_TAILWIND
      ? [config.tailwindjs, `${gulpPaths.src.base}**/*.scss`]
      : [`${gulpPaths.src.base}**/*.scss`],
    series(styles.dev, previewHotReload)
  )

  watch(`${gulpPaths.src.js}**/*.js`, series(scripts.dev, previewReload))
  watch(`${gulpPaths.src.images}`, series(images.dev, previewReload))
  watch(`${gulpPaths.src.fonts}**/*`, series(fonts.dev, previewReload))
  watch(gulpPaths.src.thirdParty, series(files.dev, previewReload))
}


const previewReload = (done) => {
  console.log("\n\t" + logSymbols.question, "Reloading Browser Preview.\n")
  browserSync.reload()
  done()
}

const previewHotReload = (done) => {
  console.log("\n\t" + logSymbols.question, "Hot Reloading Browser Preview.\n")
  done()
}

export const dev = series(
  cleans.dev,
  parallel(fonts.dev, fonts.style, styles.dev, scripts.dev, images.dev, files.dev, html.dev),
  livePreview,
  watchFiles
)

export const devPhp = series(
  cleans.dev,
  parallel(fonts.dev, fonts.style, styles.dev, scripts.dev, images.dev, files.dev, html.dev),
  livePreviewPhp,
  watchFiles
)

export const prod = series(
  cleans.prod,
  parallel(fonts.prod, fonts.style, images.prod, styles.prod, scripts.prod, html.prodNoWebp, files.prod),
  buildFinish
)

export const webp = series(
  cleans.prod,
  images.prod,
  parallel(fonts.prod, fonts.style, styles.prod, images.prodWebp, scripts.prod, html.prodWebp, files.prod),
  buildFinish
)

function buildFinish(done) {
  console.log(`\n\t${logSymbols.success} Production build is complete. Files are located at ${gulpPaths.build.base}\n`)
  done()
}