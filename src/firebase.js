import firebase from 'firebase'

const firebaseConfig = {
    //...
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase 