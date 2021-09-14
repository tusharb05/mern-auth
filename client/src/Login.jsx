import React, { useState, useContext } from "react";
import { AuthContext } from "./App";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setLoggedIn, setLoginDetails } = useContext(AuthContext);
  // console.log(loggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.status==='logged in'){
        setLoginDetails({...data._doc})
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ username: data._doc.username, password: data._doc.password})
        );
      }
    })

    // setLoginDetails({ username, password });
    // localStorage.setItem(
    //   "loginDetails",
    //   JSON.stringify({ username, password })
    // );
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login!</button>
      </form>
    </div>
  );
};

export default Login;
