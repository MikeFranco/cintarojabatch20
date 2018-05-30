let btnLogin = document.getElementById("login");
let btnLogout = document.getElementById("logout");


// console.log(btnLogout, btnLogin);

firebase.auth().onAuthStateChanged(function(user){
  console.log(user)
  if (user) {
    console.log("hay usuario")
  } else{
    console.log("no hay usuario")
  }
})


// const showLogin = () =>{
  
// }
 
btnLogin.addEventListener("click",function(){
  console.log("login");

  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  firebase.auth().signInWithPopup(provider).then((user)=>{
    console.log(user)
  }).catch((error)=>{
    console.log(error)
  })
})