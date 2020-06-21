import "firebase/firestore";
import { userConverter } from "../models/User";

class UserService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }

  getChildByMail = async mail => {
    return await this.db
      .collection("kinderen")
      .doc(mail)
      .withConverter(userConverter)
      .get();
  };

  getChildByID = async (userId) => {
    const usr = await this.db
      .collectionGroup("kinderen")
      .where("userID", "==", userId)
      .withConverter(userConverter)
      .get();

    let user = false;
    if(usr.docs[0].exists)user = await this.getChildByMail(usr.docs[0].id)
    
    return user.data();
  };

  createUser = async user => {
    return await this.db
      .collection("kinderen")
      .doc(user.email)
      .withConverter(userConverter)
      .set(user);
  };

  getFriendsByUser = async (user, onChange) => {

    this.db
      .collection("kinderen")
      .doc(user.email)
      .collection("vrienden")
      .withConverter(userConverter)
      .onSnapshot(async snapshot => {
        snapshot.docChanges().forEach(async change => {
          if (change.type === "added") {
            const messageObj = change.doc.data();
            onChange(messageObj);
          }
        });
      });
  };

  getFriendRequests = async (user, onChange) => {

    this.db
      .collection("kinderen")
      .doc(user.email)
      .collection("verzoeken")
      .withConverter(userConverter)
      .onSnapshot(async snapshot => {
        snapshot.docChanges().forEach(async change => {
          if (change.type === "added") {
            const requestObj = change.doc.data();
            onChange(requestObj);
          }
        });
      });
  };

  deleteFriendById = async (currentUser, userId) => {
    this.db
    .collection("kinderen")
    .doc(currentUser.email)
    .collection('vrienden')
    .where("userID", "==", userId)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
              doc.ref.delete().then(function() {
              console.log("Document successfully deleted!");
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
        });
    })
  };

  denyRequestById = async (currentUser, userId) => {
    this.db
    .collection("kinderen")
    .doc(currentUser.email)
    .collection('verzoeken')
    .where("userID", "==", userId)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
              doc.ref.delete().then(function() {
              console.log("Document successfully deleted!");
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
        });
    })
  };

  addToFriendlist = async (user, friend) => {
    const fsUser = await this.getChildByMail(friend);
    const fsUserObj = fsUser.data();

    const contactsRef = this.db
      .collection("kinderen")
      .doc(user.email)
      .collection("vrienden");

    await contactsRef
      .doc(fsUserObj.email)
      .withConverter(userConverter)
      .set(fsUserObj);

    this.denyRequestById(user, fsUserObj.id)
    return fsUserObj;
  };
}

export default UserService;
