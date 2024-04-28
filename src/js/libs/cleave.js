import Cleave from 'cleave.js'

function createCleave(selector, params) {
   const inputs = document.querySelectorAll(selector)
   if (inputs.length > 0) {
      inputs.forEach(input => { const cleave = new Cleave(input, { ...params }) })
   }
}

createCleave('.input-element', {
   blocks: [4, 3, 3, 4],
   uppercase: true
})