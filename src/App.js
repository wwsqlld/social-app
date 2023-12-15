import './App.css';
import { BrowserRouter as Router, Link, Route, Routes  } from "react-router-dom";
import Home  from './pages/Home.js';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login.js';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config.js'

function App() {


  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        
        {!isAuth ? (
        <Link to="/login">Login</Link> 
        ) : (
          <>
          <Link to="/createpost">Create Post</Link>  
          <button onClick={signUserOut}>Sign out</button> 
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}/>
      </Routes>
    </Router>
  );
}

export default App;
