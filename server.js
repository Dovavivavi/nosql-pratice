const express = require('express');
const app = express();
const port = 3000;

//from firebase site
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//for firebase acc/key
const admin = require("firebase-admin");
const serviceAccount = require("./service_acc_credential.json");

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  apiKey: "AIzaSyBKjhrQympteGzKqj9HJtju2NdLTAuwwKc",
  authDomain: "fir-practice-f1a18.firebaseapp.com",
  projectId: "fir-practice-f1a18",
  storageBucket: "fir-practice-f1a18.appspot.com",
  messagingSenderId: "993074186976",
  appId: "1:993074186976:web:e1259b65de8c9192c11e85"
});

const db = getFirestore(firebase);

app.get('/users', async (req, res) => {
  // const userRef = db.collection('users').doc(1)
  // const doc = await userRef.get()
  // console.log(doc.data())
  const snapshot = await db.collection('users').get();
  // console.log(snapshot);
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
    console.log(doc.data())
  });
});

app.listen(port, (req, res) => {
  console.log(`server is running at http://127.0.0.1:${port}`);
});