import { decorate, action, observable } from "mobx";
import UserService from "../services/UserService";
import STORYLINE from "../pages/A_userVariables/storyLine";

class FriendStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.userService = new UserService(this.rootStore.firebase);
    this.friends = [];
    this.requests = [];
  }


  deleteFriend = async (id) => {
    this.userService.deleteFriendById(this.rootStore.uiStore.currentUser, id);
  }

  addFriend(friend) {
    this.friends.push((friend))
    STORYLINE.forEach(story => {
      this.getAllFilesFromUser(friend, story.imageName)
    })

    console.log(this.friends)
  }

  getAllFilesFromUser = async (user, country) => {
    const result = await this.userService.getUploadsByUser(user, country, this.addImagesToUser);
    console.log(result)
  }

  addImagesToUser = (friend, country, imageLink) => {
    
    let objIndex = this.friends.findIndex((obj => obj.id === friend.id));
    if(this.friends[objIndex][country])this.friends[objIndex][country].push(imageLink)
    else this.friends[objIndex][country] = [imageLink]
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
    else if(this.requests.find(request => request.id === foundUser.id)) {
      this.acceptFriendRequest(foundUser.email)
      return [true, `${foundUser.name} is toegevoegd aan je vriendenlijst`]
    }
    else if(this.friends.find(friend => friend.id === foundUser.id)) return [true, `${foundUser.name} zit al in je vriendenlijst`]
    else return foundUser
  }

  sendFriendRequest = async (user) => {
    const result = await this.userService.sendFriendRequest(this.rootStore.uiStore.currentUser, user)
    return (result)
  }
  
  removeFriend = (friend) =>  {
    if(friend.id !== this.rootStore.uiStore.currentUser.id) this.friends.splice(this.friends.findIndex(item => item.id === friend.id), 1);
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
