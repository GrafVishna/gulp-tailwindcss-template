import alias from 'gulp-path-alias'


const pathHTML = {
   '@components': './components',
   '@img': './img',
}
const pathSCSS = {
   '@components': '../components',
   '@img': '../img',
}

export function replaceAliasHTML() {
   return alias({ paths: { ...pathHTML } })
}

export const replaceAliasSCSS = () => {
   return alias({ paths: { ...pathSCSS } })
}
