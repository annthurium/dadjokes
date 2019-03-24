'use babel';
import {CompositeDisposable} from 'atom';
import rp from 'request-promise';

import DadJokesView from './dad-jokes-view';

const options = {
  url: 'https://icanhazdadjoke.com',
  method: 'GET',
  headers: {'Accept': 'application/json'
  }
};

async function getDadJoke() {
  try {
    const response = await rp(options);
    return JSON.parse(response).joke;
  } catch (error) {
    return `oh noes no dad jokes 4 u: ${error}`;
  }
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

  async toggle() {
    if (this.modal.isVisible()) {
      this.modal.hide();
    } else {
      const joke = await getDadJoke();
      this.dadJokesView.setJoke(joke);
      this.modal.show();
    }
  }
}
