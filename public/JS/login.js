
  document.addEventListener("DOMContentLoaded",event=>{
    const app=firebase.app();
    console.log(app)
  });
  function signup(){
    alert("Signing Up");
    const email = String(document.getElementById('eid').value);
    const pasw = String(document.getElementById('psw').value);
    firebase.auth().createUserWithEmailAndPassword(email, pasw)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("Signed Up");
    location.replace("./library.html");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    

  }
  

  function google_login(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      const user = result.user;
      console.log(user)
      if(user){
        alert("Logged In");
        location.replace("./library.html");
      }
    })
    .catch(console.log)
  }
  function logout(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      alert("Logged Out");
      location.replace("./index.html")
    }).catch((error) => {
      // An error happened.
    });
  }
  function login(){
      const email = String(document.getElementById('reqe').value);
      const pasw = String(document.getElementById('reqp').value);
      
      const promise = firebase.auth.signInWithEmailAndPassword(email, pasw).then((success) =>{
        
        var user = userCredential.user;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            
		alert("Logged In");
        location.replace("./library.html");
    });
		promise.catch(e => alert(e.message));
		
		alert("Signed In");

  }

  /**firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
        // Database Reference
        thingsRef = db.collection('books')

        createThing.onclick = () => {

            const { serverTimestamp } = firebase.firestore.FieldValue;

            thingsRef.add({
              name: d_1.value,
              book:d_2.value,
              contact:d_3.value,
              price: d_5.value,
                createdAt: serverTimestamp()
            });
        }
      
    }
  });**/