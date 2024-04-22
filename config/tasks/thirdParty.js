import { src, dest } from 'gulp'
import newer from 'gulp-newer'
import { gulpPaths } from "../../config.js"
//========================================================================================================================================================

/**
 * Copy third-party libraries from source to dist.
 *
 * This task copies third-party libraries from the source folder to the dist
 * folder. It is used to ensure that all third-party libraries are copied to
 * the dist folder regardless of whether they are referenced in the HTML.
 *
 * @returns {Object} - gulp stream
 */
export function thirdParty() {
   // Copy third-party libraries from source to dist
   return src(gulpPaths.src.files)
      .pipe(newer(gulpPaths.dist.files))
      // Copy files to dist
      .pipe(dest(gulpPaths.dist.files))
}
