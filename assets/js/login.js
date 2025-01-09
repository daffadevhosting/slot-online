import {firebaseConfig} from './configAuth.js';
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const signupForm = document.querySelector('.registration.form');
const loginForm = document.querySelector('.login.form');
const forgotForm=document.querySelector('.forgot.form');
const container=document.querySelector('.container');
const signupBtn = document.querySelector('.signupbtn');
const anchors = document.querySelectorAll('a');
anchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    const id = anchor.id;
    switch(id){
    case 'loginLabel':
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        forgotForm.style.display = 'none';
        break;
      case 'signupLabel':
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        forgotForm.style.display = 'none';
        break;
      case 'forgotLabel':
        signupForm.style.display = 'none';
        loginForm.style.display = 'none';
        forgotForm.style.display = 'block';
        break;
    }
  });
});
signupBtn.addEventListener('click', () => {
  const name = document.querySelector('#name').value;
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value;
  const phone = document.querySelector('#phone').value;
  const bank = document.querySelector('#bank').value;
  const norek = document.querySelector('#norek').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;
        user.sendEmailVerification()
        .then(() => {
          Swal.fire({
				  title: 'Berhasil',
				  text: 'Verification email terkirim. periksa inbox e-mail kamu, lakukan verifikasi terlebih dahulu sebelum login dan bermain.',
				  icon: 'success',
				  confirmButtonText: 'Siap bro...!'
		  });
        })
        .catch((error) => {
   Swal.fire({
				  title: 'error',
				  text: 'Gagal mengirim verifikasi: ' + error.message,
				  icon: 'error',
				  confirmButtonText: 'Bajingan'
   });
        });
        console.log('User data saved to Firestore');
        firestore.collection('users').doc(uid).set({
          name: name,
          username: username,
          email: email,
		  phone: phone,
		  bank: bank,
		  norek: norek,
      })
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        forgotForm.style.display = 'none';
    })
    .catch((error) => {
   Swal.fire({
				  title: 'error',
				  text: 'Error signing up: '+error.message,
				  icon: 'error',
				  confirmButtonText: 'Bajingan'
   });
    });
});
const loginBtn = document.querySelector('.loginbtn');
loginBtn.addEventListener('click', () => {
  const email = document.querySelector('#inUsr').value.trim();
  const password = document.querySelector('#inPass').value;
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        console.log('User is signed in with a verified email.');
        location.href = "home.html";
      } else {
   Swal.fire({
				  icon: 'error',
				  text: 'Please verify your email before signing in.',
				  confirmButtonText: 'Baiklah'
   });
      }
    })
    .catch((error) => {
      Swal.fire({
				title: 'Error!',
				text: 'Error signing in: ' + error.message,
				  icon: 'error',
				  confirmButtonText: 'Sialan'
				});
    });
});
const forgotBtn=document.querySelector('.forgotbtn');
forgotBtn.addEventListener('click', () => {
  const emailForReset = document.querySelector('#forgotinp').value.trim();
 if (emailForReset.length>0) {
   auth.sendPasswordResetEmail(emailForReset)
 .then(() => {
   Swal.fire({
			text: 'Password reset email sent. Please check your inbox to reset your password.',
				  icon: 'info',
				  confirmButtonText: 'Sip deh'
			   });
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        forgotForm.style.display = 'none';
    })
    .catch((error) => {
   Swal.fire({
				title: 'Error!',
				text: 'Error sending password reset email: ' + error.message,
				  icon: 'error',
				  confirmButtonText: 'Bedebah'
   });
  });
  }
});