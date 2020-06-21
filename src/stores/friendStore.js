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
    const foundUser =  await this.userService.getChildByID(scannedID);
    if(foundUser.id === this.rootStore.uiStore.currentUser.id)return [false, "Je kan jezelf niet toevoegen"]
    else if(this.requests.find(request => request.id === foundUser.id)) return [true, `${foundUser.name} is toegevoegd aan je vriendenlijst`]
    else if(this.friends.find(friend => friend.id === foundUser.id)) return [true, `${foundUser.name} zit al in je vriendenlijst`]
    else return foundUser
    
    /*
    TODO::
    -- If user == current user -> NOGO
    -- If user == in requests -> ADD INSTANTLY
    -- if user == in friends -> NOGO
    */
  }

  sendFriendRequest = async (user) => {
    const result = await this.userService.sendFriendRequest(this.rootStore.uiStore.currentUser, user)
    return (result)
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
