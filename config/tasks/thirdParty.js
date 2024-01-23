import gulp from 'gulp'
const { src, dest } = gulp
import { gulpPaths } from "../../config.js"

export function devThirdParty() {
   return src(gulpPaths.src.thirdParty).pipe(
      dest(gulpPaths.dist.thirdParty)
   )
}


export function prodThirdParty() {
   return src(gulpPaths.src.thirdParty).pipe(
      dest(gulpPaths.build.thirdParty)
   )
}
