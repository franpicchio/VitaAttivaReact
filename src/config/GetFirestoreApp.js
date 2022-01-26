import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVW7N5Qu81Hh1UKurAJfUrKziwtMA6JKs",
  authDomain: "vita-attiva-react.firebaseapp.com",
  projectId: "vita-attiva-react",
  storageBucket: "vita-attiva-react.appspot.com",
  messagingSenderId: "640243943196",
  appId: "1:640243943196:web:11a8cda093a072696f1cd9"
};

const app = initializeApp(firebaseConfig);

export const GetFirestoreApp = () => {
    return app
}