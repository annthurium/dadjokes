'use babel';
import {CompositeDisposable} from 'atom';

import DadJokeView from './dad-joke-view';

/**
  goals!
   1. show an empty modal
   2. show a modal with a hard coded joke
   3. show a modal with a new joke every time
**/

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

  toggle() {
    if (this.modal.isVisible()) {
      this.modal.hide();
    } else {
      this.modal.show();
    }
  }
}
