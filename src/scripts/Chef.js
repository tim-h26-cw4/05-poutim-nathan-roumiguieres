import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.chef = [];
    this.element = element;
    this.container = document.querySelector('.js-container');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.chef.push(instance);
    }
    const btnValidate = document.querySelector('.js-validate');
    btnValidate.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {}
}
