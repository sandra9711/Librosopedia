document.addEventListener("DOMContentLoaded",event=>{
    
let thingsRef;
let unsubscribe;
    const app=firebase.app();
    console.log(app)
  });
  let db = firebase.firestore();

  document.addEventListener('blogbtn').onclick=function(ev){
      ev.preventDefault();
      append_data();
  }
function append_data(){
      // Add a new document with a generated id.
      var tl = document.getElementById("title").value;
      //var dt = document.getElementById("date").value;
      const { serverTimestamp } = firebase.firestore.FieldValue;
      var data = document.getElementById("blog_txt").value;
db.collection("blog").add({
    title:tl,
    date: serverTimestamp(),
    content: data
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}