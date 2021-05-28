function SignUp(){
    var userFullName = document.getElementById("fnm").value;
    var userSurname = document.getElementById("snm").value;
    var userEmail = document.getElementById("eid").value;
    var userPassword = document.getElementById("psw").value;
    var userFullNameFormate = /^([A-Za-z.\s_-])/;    
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      

    var checkUserFullNameValid = userFullName.match(userFullNameFormate);
    var checkUserEmailValid = userEmail.match(userEmailFormate);
    var checkUserPasswordValid = userPassword.match(userPasswordFormate);

    if(checkUserFullNameValid == null){
        return checkUserFullName();
    }else if(userSurname === ""){
        return checkUserSurname();
    }else if(checkUserEmailValid == null){
        return checkUserEmail();
    }else if(checkUserPasswordValid == null){
        return checkUserPassword();
    }else{
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            var firebaseRef = firebase.database().ref();
            var userData = {
                userFullName: userFullName,
                userSurname: userSurname,
                userEmail: userEmail,
                
            }
            firebaseRef.child(uid).set(userData);
            swal('Your Account Created','Your account was created successfully, you can log in now.',
            ).then((value) => {
                setTimeout(function(){
                    window.location.replace("../index.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: "Error",
            })
        });
    }
}
function myFun(){
    const btn=document.getElementById("bars");
    const list=document.getElementById("list-res");
    list.style.display="none"
    btn.addEventListener("click",(event)=>{
        if(list.style.display=="none"){
            list.style.display="block"
            event.preventDefault()
        }else{
            list.style.display="none"
            event.preventDefault()
        }
    })
}
function myFunction(){
    if(document.getElementById("eid").value==null || document.getElementById("eid").value==""){
        alert("This field can't be empty");
    }
    if(document.getElementById("fnm").value==null || document.getElementById("fnm").value==""){
        alert("This field can't be empty");
    }
    if(document.getElementById("snm").value==null || document.getElementById("snm").value==""){
        alert("This field can't be empty");
    }
    if(document.getElementById("pno").value==null || document.getElementById("pno").value==""){
        alert("This field can't be empty");
    }
    if(document.getElementById("psw").value==null || document.getElementById("psw").value==""){
        alert("This field can't be empty");
    }
    if(document.getElementById("cpw").value==null || document.getElementById("cpw").value==""){
        alert("This field can't be empty");
    }
    fn2();
    loc();
}
function loc(){
    location.replace("library.html")
}
function fn2(){
    var psw=document.getElementById("pws").value;
    var cpw=document.getElementById("cpw").value;
    if(psw!=cpw){
        window.alert("Invalid password")
    }else{
        document.write("<h2 style='padding:20px;'>Welcome ,You Succesfully Joined Librosopedia community.<br> <br><button style='background-color:#6d5f5f;color:white; padding:10px;' class='btn btn-secondary' onclick='loc()'>Get Started</button>")
    }
}
