export default class Poutine {
  constructor(element) {
    this.element = element;
    this.buttons = this.element.querySelectorAll('.js-poutine');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      button.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].classList.remove('is-active');
    }
    const buttonClicked = event.currentTarget;
    buttonClicked.classList.add('is-active');
    this.selectedType = buttonClicked.innerText;
    this.updatePhoto();
  }
  updatePhoto() {
    const image = this.element.querySelector('img');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
