import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import React, { useState } from "react";

export const AuthContext = React.createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginDetails, setLoginDetails] = useState({});

  // useEffect(() => {
  //   console.log(JSON.parse(localStorage.getItem("loginDetails")));
  // }, [loggedIn]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <AuthContext.Provider
            value={{
              loggedIn,
              setLoggedIn,
              loginDetails,
              setLoginDetails
            }}
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </AuthContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
