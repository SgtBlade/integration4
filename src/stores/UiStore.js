import { decorate} from "mobx";

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentUser = undefined;
  }
}

decorate(UiStore, {
});

export default UiStore;
