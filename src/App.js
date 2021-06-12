import React from "react";
import "./styles.css";

// import Tetris from "./components/Tetris";
import Admin from "./components/Admin";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import User from "./components/Admin/components/User";
import Header from "./components/Admin/components/Header";
import TableQL from "./components/Admin/components/TableQL";

export default function App() {
  // return <Tetris />;
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={TableQL}/>
        <Route path="/users" component={User}/>
      </Switch>
    </BrowserRouter>
    
  );
}
