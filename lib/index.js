'use babel';
import {CompositeDisposable} from 'atom';

import DadJokesView from './dad-jokes-view';

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
      this.modal.show();
    }
  }
}
