/**
 * Gets height of elements with [data-get-height] attribute and
 * adds them to the :root element with --{element-id}-height format.
 * Example:
 * <header data-get-height="header"></header>
 * The result is in <head>:
 * <style id="watcher_height">
 *   :root {
 *     --input-height: 42px;;
 *   }
 * </style>
 */
function getElemHeight() {
   const getHeightEls = document.querySelectorAll('[data-get-height]')

   // If there are elements to process
   if (getHeightEls.length > 0) {
      const styles = []

      // Loop over them and get their heights and IDs
      getHeightEls.forEach(getHeightEl => {
         const elID = getHeightEl.getAttribute('data-get-height')
         const elHeight = getHeightEl.offsetHeight

         // Create a CSS variable with the element's height
         styles.push(`--${elID}-height: ${elHeight}px;`)
      })

      // Create a stylesheet with the generated CSS variables
      createStylesToHead(styles, 'watcher_height')
   }
}

// ===============

/**
 * Creates a <style> element in <head> with the provided styles
 * and the given ID. If an element with the same ID already exists,
 * it is removed before creating the new one.
 *
 * @param {Array} stylesArray Array of rules in CSS syntax.
 * @param {string} id The ID of the <style> element to be created.
 */
function createStylesToHead(stylesArray, id) {
   const existingStyleElement = document.querySelector(`#${id}`)

   // If an element with the same ID already exists, remove it
   if (existingStyleElement) existingStyleElement.remove()

   const styleElement = document.createElement('style')
   styleElement.id = id

   let stylesString = ':root {\n'
   stylesString += stylesArray.join('    ')
   stylesString += '}'

   styleElement.textContent = stylesString
   document.head.appendChild(styleElement)
}

// Run the function when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
   getElemHeight()
})

// And also when the window is resized
window.addEventListener('resize', () => {
   getElemHeight()
});

