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
        window.localStorage.setItem('emailForSignIn', email); 
        return true;
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
