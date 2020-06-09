import { decorate } from "mobx";

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.users = [];
  }
}

decorate(UserStore, {
});

export default UserStore;
