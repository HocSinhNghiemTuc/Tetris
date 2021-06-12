import React, { useEffect, useState } from "react";
import "./styles.css";
import Login from "./components/Login";
import { auth, storeUserInfo, updateUser } from "./lib/firebase";

// import Tetris from "./components/Tetris";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import User from "./components/Admin/components/User";
import Header from "./components/Admin/components/Header";
import TableQL from "./components/Admin/components/TableQL";
import Upload from "./components/Upload";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setLoading(false);
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
      }
      setUser(newUser);
    });
  }, []);

  const logout = () => {
    auth.signOut();
  };

  const handleImageChanged = async downlodUrl => {
    await updateUser(user, downlodUrl);
  }

  const HeaderContent = () => {
    if (user) {
      return (
        <div class='navbar-end'>
          <div class='navbar-item'>
            <Upload userImage={user.image} onSelectImage={handleImageChanged} />
            {user.name}
          </div>
          <div class='navbar-item'>
            <button class='button is-danger is-light is-small' onClick={logout}>
              {" "}
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      return <Login />;
    }
  };
  return (
    <BrowserRouter>
    <div className='container is-fluid'>
      <header class='navbar'>
        {loading ? <p>LOADING.....</p> : <HeaderContent />}
      </header>
      <div>{user && <Header/>}</div>
    </div>
    <Switch>
      <Route path='/' exact component={TableQL} />
      <Route path='/users' component={User} />
    </Switch>
  </BrowserRouter>
  );
}
