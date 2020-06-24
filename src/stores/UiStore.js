import { decorate, observable, action } from "mobx";
import AuthService from "../services/AuthenticationService";
import UserService from "../services/UserService";
import User from "../models/User";
import STORYLINE from "../pages/A_userVariables/storyLine";
class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.firebase = rootStore.firebase;
    this.currentUser = undefined;
    this.cameraPermission = false;
    this.parentalConfirmation = false;
    this.uploadState = false;
    this.authService = new AuthService( this.rootStore.firebase, this.onAuthStateChanged);
    this.userService = new UserService(this.rootStore.firebase);
  }

  loginWithEmail = async email => {
    const result = await this.authService.login(email);
    return result;
  };

  verifyLogin = async () => {
    if (this.firebase.auth().isSignInWithEmailLink(window.location.href)) {
      console.log("beginning authentication sequence")
      let emailAdress = window.localStorage.getItem('emailForSignIn');
      if (!emailAdress) {
        console.log("email niet gevonden gelieve deze nogmaals in te typen")
        emailAdress = window.prompt('email niet gevonden gelieve deze nogmaals in te typen');
      }

      if(!emailAdress) {alert("no email found"); return false}
      
      this.firebase.auth().signInWithEmailLink(emailAdress, window.location.href)
        .then(function(result) {
          console.log("logged in with email!");
          console.log(result);
          return true;
          //window.localStorage.removeItem('emailForSignIn');
        })
        .catch(function(error) {
          console.log(error.code)
          return false
        });
    }

  }

  onAuthStateChanged = async user => {
    if (user) {
      console.log(`De user is ingelogd: ${user.email}`);

      const result = await this.userService.getChildByMail(user.email);
      if(!result.exists){
        this.setCurrentUser(
          new User({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            store: this.rootStore,
            avatar: user.photoURL
          })
        );
        this.userService.createUser(new User({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        store: this.rootStore,
        avatar: user.photoURL
      }))
      }
      else {
        const data = await result.data();
        this.setCurrentUser(new User({
        name: data.name,
        email: data.email,
        chapter: data.chapter,
        avatar: data.avatar,
        color: data.color,
        store: this.rootStore,
        id: data.id,
        creationDate: data.creationDate
      }))
      this.getFriends();
      this.getFriendRequests();
      this.getPersonalCreations();
    }

    } else {
      console.log(`No user is logged in`);
      this.setCurrentUser(undefined);
    }
  };

  getFriends = async () => {
    await this.userService.getFriendsByUser(
      this.currentUser,
      this.onFriendsChanged
    );
  };

  onFriendsChanged = friend => {
    const incomingFriend = friend[1];
    if(friend[0] === 'removed') this.rootStore.friendStore.removeFriend(incomingFriend)
    else this.rootStore.friendStore.addFriend(incomingFriend)
  };

  getFriendRequests = async () => {
    await this.userService.getFriendRequests(
      this.currentUser,
      this.onFriendRequestsChanged
    );
  };

  onFriendRequestsChanged = request => {
    const incomingRequest = request;
    this.rootStore.friendStore.addFriendRequest(incomingRequest)
  };

  setCurrentUser(user) {
    this.currentUser = user;
  }

  setCameraPermission(permission) {
    this.cameraPermission = permission
  }

  setParentalConfirmation(permission) {
    this.parentalConfirmation = permission
  }

  updateUser =  async (name, character, color) => {
    await this.authService.updateUser(name, character, color);
      this.setCurrentUser(new User({
        name: name,
        email: this.currentUser.email,
        chapter: this.currentUser.chapter,
        avatar: character,
        color: color,
        id: this.currentUser.id,
        creationDate: this.currentUser.creationDate,
        store: this.rootStore,
      }));

      console.log(this.currentUser)
  }

  uploadImage = async (country, file) => {
    this.setUploadState(true);
    this.userService.addImageToStorage(this.currentUser,country, file, this.setUploadState, this.pushImagesToUser);
  }

  setUploadState = newState => this.uploadState = newState;

  updateChapter = async (unlockedChapter) => {
    if(unlockedChapter-1 === this.currentUser.chapter){
      await this.userService.updateUserChapter(this.currentUser, unlockedChapter); 
      this.currentUser.setChapter(unlockedChapter)
      return true
    }
    else return true
  }

  sendPostcard = async (user, postcard, location) => {const res = await this.userService.sendPostcard(user, postcard, location); return res}

  getPersonalCreations = () => {
    STORYLINE.forEach(story => {
      this.userService.getUploadsByUser(this.currentUser, story.imageName, this.pushImagesToUser)
      this.userService.getPostcards(this.currentUser, story.imageName, this.pushPostcardsToUser)
    })
  }

  pushImagesToUser = (friend, country, imageLink, imageName) => {
    if(this.currentUser[country])this.currentUser[country].push({link: imageLink, name: imageName})
    else this.currentUser[country] = [{link: imageLink, name: imageName}]
  }

  pushPostcardsToUser = (country, postcard) => {
    if(this.currentUser.postcards){
      if(this.currentUser.postcards[country])this.currentUser.postcards[country].push(postcard)
      else this.currentUser.postcards[country] = [postcard]
    }else this.currentUser['postcards']= {[country]: [postcard]}
    }

  getPostcardsPerImage(country, image) {
      if(this.currentUser.postcards){//Wou dezel wel computed doen maar heb deze 2 dingen nodig
        if(this.currentUser.postcards[country])return this.currentUser.postcards[country].filter(postcard => postcard.image === image);
        else return []
      }else return []
  } 
  }

decorate(UiStore, {
  currentUser: observable,
  setCurrentUser: action,
  cameraPermission: observable,
  setCameraPermission: action,
  parentalConfirmation: observable,
  setParentalConfirmation: action,
  updateUser: action,
  onAuthStateChanged: action,
  uploadState: observable,
  setUploadState: action,
  pushImagesToUser: action,
  pushPostcardsToUser: action
});

export default UiStore;
