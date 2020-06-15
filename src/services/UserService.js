import "firebase/firestore";
import { userConverter } from "../models/User";

class UserService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }

  getChildByMail = async mail => {
    return await this.db
      .collection("users")
      .doc(mail)
      .withConverter(userConverter)
      .get();
  };

  createUser = async user => {

    return await this.db
      .collection("kinderen")
      .doc(user.email)
      .withConverter(userConverter)
      .set(user);
  };
}

export default UserService;
