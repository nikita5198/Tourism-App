import React, { useState } from 'react';
import './login.css';
import { auth } from '../Firebase'; // Import the `auth` instance from your firebase.js file
import { getFirestore, addDoc, collection } from 'firebase/firestore'; // Import Firestore SDK functions

function Login({handleCloseClick}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(username, password);
      const user = userCredential.user;

      // Store user data in Firestore
      const db = getFirestore();
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      });

      console.log('User logged in successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='loginMainContainer'>
      <div className='loginSubContainer'>
        <button className='logButton'>IRCTC login</button>
        <button className='logButton'>Guest Login</button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>LOGIN TO YOUR IRCTC TOURISM </div>
      <div className='loginInputContainer'>
        <label className='inputContent' htmlFor='username'>
          User Name
        </label>
        <br />
        <input
          className='name'
          type='text'
          placeholder='Enter Your User Name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label className='inputContent' htmlFor='password'>
          Password
        </label>
        <br />
        <input
          className='name'
          type='password'
          placeholder='Enter Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='loginbtn' onClick={handleLogin}>
        LOGIN
      </button>
      <hr style={{ margin: '1rem 2rem ' }} />
      <div style={{ textAlign: 'center' }}>
        Not a member? Sign Up Forgot Password?
      </div>
      <div className='closeIcon' onClick={handleCloseClick}>X</div>
    </div>
  );
}

export default Login;
