import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-container');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }
    const btnValidate = this.element.querySelector('.js-validate');
    btnValidate.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    this.container.innerHTML = '';
    let total = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      if (poutine.selectedType != '') {
        total++;
      }
    }
    const texte = document.createElement('p');
    texte.innerText = `Nombre total de poutine(s) : ${total}`;
    this.container.appendChild(texte);
  }
}
