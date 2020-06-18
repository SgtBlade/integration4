import { decorate, observable, action } from "mobx";
import AuthService from "../services/AuthenticationService";
import UserService from "../services/UserService"
import User from "../models/User";

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.firebase = rootStore.firebase;
    this.currentUser = undefined;
    this.cameraPermission = false;
    this.parentalConfirmation = false;
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
        console.log("First email wrong, attempt 2")
        emailAdress = window.prompt('Please provide your email for confirmation');
      }

      if(!emailAdress) {alert("no email found"); return false}
      console.log("begin authorisation");
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
      this.setCurrentUser(
        new User({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          store: this.rootStore.userStore,
          avatar: user.photoURL
        })
      );

      const result = await this.userService.getChildByMail(user.email);
      if(!result.exists)this.userService.createUser(this.currentUser);
      else {
        const data = await result.data();
        this.setCurrentUser(new User({
        name: data.name,
        email: data.email,
        chapter: data.chapter,
        avatar: data.avatar,
        color: data.color,
        id: data.id,
        creationDate: data.creationDate
      }))}

    } else {
      console.log(`No user is logged in`);
      this.setCurrentUser(undefined);
    }
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
        creationDate: this.currentUser.creationDate
      }));

      console.log(this.currentUser)
  }
}

decorate(UiStore, {
  currentUser: observable,
  setCurrentUser: action,
  cameraPermission: observable,
  setCameraPermission: action,
  parentalConfirmation: observable,
  setParentalConfirmation: action,
  updateUser: action
});

export default UiStore;
