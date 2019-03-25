'use babel';
import {CompositeDisposable} from 'atom';

import DadJokesView from './dad-jokes-view';
import dadJokes from './dad-jokes';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getDadJoke() {
  const index = getRandomInt(dadJokes.length - 1);
  return dadJokes[index];
}

export default {
  activate() {
    this.dadJokesView = new DadJokesView();
    this.modal = atom.workspace.addModalPanel({item: this.dadJokesView, isVisible: false});
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add(
      'atom-workspace', {'dadjokes:toggle': () => this.toggle()}
    ));
  },

  toggle() {
    if (this.modal.isVisible()) {
      this.modal.hide();
    } else {
      const joke = getDadJoke();
      this.dadJokesView.setJoke(joke);
      this.modal.show();
    }
  }
}
