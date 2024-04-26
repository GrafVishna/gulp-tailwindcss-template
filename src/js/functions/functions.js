// ConsoleLog Log
import { projectLogger } from '../app.js'
import logSymbols from "log-symbols"
export const templateLogger = (message, type) => {
   let iconType = ''
   if (type === 'success') iconType = logSymbols.success
   else if (type === 'info') iconType = logSymbols.info
   else if (type === 'warning') iconType = logSymbols.warning
   else if (type === 'error') iconType = logSymbols.error

   if (projectLogger) {
      console.log(`\n\t${iconType} ${message}`)
   }
}


// The uniqueization of the array
export const uniqArray = (array) => {
   return array.filter(function (item, index, self) {
      return self.indexOf(item) === index
   })
}

// Hesh's receipt at the site address
export function getHash() {
   if (location.hash) { return location.hash.replace('#', '') }
}

// Hesh's instruction to the site address
export function setHash(hash) {
   hash = hash ? `#${hash}` : window.location.href.split('#')[0]
   history.pushState('', '', hash)
}

// Formatting figures of type 100,000,000,000
export function getDigFormat(item, sepp = ' ') {
   return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${sepp}`)
}

// To remove the class from all the elements of the arrayents of the array
export function removeClasses(array, className) {
   for (var i = 0; i < array.length; i++) {
      array[i].classList.remove(className)
   }
}

export const wwww = () => console.log('test wwww')

// Menu open
export function menuOpen() {
   document.documentElement.classList.add("menu-open")
}

// Menu close
export function menuClose() {
   document.documentElement.classList.remove("menu-open")
}

// export let bodyUnlock = (delay = 500) => {
//    let body = document.querySelector("body")
//    if (bodyLockStatus) {
//       let lock_padding = document.querySelectorAll("[data-lp]")
//       setTimeout(() => {
//          for (let index = 0; index < lock_padding.length; index++) {
//             const el = lock_padding[index]
//             el.style.paddingRight = '0px'
//          }
//          body.style.paddingRight = '0px'
//          document.documentElement.classList.remove("lock")
//       }, delay)
//       bodyLockStatus = false
//       setTimeout(function () {
//          bodyLockStatus = true
//       }, delay)
//    }
// }
// export let bodyLock = (delay = 500) => {
//    let body = document.querySelector("body")
//    if (bodyLockStatus) {
//       let lock_padding = document.querySelectorAll("[data-lp]")
//       for (let index = 0; index < lock_padding.length; index++) {
//          const el = lock_padding[index]
//          el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
//       }
//       body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
//       document.documentElement.classList.add("lock")

//       bodyLockStatus = false
//       setTimeout(function () {
//          bodyLockStatus = true
//       }, delay)
//    }
// }