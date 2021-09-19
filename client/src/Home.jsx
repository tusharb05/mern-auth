import React, { useEffect, useContext } from "react";
import { AuthContext } from "./App";
import { Link } from "react-router-dom";

const Home = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const logout = ()=>{
    localStorage.removeItem("loginDetails")
    setLoggedIn(false)
  }

  useEffect(() => {

    if (localStorage.getItem('loginDetails')!==null) {
      
      fetch('http://localhost:5000/api/user/verify', {
        method: 'POST',
        body: localStorage.getItem('loginDetails'),
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.status==='logged in') return setLoggedIn(true)
      })

    } else {
      setLoggedIn(false);
    }
  }, [setLoggedIn]);

  return (
    <div className="home-container">
      <h1>Home</h1>
      {
          loggedIn ?
          <>
            <h2>You are logged in</h2>
            <button onClick={logout}>Sign out</button>
          </>
          :
          <>
            <h2>You are not logged in</h2> 
            <Link to="/login" style={{marginRight:'10%'}}>Login</Link>
            <Link to="/register">Register</Link>
          </>  
      }
      
    </div>
  );
};

export default Home;
