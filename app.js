var firebaseConfig = {
     apiKey: "AIzaSyAI1ZwU8vMxLNkMnOTEpbxeuv3Xvwqr4xs",
     authDomain: "conatactformfirebase.firebaseapp.com",
     databaseURL: "https://conatactformfirebase.firebaseio.com",
     projectId: "conatactformfirebase",
     storageBucket: "conatactformfirebase.appspot.com",
     messagingSenderId: "140158448883",
     appId: "1:140158448883:web:4db0df429b96aa770f7386"
   };

   firebase.initializeApp(firebaseConfig);
   var firestore = firebase.firestore();

   const submitBtn=document.querySelector('#submit');

   let userName= document.querySelector('#userFullName');
   let userEmail= document.querySelector('#userEmail');
   let userMessage= document.querySelector('#userMessage');
   let userAmount= document.querySelector('#userAmount');
  

   const db=firestore.collection("contactData");

   submitBtn.addEventListener('click',function(){
          let userNameInput=userName.value;
          let userEmailInput=userEmail.value;
          let userMessageInput=userMessage.value;
          let userAmountInput=userAmount.value;
          

          db.doc()
          .set({
               name: userNameInput,
               email: userEmailInput,
               message: userMessageInput,
               amount: userAmountInput
          })
          .then(function(){
               console.log("Data Saved");
          })
          .catch(function(error){
               console.log(error);
          });  
   });