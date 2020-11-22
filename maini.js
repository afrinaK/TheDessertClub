// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {
    apiKey: "AIzaSyChe-OHvuj2361Ya1bHS-Turv2MWQsW49A",
    authDomain: "bdu2019-a6dd2.firebaseapp.com",
    databaseURL: "https://bdu2019-a6dd2.firebaseio.com",
    projectId: "bdu2019-a6dd2",
    storageBucket: "bdu2019-a6dd2.appspot.com",
    messagingSenderId: "909049036150",
    appId: "1:909049036150:web:50342c5d3796d951198e57",
    measurementId: "G-XFDJ9RJHGK"
  };
  const userName=document.getElementById("userName");
  const userEmail=document.getElementById("userEmail");
  const userSubject=document.getElementById("subject");
  const userMessage=document.getElementById("userMessage");

  const submitBtn=document.getElementById("submitmsg");

  const database=firebase.database();

  submitBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        database.ref('/users/'+userName.value).set({
        Name:userName.value,
        Email:userEmail.value,
        Subject:userSubject.value,
        Message:userMessage.value,
        });
        document.getElementById("contactForm").reset();
  });