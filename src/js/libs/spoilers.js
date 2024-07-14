import FESpoilers from '../functions/FESpoilers.js'

// data-spoiler               : spoiler body
// data-spoiler-title         : spoiler title (open button)
// data-spoiler-content       : spoiler content (body that opens)
// data-spoiler-group="A"     : spoiler group (A, B, C) (spoilers with the same group open simultaneously)
// data-spoiler-state="hide"  : spoiler state (show, hide) (spoilers with state show open when the page loads)
// data-spoiler-resize="768"  : spoiler size (768px) (spoilers initialize when the specified screen size is reached)

FESpoilers('[data-spoiler]', {
   contentSelector: "[data-spoiler-content]",
   titleSelector: "[data-spoiler-title]",
   showClass: 'spoiler-open',
   initClass: 'init',
   duration: 350,
})

