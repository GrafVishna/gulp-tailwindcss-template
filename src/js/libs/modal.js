import MicroModal from "micromodal"

MicroModal.init({
   onShow: modal => console.info(`${modal.id} is shown`),
   onClose: modal => console.info(`${modal.id} is hidden`),
   openTrigger: 'data-modal-open',
   closeTrigger: 'data-modal-close',
   openClass: 'is-open',
   disableScroll: true,
   disableFocus: false,
   awaitOpenAnimation: false,
   awaitCloseAnimation: false,
   debugMode: true
})