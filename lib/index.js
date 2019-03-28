'use babel';
import {CompositeDisposable} from 'atom';

import DadJokeView from './dad-joke-view';
import rp from 'request-promise';

const options = {
  method: 'GET',
  url: 'https://icanhazdadjoke.com',
  headers: {'Accept': 'application/json'}
};

async function getDadJoke() {
  try {
    const response = await rp(options);
    return JSON.parse(response).joke;
  } catch (error) {
    return `o noes: ${error}`;
  }
}

export default {
  activate() {
    this.dadJokeView = new DadJokeView();
    this.modal = atom.workspace.addModalPanel({item: this.dadJokeView, isVisible: false});
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add(
      'atom-workspace', {'dadjokes:toggle': () => this.toggle()}
      )
    );
  },

  async toggle() {
    if (this.modal.isVisible()) {
      this.modal.hide();
    } else {
      const joke = await getDadJoke();
      this.dadJokeView.setJoke(joke);
      this.modal.show();
    }
  }
}
