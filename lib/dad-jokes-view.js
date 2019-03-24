'use babel';

export default class DadJokesView {
  constructor() {
    this.element = document.createElement('div');
    const message = document.createElement('div');
    message.textContent = 'I won\`t buy anything velcro, it\'s a rip off';
    this.element.appendChild(message);
  }
}
