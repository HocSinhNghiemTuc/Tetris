import React, { useEffect, useState } from 'react'
import "./styles.css";

import khung from './assets/khung.png';

import { Image } from 'react-bootstrap';

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

  const logout = () => {
    auth.signOut();
  };

  const Body_Home = () => {
    return (
      <div className="mt-5 container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="mx-5" style={{ marginTop: `30%` }}>
              <h2 className="text-center">楽しませるため</h2>
              <h2 className="text-center">ストレスを解消するため</h2>
              <h2 className="text-center">他のユーザーとのコンペ</h2>
              <Login />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div style={{ marginTop: `20%` }}>
              <Image
                src={khung}
                thumbnail
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              {logout()}
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
      return (
        <>
          <Header user={null} />
          <Body_Home />
        </>
      )
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

