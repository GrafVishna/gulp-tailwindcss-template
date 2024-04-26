import { projectLogger } from '../app.js'
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
