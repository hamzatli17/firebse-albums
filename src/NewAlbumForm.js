
import React, {  useState } from 'react'
import { app } from "./base";
//import firebase from 'firebase/app';
//import 'firebase/firestore';
//import { initializeApp } from 'firebase/app';
import {getFirestore,collection, query} from 'firebase/firestore';

//const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const NewAlbumForm = () => {
  const [albumName, setAlbumName] = useState([]);
  return (
    <>
      <input
        value={albumName}
        onChange={(e) => setAlbumName(e.target.value)}
        tupe="text"
      ></input>
      <button
        onClick={() => {
          if (!albumName) {
            return;
          }
          query(collection(db,"album")).doc(albumName).set({
            name: albumName,
          });
          setAlbumName("");
        }}
      > create album</button>
    </>
  );
};

export default NewAlbumForm;
