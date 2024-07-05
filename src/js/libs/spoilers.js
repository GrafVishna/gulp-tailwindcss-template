import FESpoilers from '../functions/FESpoilers.js'

// data-spoiler               : тіло спойлера
// data-spoiler-title         : заголовок спойлера (кнопка відкриття)
// data-spoiler-content       : вміст спойлера (тіло що відкривається)
// data-spoiler-group="A"     : група спойлерів (A, B, C) (спойлери з однаковою групою відкриваються одночасно)
// data-spoiler-state="hide"  : стан спойлера (show, hide) (спойлери станом show відкриваються при завантаженні сторінки)
// data-spoiler-resize="768"  : розмір спойлера (768px) (спойлери ініціалізуються при досягнені вказаного екрану))

FESpoilers('[data-spoiler]', {
   contentSelector: "[data-spoiler-content]",
   titleSelector: "[data-spoiler-title]",
   showClass: 'spoiler-open',
   initClass: 'init',
   duration: 350,
})

