'use babel';
import {CompositeDisposable} from 'atom';

/**
  goals!
   1. show an empty modal
   2. show a modal with a hard coded joke
   3. show a modal with a new joke every time
**/

export default {
  activate() {
    const item = document.createElement('div');
    this.modal = atom.workspace.addModalPanel({item, isVisible: false});
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
