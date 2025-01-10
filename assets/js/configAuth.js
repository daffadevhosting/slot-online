const firebaseConfig = {
	apiKey: "AIzaSyBzZ0Eejslus09Anpe6TE0GvZbM5TVXowk",
	authDomain: "kotakamal-slot.firebaseapp.com",
	databaseURL: "https://kotakamal-slot-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "kotakamal-slot",
	storageBucket: "kotakamal-slot.firebasestorage.app",
	messagingSenderId: "557715051384",
	appId: "1:557715051384:web:a0b7320541889f2e376e8d",
	measurementId: "G-CE5B71D5D9"
};function toggleUI(){if(auth.currentUser){location.href="home"}else{}}
export {firebaseConfig};