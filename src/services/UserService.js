import "firebase/firestore";
import { userConverter } from "../models/User";

class UserService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }

  getChildByMail = async Mail => {
    return await this.db
    .collection("kinderen")
    .doc(Mail)
    .withConverter(userConverter)
    .get();
  };
}

export default UserService;
