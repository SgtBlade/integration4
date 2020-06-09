import { decorate } from "mobx";

class GroupStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.groups = [];
  }
}
decorate(GroupStore, {
});
export default GroupStore;
