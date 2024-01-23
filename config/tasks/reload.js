import logSymbols from "log-symbols" // For Symbolic Console logs :) :P
import browserSync from "browser-sync"

const bs = browserSync.create()

export function previewReload(done) {
   console.log("\n\t" + logSymbols.info, "Reloading Browser Preview.\n")
   bs.reload()
   done()
}
