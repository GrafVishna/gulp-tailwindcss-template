import browserSync from "browser-sync"
import { templateLogger } from '../../helpers/helpers.js'
const bs = browserSync.create()

//========================================================================================================================================================

/**
 * Reloads the BrowserSync preview
 * @function
 * @param {Function} done - Gulp callback function
 * @returns {undefined}
 */
export function previewReload(done) {
   // Logs the reload info in the console
   templateLogger('Reloading Browser Preview.', 'info')

   // Reloads the BrowserSync preview
   bs.reload()

   // Gulp callback function
   done()
}
//========================================================================================================================================================
