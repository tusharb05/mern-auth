import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerFunc = e=>{
      e.preventDefault()
      history.push('/login')
      fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-type': 'application/json'}
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
  }

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form className="register-form" onSubmit={e=>registerFunc(e)}>
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
