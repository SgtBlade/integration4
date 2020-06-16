import "firebase/auth";

/*
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
*/

class AuthService {
  constructor(firebase, onAuthStateChanged) {
    this.auth = firebase.auth();
    this.auth.onAuthStateChanged(user => onAuthStateChanged(user));
  }


  
  login = async (email) => {

    
    const actionCodeSettings = {
        url: 'https://localhost:3000/login',
        handleCodeInApp: true,
      };

    try {
      const result = await this.auth.sendSignInLinkToEmail(email, actionCodeSettings)
      .then(function() {
        console.log("The link was successfully sent. Inform the user.")
        console.log("Save the email locally so you don't need to ask the user for it again");
        console.log("if they open the link on the same device.");
        window.localStorage.setItem('emailForSignIn', email); 
      })
      .catch(function(error) {
        console.log("Some error occurred, you can inspect the code: error.code");
        console.log(error.code);
      });
      if(result) console.log('true');
      return result;
    } catch (error) {
      console.log(error)
    }
  };

}
export default AuthService;
