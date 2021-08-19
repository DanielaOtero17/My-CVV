var modals = {
  modalA: document.getElementById('1modal'),
  modalB: document.getElementById('2modal'),
  modalC: document.getElementById('3modal'),
  modalD: document.getElementById('4modal'),
  modalE: document.getElementById('5modal'),
  modalF: document.getElementById('6modal'),
  modalG: document.getElementById('7modal'),
  modalH: document.getElementById('8modal'),
}

var buttons = {
  btnA: {
    modalAsociate: 'modalA',
    btn: document.getElementById('1btn'),
  },
  btnB: {
    modalAsociate: 'modalB',
    btn: document.getElementById('2btn'),
  },
  btnC: {
    modalAsociate: 'modalC',
    btn: document.getElementById('3btn'),
  },
  btnD: {
    modalAsociate: 'modalD',
    btn: document.getElementById('4btn'),
  },
  btnE: {
    modalAsociate: 'modalE',
    btn: document.getElementById('5btn'),
  },
  btnF: {
    modalAsociate: 'modalF',
    btn: document.getElementById('6btn'),
  },
  btnG: {
    modalAsociate: 'modalG',
    btn: document.getElementById('7btn'),
  },
  btnH: {
    modalAsociate: 'modalH',
    btn: document.getElementById('8btn'),
  },
}

var spans = document.getElementsByClassName('close')
let modal

for (const span in spans) {
  spans[span].onclick = function () {
    modals[modal].style.display = 'none'
  }
}

for (const ev in buttons) {
  buttons[ev].btn.onclick = function () {
    modal = buttons[ev].modalAsociate
    modals[modal].style.display = 'block'
  }
}

window.onclick = function (event) {
  if (event.target == modals[modal]) {
    modals[modal].style.display = 'none'
  }
}
