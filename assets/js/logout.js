import { firebaseConfig } from "./configAuth.js";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const signoutBtn = document.querySelector('#signoutbtn');
signoutBtn.addEventListener('click', () => {
  auth.signOut()
    .then(() => {
   Swal.fire({
			text: 'Logout Berhasil, yoooo...!!!',
			icon: 'info',
			showConfirmButton: false,
			   });
      location.href = "/";
    })
    .catch((error) => {
   Swal.fire({
			text: 'Error signing out: ', error,
			icon: 'warning',
			confirmButtonText: 'Sue blog ah'
			   });
    });
});