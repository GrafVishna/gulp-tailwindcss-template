import gulp from 'gulp'
const { src, dest } = gulp
import imagemin from "gulp-imagemin"
import webp from "gulp-webp"
import newer from 'gulp-newer'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import options from "../../config.js"
const { gulpPaths, config } = options

export function devImages() {
   return src(gulpPaths.src.images).pipe(
      dest(gulpPaths.dist.images)
   )
}

export const prodImages = (done) => {
   imgWebp()
   done()
}
export const prodImagesNoWebp = (done) => {
   imageOptimize()
   done()
}

const imageOptimize = () => {
   src(gulpPaths.src.images)
      .pipe(plumber(
         notify.onError({
            title: "IMAGE-OPTIMIZE",
            message: "Error: <%= error.message %>"
         }))
      )
      .pipe(imagemin(config.imagemin))
      .pipe(dest(gulpPaths.build.images))
}

const imgWebp = () => {

   src(gulpPaths.src.images)
      .pipe(plumber(
         notify.onError({
            title: "IMAGE-WEBP",
            message: "Error: <%= error.message %>"
         }))
      )
      .pipe(newer(`${gulpPaths.build.images}`))
      .pipe(webp(config.webp))
      .pipe(dest(gulpPaths.build.images))
      .pipe(src(`${gulpPaths.build.images}**/*.{jpg,jpeg,png,gif,webp}`))
      .pipe(newer(gulpPaths.build.images))
      .pipe(dest(gulpPaths.build.images))
   imageOptimize()
}
