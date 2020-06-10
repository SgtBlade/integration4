import { v4 } from "uuid";

class User {
  constructor({ id = v4(), name, chapter = 0, store, avatar = "", email, password, creationDate = Date.now() }) {
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
    /*
    if (!store) {
      throw new Error("voorzie een store");
    }
    this.store = store;
    this.store.addUser(this);
    */

    this.email = email;
    this.password = password;
  }

  linkCreation(creation) {
    !this.creations.includes(creation) && this.creations.push(creation);
  }
}

const userConverter = {
  toFirestore: function(user) {
    return {
      userID: user.id,
      naam: user.name,
      chapter: user.chapter,
      avatar: user.avatar,
      email: user.email,
    };
  },
  fromFirestore: function(snapshot, options) {
    const data = snapshot.data(options);
    return new User({
      name: data.naam,
      email: data.email,
      chapter: data.chapter,
      avatar: data.avatar,
      id: data.userID
    });
  }
};

export { userConverter };
export default User;
