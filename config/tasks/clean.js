import gulp from 'gulp'
const { src } = gulp
import clean from "gulp-clean"
import { gulpPaths } from "../../config.js"
import { templateLogger } from '../../helpers/helpers.js'
//========================================================================================================================================================

/**
 * Clean task
 *
 * @description Cleans dist folder.
 *
 * @returns {object} stream - The stream of the clean task.
 */
export function cleaner() {
   // Logs info about the task
   templateLogger('Cleaning dist folder.', 'info')

   // Cleans the dist folder
   return src(gulpPaths.dist.base, { read: false, allowEmpty: true })
      // Pipes the stream to `gulp-clean` plugin
      .pipe(
         clean()
      )
}
//========================================================================================================================================================

