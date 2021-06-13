import React, { useEffect, useState } from 'react'
import "./styles.css";

// import Tetris from "./components/Tetris";
import Admin from "./components/Admin";
import Login from "./components/Authentication/Login";

import { auth, storeUserInfo, updateUser } from "./lib/firebase";
// =======
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import User from "./components/Admin/components/User";
import Header from "./components/Admin/components/Header";
import TableQL from "./components/Admin/components/TableQL";
// >>>>>>> master

export default function App() {

  const [admin, setAdmin] = useState(true);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setLoading(false);
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
        if (!newUser.isAdmin) {
          setAdmin(false);
        }
      }

      setUser(newUser);
    });
  }, []);

  const Content = () => {
    if (user) {
      return (
        <div class="navbar-end">
          <div>
            <BrowserRouter>
              <Header {...user} />
              <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/users" component={() => admin ? <Admin /> : <User {...user} />} />
              </Switch>
            </BrowserRouter>
          </div>
        </div >
      )
    } else {
      return (<Login />)
    }
  }

  return (
    <div className="container is-fluid">
      <header class="navbar">
        {loading ? (
          <p>
            LOADING.....
          </p>
        ) : (
          <Content />
        )}
      </header >
      </div>

  // return <Tetris />;
  //return <Admin />;

  );
}

