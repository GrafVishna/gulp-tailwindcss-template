import { projectLogger } from '../src/js/app.js'
// import logSymbols from "log-symbols"
// export const templateLogger = (message, type) => {
//    let iconType = ''
//    if (type === 'success') iconType = logSymbols.success
//    else if (type === 'info') iconType = logSymbols.info
//    else if (type === 'warning') iconType = logSymbols.warning
//    else if (type === 'error') iconType = logSymbols.error

//    if (projectLogger) {
//       console.log(`\n\t${iconType} ${message}\n`)
//    }
// }


export const templateLogger = (message, logSymbol) => {
   const iconType = logSymbols[logSymbol]
   if (projectLogger) {
      console.log(`\n\t${iconType} ${message}\n`)
   }
}

const logSymbols = {
   success: '✅',
   info: '🚩',
   warning: '❗',
   error: '❌',
   clock: '⌛',
   question: '👀',
   alarm: '🚨',
   star: '🌟'
}
