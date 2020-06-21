import { decorate, action, observable } from "mobx";
import UserService from "../services/UserService";

class FriendStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.userService = new UserService(this.rootStore.firebase);
    this.friends = [];
    this.requests = [];
  }


  deleteFriend = async (id) => {
    this.userService.deleteFriendById(this.rootStore.uiStore.currentUser, id)
    this.friends.splice(this.friends.findIndex(item => item.id === id), 1)
  }

  addFriend(friend) {
    this.friends.push((friend))
  }

  addFriendRequest(friend) {
    this.requests.push((friend))
  }

  denyFriendRequest = async (id) => {
    this.userService.denyRequestById(this.rootStore.uiStore.currentUser, id)
    this.requests.splice(this.requests.findIndex(item => item.id === id), 1)
  }

  acceptFriendRequest = async (mail) => {
    const result = await this.userService.addToFriendlist(this.rootStore.uiStore.currentUser, mail)
    this.requests.splice(this.requests.findIndex(item => item.id === result.id), 1)
  }

  findFriend = async (scannedID) => {
    return await this.userService.getChildByID(scannedID);

    /*
    TODO::
    -- If user == current user -> NOGO
    -- If user == in requests -> ADD INSTANTLY
    -- if user == in friends -> NOGO
    */
  }

}
decorate(FriendStore, {
  requests: observable,
  friends: observable,
  deleteFriend: action,
  addFriendRequest: action,
  denyFriendRequest: action,
  acceptFriendRequest: action,
});
export default FriendStore;
