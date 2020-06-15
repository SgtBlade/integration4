import { decorate, observable, action } from "mobx";
import AuthService from "../services/AuthenticationService";
import UserService from "../services/UserService"
import User from "../models/User";

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.firebase = rootStore.firebase;
    this.currentUser = undefined;
    this.authService = new AuthService( this.rootStore.firebase, this.onAuthStateChanged);
    this.userService = new UserService(this.rootStore.firebase);
  }

  loginWithEmail = async email => {
    const result = await this.authService.login(email);
    console.log(result)
  };

  verifyLogin = async () => {
    if (this.firebase.auth().isSignInWithEmailLink(window.location.href)) {
      console.log("beginning authentication sequence")
      var emailAdress = window.localStorage.getItem('emailForSignIn');
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
        });
    }

  }

  onAuthStateChanged = async user => {
    console.log('test')
    console.log(user);
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
      else this.setCurrentUser(this.userService.getChildByMail(user.email).data())
      console.log(this.currentUser);

    } else {
      console.log(`De user is uitgelogd.`);
      this.setCurrentUser(undefined);
    }
    /*
    this.id = id;
    this.name = name;
    this.creations = [];
    this.friends = [];
    this.chapter = chapter;
    this.avatar = avatar;
    this.creationDate = creationDate;
    if (!avatar) {
      this.avatar = `https://avatars.dicebear.com/v2/avataaars/${this.id}.svg`;
    }
   this.email = email;
   */
  };

  setCurrentUser(user) {
    this.currentUser = user;
  }


}


decorate(UiStore, {
  currentUser: observable,
  setCurrentUser: action
});

export default UiStore;
