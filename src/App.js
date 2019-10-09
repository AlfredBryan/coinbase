import React from "react";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Register from "./components/User/Register";
import Login from "./components/User/Login";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-up" component={Register} />
        <Route exact path="/sign-in" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
