import "firebase/firestore";
import 'firebase/storage'; 
import { userConverter } from "../models/User";
import { v4 } from "uuid";

class UserService {
  constructor(firebase) {
    this.db = firebase.firestore();
    this.storage = firebase.storage();
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
    if(usr.docs[0] !== undefined)if(usr.docs[0].exists){
      user = await this.getChildByMail(usr.docs[0].id)
      return user.data();
    }else return false;
    
    
   
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
          if (change.type === "added" || change.type === "removed") {
            const messageObj = change.doc.data();
            onChange([change.type, messageObj]);
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

    const friend = await this.getChildByID(userId)
    this.db
    .collection("kinderen")
    .doc(friend.email)
    .collection('vrienden')
    .doc(currentUser.email)
    .delete();
  };

  denyRequestById = async (currentUser, userId) => {
    console.log(userId)
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

  addToFriendlist = async (currentUser, addedUserEmail) => {
    const fsUser = await this.getChildByMail(addedUserEmail);
    const addedUserObj = fsUser.data();

    //adding to your friendlist
    const friendRef = this.db
      .collection("kinderen")
      .doc(currentUser.email)
      .collection("vrienden");

    await friendRef
      .doc(addedUserObj.email)
      .withConverter(userConverter)
      .set(addedUserObj);

    this.denyRequestById(currentUser, addedUserObj.id)

    //adding to the other persons friendlist
    const yourFriendRef = this.db
      .collection("kinderen")
      .doc(addedUserEmail)
      .collection("vrienden");

    await yourFriendRef
      .doc(currentUser.email)
      .withConverter(userConverter)
      .set(currentUser);


    return addedUserObj;
  };

  getAllRequestID = async user => {
    const results = [];
    const incomingData =  await this.db
    .collection("kinderen")
    .doc(user.email)
    .collection("verzoeken")
    .get();

    for (const res of incomingData.docs) {
      const user = res.data();
      results.push(user.userID)
    }

    return results;
  }

  sendFriendRequest = async (currentUser, user) => {
    const result = await this.getAllRequestID(user)
    if(result.includes(currentUser.id))return [false, 'Je hebt deze vriend al een verzoek gestuurd']
    else {
      await this.db
      .collection("kinderen")
      .doc(user.email)
      .collection("verzoeken")
      .doc()
      .withConverter(userConverter)
      .set(currentUser);
      return [true, 'Je vriendschaps verzoek is verstuurd'];
    }
  }

  addImageToStorage = async (currentUser,country, file, onChange, addImageToUser) => {

    const storageRef = this.storage.ref();
    const imageName = v4();
    const userID = currentUser.id;

    const metadata = {
      contentType: 'image/jpeg',
      creator: currentUser.name,
      creationDate: Date.now()
    };

    const uploadTask = storageRef.child(`${userID}/${country}/${imageName}.jpg`).putString(file, 'data_url', metadata)

      uploadTask.on("state_changed", {
        error: error => {
         return [false, "Er is een fout opgetreden"];
        },
        complete: () => {
          onChange('finished');
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            addImageToUser(null, country, downloadURL, uploadTask.snapshot.ref.name)
          });
        }
      });
  }

  updateUserChapter = async (currentUser, newChapter) => {
    const result = await this.db
    .collection('kinderen')
    .doc(currentUser.email)
    .update({chapter: newChapter})

    return result;
  }

  getUploadsByUser = async (user, country, pushImages) => {

    const storageRef = this.storage.ref();
    let listRef = storageRef.child(`${user.id}/${country}`);

    listRef.listAll()
      .then(function(res, images) {
        res.prefixes.forEach(function(folderRef) {

        });
        res.items.forEach(function(itemRef) {
        itemRef.getDownloadURL().then(function(url) {
          pushImages(user, country, url, itemRef.name);
        })
      });
    }).catch(function(error) {
      //Error occured
    });
  }

  sendPostcard = async (user, postcard, location) => {
    return await this.db
      .collection("kinderen")
      .doc(user.email)
      .collection(location)
      .doc(v4())
      .set(postcard);
  };

  getPostcards = async (user, country, pushPostcardsToUser) => {
    this.db
    .collection('kinderen')
    .doc(user.email)
    .collection(country)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          pushPostcardsToUser(country, doc.data())
      });
  });
  }
}

export default UserService;
