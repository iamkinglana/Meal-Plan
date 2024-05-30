import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0Li95AzCn5QbJM3Fi6_iE216SvepO19w",
    authDomain: "mealplan-8ca36.firebaseapp.com",
    projectId: "mealplan-8ca36",
    storageBucket: "mealplan-8ca36.appspot.com",
    messagingSenderId: "120308051475",
    appId: "1:120308051475:web:cb2e221d37c48d58d399e6"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
