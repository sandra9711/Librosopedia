
  document.addEventListener("DOMContentLoaded",event=>{
    const app=firebase.app();
    console.log(app)
    const createThing = document.getElementById('subtn');
   // const thingsList = document.getElementById('thingsList');
  //const db = firebase.firestore();
    let thingsRef;
    let unsubscribe;
  });
  var ImgName,ImgUrl;
  var files=[];var reader;
  document.getElementById("fid_txt4").onclick = function (e){
    var input =document.createElement('input');
    input.type='file';
    input.click();
    input.onchange=e=>{
      files=e.target.files;
      reader =new FileReader();
      reader.onload=function(){
        document.getElementById("myimg").src=reader.result;
      }
      reader.readAsDataURL(files[0]);
    }
      input.click();
  }
  document.getElementById('upbtn').onclick=function(event){
    event.preventDefault();
    ImgName=document.getElementById('namebox').value;
    var uploadTask = firebase.storage().ref('Images/'+ImgName+".png").put(files[0]);
    uploadTask.on('state_changed',function(snapshot){
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
      document.getElementById('UpProg').innerHTML='Upload'+progress+'%';
    },

    function(error){
      console.log(error);
    }, 

    function(){
      uploadTask.snapshot.ref.getDownloadURL().then(function(url){
        ImgUrl=url;
      });
      firebase.database().ref('Pics/'+ImgName).set({
        Name:ImgName,
        Link:ImgUrl
      })
    }
    );
  
  }
  function add_fs(){
    var d_1=document.getElementById("fid_txt1");
   var d_2=document.getElementById("fid_txt2");
   var d_3=document.getElementById("fid_txt3");
   var d_5=document.getElementById("fid_txt5");
      // Database Reference
      //https://trickuweb.com/submit-custom-html-form-data-to-google-sheets.php / https://www.youtube.com/watch?v=39XZBKmcMfE
      if(d_1.value==""){
        alert("Contributor Name should be filled.");
    }
    if(d_2.value==""){
        alert("Book Name and category should be filled.");

    }
    if(d_3.value==""){
        alert("Contact cannot be empty.");
    }
    
      thingsRef = db.collection('books')

      createThing.onclick = (ev) => {
          ev.preventDefault();
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
  
  let db=firebase.firestore();
  
  document.getElementById('subtn').onclick=function(ev){
    ev.preventDefault();
    d_s();
    data_fn();
  }

function d_s(){
    var d_1=document.getElementById("fid_txt1");
    var d_2=document.getElementById("fid_txt2");
    var d_3=document.getElementById("fid_txt3");
    var d_5=document.getElementById("fid_txt5");
    db.collection("book").add({
          NameOfContr: d_1.value,
          Book:d_2.value,
          contact:d_3.value,
          price: d_5.value
      }).catch(function (error){
          console.log("error",error);
      })
      alert("Thank You.Submission succesful.Our team will review the data.")
    //document.getElementById('form').reset();
}


function data_fn(){
    firebase.database().ref('books/'+ d_2.value).set({
        NameOfContr: d_1.value,
        Book:d_2.value,
        contact:d_3.value,
        price: d_5.value
    });
    document.getElementById('form').reset();
}
function writeUserData(d_1, d_2, d_3,d_5) {
  firebase.database().ref('books/' + d_2).set({
    Name: d_1.value,
    book : d_2.value,
    contact : d_3.value,
    price : d_5.value
  });
  //alert("Thank You.Submission succesful.Our team will review the data.")
  document.getElementById('form').reset();
}