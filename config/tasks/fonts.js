import pkg from 'gulp'
const { src, dest, isFontsReW } = pkg
import { readdir, unlink } from 'fs'
import * as fs from 'fs'
import fonter from 'gulp-fonter-fix'
import ttf2woff2 from 'gulp-ttf2woff2'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import { gulpPaths } from "../../config.js"


export function devFonts() {
   return fontOperations(gulpPaths.dist.fonts)
}

export function prodFonts() {
   return fontOperations(gulpPaths.build.fonts)
}


// Create styles.scss ========================================================================================================================================================

export const fonstStyle = () => {
   let fontsFile = `${gulpPaths.src.scss}fonts/fonts.scss`
   // If the flag is transmitted -Relend File Fine Fine
   isFontsReW ? unlink(fontsFile, cb) : null
   // Check whether font files exist
   readdir(gulpPaths.src.fonts, function (err, fontsFiles) {
      if (fontsFiles) {
         // Check whether there is a style file to connect fonts
         if (fontsFiles) {
            // Check whether there is a style file to connect fonts
            if (!fs.existsSync(fontsFile)) {
               // If there is no file, we create it
               fs.writeFile(fontsFile, '', cb)
               let newFileOnly
               for (var i = 0; i < fontsFiles.length; i++) {
                  let fontFileName = fontsFiles[i].split(".")[0]
                  if (newFileOnly !== fontFileName) {
                     let fontName = fontFileName.split("-")[0]
                        ? fontFileName.split("-")[0]
                        : fontFileName
                     let fontWeight = fontFileName.split("-")[1]
                        ? fontFileName.split("-")[1]
                        : fontFileName
                     let fontStyle = fontFileName.includes("-Italic")
                        ? "italic"
                        : "normal"
                     if (
                        fontWeight.toLowerCase() === "thin" ||
                        fontWeight.toLowerCase() === "hairline"
                     ) {
                        fontWeight = 100
                     } else if (
                        fontWeight.toLowerCase() === "extralight" ||
                        fontWeight.toLowerCase() === "ultralight"
                     ) {
                        fontWeight = 200
                     } else if (fontWeight.toLowerCase() === "light") {
                        fontWeight = 300
                     } else if (fontWeight.toLowerCase() === "medium") {
                        fontWeight = 500
                     } else if (
                        fontWeight.toLowerCase() === "semibold" ||
                        fontWeight.toLowerCase() === "demibold"
                     ) {
                        fontWeight = 600
                     } else if (fontWeight.toLowerCase() === "bold") {
                        fontWeight = 700
                     } else if (
                        fontWeight.toLowerCase() === "extrabold" ||
                        fontWeight.toLowerCase() === "ultrabold"
                     ) {
                        fontWeight = 800
                     } else if (
                        fontWeight.toLowerCase() === "black" ||
                        fontWeight.toLowerCase() === "heavy"
                     ) {
                        fontWeight = 900
                     } else if (
                        fontWeight.toLowerCase() === "extrablack" ||
                        fontWeight.toLowerCase() === "ultrablack"
                     ) {
                        fontWeight = 950
                     } else {
                        fontWeight = 400
                     }
                     fs.appendFile(
                        fontsFile,
                        `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: ${fontStyle};\n}\r\n`,
                        cb
                     )
                     newFileOnly = fontFileName
                  }
               }
            } else {
               // If the file is, output the message
               console.log("The SCSS/FONTS/FONTS.SCSS file already exists.To update the file you need to delete it!")
            }
         } else {
            // If there are no fonts
            fs.unlink(fontsFile, cb)
         }
      }
   })
   return src(`${gulpPaths.src.base}`)
}
function cb() { }

// Font operation feature including conversion and copying ========================================================================================================================================================


const fontOperations = (folder) => {

   return src(`${gulpPaths.src.fonts}**/*`)
      .pipe(plumber(
         notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
         }))
      )
      // Converting in .woff
      .pipe(fonter({
         formats: ['woff']
      }))
      // Unloading to a folder with a result
      .pipe(dest(folder))
      // Looking for fonts .ttf fonts
      .pipe(src(`${gulpPaths.src.fonts}*.ttf`))
      // Converting in .woff2
      .pipe(ttf2woff2())
      // Unloading to a folder with a result
      .pipe(dest(folder))
      // Looking for fonts .woff and woff2 fonts
      .pipe(src(`${gulpPaths.src.fonts}*.{woff,woff2}`))
      // Unloading to a folder with a result
      .pipe(dest(folder))
}