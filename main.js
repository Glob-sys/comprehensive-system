// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Authentication functions
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('تم تسجيل الدخول بنجاح');
            displayContent();
        })
        .catch(error => {
            alert(error.message);
        });
}

function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('تم إنشاء الحساب بنجاح');
            displayContent();
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayContent() {
    const user = auth.currentUser;
    if (user) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content').innerHTML = '<h2>مرحبًا، ' + user.email + '</h2>';
    }
}

// Firestore functions (add your Firestore operations here)
