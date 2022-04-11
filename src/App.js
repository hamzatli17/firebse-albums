import React, { useEffect, useState } from 'react'
//import {firebase} from 'firebase/app';
import 'firebase/firestore';

import {app} from './base'
import NewAlbumForm from './NewAlbumForm'
import { getFirestore,collection, getDocs } from 'firebase/firestore';

//const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const App = () => {
  const [albums,setAlbums] = useState([
 
  ])


  useEffect(() => {
    const q = (collection(db,"album")) ;
    
    const querySnapshot =   getDocs(q);
    
    
    querySnapshot.then((snapshot) =>{
     // console.log("Current data: ", doc);
     // tempAlbums.setAlbums(doc)
     const tempAlbums =[]
     snapshot.docs.forEach((doc) =>{
      tempAlbums.push( doc.data())
     })
     setAlbums(tempAlbums)
      })
    
  
  })
  return (
<>
    <section>
    {
        albums.map(album =>(
          <aside key={album.name}>
        <img src={album.image}alt='album'/>
        <h3>
          {albums.ame} 
        </h3>
      </aside>
        ))
     }
  
      <footer>
      <NewAlbumForm/>
      </footer>
    </section>
    </>
  )
}

export default App
