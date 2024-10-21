import alias from 'gulp-path-alias'


const pathHTML = {
   '@components': 'src/components',
   '@img': './img',
   '@files': './files',
   '@js': './js',
}
const pathSCSS = {
   '@components': 'src/components',
   '@img': '../img',
   '@files': '../files',
}

export function replaceAliasHTML() {
   return alias({ paths: { ...pathHTML } })
}

export const replaceAliasSCSS = () => {
   return alias({ paths: { ...pathSCSS } })
}
