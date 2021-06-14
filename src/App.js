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
import Ranking from "./components/Ranking";
import TableQL from "./components/Admin/components/TableQL";
import Tetris from "./components/Tetris";
// >>>>>>> master

export default function App() {

  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
        if (!newUser.isAdmin) {
          setAdmin(false);
        } else {
          setAdmin(true);
        }
      }
      setUser(newUser);
      setLoading(false);
    });
  }, []);

  const Content = () => {
    if (user) {
      if (!user.isBlocked) {
        return (
          <div className="navbar-end">
            <div>
              <BrowserRouter>
                <Header {...user} />
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route exact path="/users" component={() => admin ? <TableQL /> : <User {...user} />} />
                  <Route exact path="/" component={() => admin ? <TableQL /> : <Tetris current_user={user} setUser={setUser} />} />
                  <Route path="/users/ranking" component={() => <Ranking />} />
                </Switch>
              </BrowserRouter>
            </div>
          </div >
        )
      } else {
        return (
          <div className="navbar-end">
            <div>
              <Login />
            </div>
            <script>
              function dialog(){
                window.alert("Your Account is Blocked")
              }
            </script>
          </div>
        )
      }

    } else {
      return (<Login />)
    }
  };



  return (
    <div className="container-fluid">
        {loading ? (
          <p>
            LOADING.....
          </p>
        ) : (
          <Content />
        )}
      </div>

  // return <Tetris />;
  //return <Admin />;

  );
}

