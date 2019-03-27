'use babel';

export default class DadJokeView {
  constructor() {
    this.element = document.createElement('div');
    const childElement = document.createElement('div');

    childElement.textContent = 'I won’t buy anything with velcro, it’s a total rip off.';
    this.element.appendChild(childElement);
  }
}
