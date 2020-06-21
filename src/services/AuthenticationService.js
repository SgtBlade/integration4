import "firebase/auth";

class AuthService {
  constructor(firebase, onAuthStateChanged) {
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.auth.onAuthStateChanged((user) => onAuthStateChanged(user));
  }

  login = async (email) => {
    const actionCodeSettings = {
      url: "https://localhost:3000/login", //'https://localhost:3000/login', //'https://migueldp.be',
      handleCodeInApp: true,
    };

    try {
      const result = await this.auth
        .sendSignInLinkToEmail(email, actionCodeSettings)
        .then(function () {
          window.localStorage.setItem("emailForSignIn", email);
          return true;
        })
        .catch(function (error) {
          console.log(
            "Some error occurred, you can inspect the code: error.code"
          );
          console.log(error.code);
        });
      if (result) console.log("true");
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  updateUser = async (name, character, color) => {
    this.db
      .collection("kinderen")
      .doc(this.auth.currentUser.email)
      .update({
        naam: name,
        avatar: character,
        kleur: color,
      })
      .then(function () {
        console.log("Document successfully written!");
        return true;
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
        return false;
      });
  };
}
export default AuthService;
