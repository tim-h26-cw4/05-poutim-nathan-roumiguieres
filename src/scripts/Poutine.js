export default class Poutine {
  constructor(element) {
    this.element = this.element;
    this.poutines = document.querySelector('.js-poutine');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.poutines.length; i++) {
      const poutine = poutines[i];
      this.poutines.addEventListener('click', this.selectedType.bind(this));
    }
  }

  selectType() {
    for (let i = 0; i < this.poutines.length; i++) {
      this.poutines[i].classList.remove('is-active');
    }
  }
}
