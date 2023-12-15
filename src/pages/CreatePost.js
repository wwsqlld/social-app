import React, { useEffect, useState } from 'react';
import { addDoc, collection} from 'firebase/firestore'
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreatePost( {isAuth} ) {

  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")

  const postCollectionRef = collection(db, "posts") 

  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid } });
    navigate("/");
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });


  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a Post</h1>
        <div className='inputGp'>
          <label> Title: </label>
          <input placeholder='Title please' onChange={(event) => {setTitle(event.target.value)}}></input>
        </div>
        <div className='inputGp'>
        <label> Post: </label>
        <textarea placeholder='Text post please' onChange={(event) => {setPostText(event.target.value)}}></textarea>
        </div>
        <button onClick={createPost}>Submit Post 2</button>
      </div>
    </div>
  )
}

export default CreatePost